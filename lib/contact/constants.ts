export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  messageMin: 10,
  messageMax: 5000,
} as const;

export const CONTACT_MIN_SUBMIT_MS = Math.max(
  0,
  Number(process.env.CONTACT_MIN_SUBMIT_MS ?? "2000") || 2000,
);

export const CONTACT_RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
  formLoadedAt?: number;
};

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "message", string>
>;

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; fieldErrors?: ContactFieldErrors; error?: string };
