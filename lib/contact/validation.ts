import {
  CONTACT_LIMITS,
  CONTACT_MIN_SUBMIT_MS,
  type ContactFieldErrors,
  type ContactPayload,
  type ContactValidationResult,
} from "./constants";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function sanitizeContactText(value: string, maxLength: number): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  return {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    message: typeof record.message === "string" ? record.message : "",
    website: typeof record.website === "string" ? record.website : "",
    formLoadedAt:
      typeof record.formLoadedAt === "number"
        ? record.formLoadedAt
        : typeof record.formLoadedAt === "string"
          ? Number(record.formLoadedAt)
          : undefined,
  };
}

export function validateContactPayload(
  body: unknown,
  options?: { checkTiming?: boolean },
): ContactValidationResult {
  const raw = parsePayload(body);
  if (!raw) {
    return { ok: false, error: "Invalid request body." };
  }

  if (raw.website && raw.website.trim().length > 0) {
    return { ok: false, error: "Rejected." };
  }

  if (options?.checkTiming !== false) {
    const loadedAt = raw.formLoadedAt;
    if (
      typeof loadedAt !== "number" ||
      !Number.isFinite(loadedAt) ||
      Date.now() - loadedAt < CONTACT_MIN_SUBMIT_MS
    ) {
      return { ok: false, error: "Rejected." };
    }
  }

  const name = sanitizeContactText(raw.name, CONTACT_LIMITS.nameMax);
  const email = sanitizeContactText(raw.email, CONTACT_LIMITS.emailMax);
  const message = sanitizeContactText(raw.message, CONTACT_LIMITS.messageMax);

  const fieldErrors: ContactFieldErrors = {};

  if (name.length === 0) {
    fieldErrors.name = "required";
  } else if (name.length < CONTACT_LIMITS.nameMin) {
    fieldErrors.name = "name_length";
  }

  if (email.length === 0) {
    fieldErrors.email = "required";
  } else if (!EMAIL_RE.test(email)) {
    fieldErrors.email = "email_invalid";
  }

  if (message.length === 0) {
    fieldErrors.message = "required";
  } else if (message.length < CONTACT_LIMITS.messageMin) {
    fieldErrors.message = "message_length";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: { name, email, message },
  };
}

export function sanitizeMailHeader(value: string): string {
  return value.replace(/[\r\n]/g, " ").trim().slice(0, 200);
}
