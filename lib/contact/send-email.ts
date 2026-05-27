import nodemailer from "nodemailer";

import { profile } from "@/data/portfolio";

import { sanitizeMailHeader } from "./validation";

type SendContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

export function isContactEmailDisabled(): boolean {
  return process.env.CONTACT_EMAIL_DISABLED === "true";
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

export async function sendContactEmail(
  input: SendContactEmailInput,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (isContactEmailDisabled()) {
    return { ok: true };
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    return { ok: false, reason: "SMTP is not configured." };
  }

  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || profile.email;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || smtp.auth.user;

  const safeName = sanitizeMailHeader(input.name);
  const safeEmail = sanitizeMailHeader(input.email);
  const subject = sanitizeMailHeader(
    `Portfolio inquiry from ${safeName}`,
  );

  const transporter = nodemailer.createTransport(smtp);

  await transporter.sendMail({
    from: `"Portfolio Contact" <${from}>`,
    to,
    replyTo: safeEmail,
    subject,
    text: [
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      "",
      "Message:",
      input.message,
    ].join("\n"),
  });

  return { ok: true };
}
