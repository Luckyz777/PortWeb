import { NextResponse } from "next/server";

import type { ContactFieldErrors } from "@/lib/contact/constants";
import { checkContactRateLimit } from "@/lib/contact/rate-limit";
import { sendContactEmail } from "@/lib/contact/send-email";
import { validateContactPayload } from "@/lib/contact/validation";

export const runtime = "nodejs";

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function fieldErrorResponse(fieldErrors: ContactFieldErrors) {
  return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
}

export async function POST(request: Request) {
  if (!checkContactRateLimit(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const validation = validateContactPayload(body);
  if (!validation.ok) {
    if (validation.fieldErrors) {
      return fieldErrorResponse(validation.fieldErrors);
    }
    return NextResponse.json(
      { ok: false, error: validation.error ?? "Invalid submission." },
      { status: 400 },
    );
  }

  const sendResult = await sendContactEmail(validation.data);
  if (!sendResult.ok) {
    return NextResponse.json(
      { ok: false, error: sendResult.reason },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
