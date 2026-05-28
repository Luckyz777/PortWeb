import { createHmac, timingSafeEqual } from "node:crypto";
import {
  ARTICLE_ACCESS_COOKIE,
  ARTICLE_ACCESS_ERROR_COOKIE,
  ARTICLE_ACCESS_MAX_AGE_SECONDS,
  getArticleAuthSecret,
  getArticlePassword,
} from "./access-constants";

export {
  ARTICLE_ACCESS_COOKIE,
  ARTICLE_ACCESS_ERROR_COOKIE,
  ARTICLE_ACCESS_MAX_AGE_SECONDS,
};

function sign(value: string): string {
  return createHmac("sha256", getArticleAuthSecret()).update(value).digest("hex");
}

function constantTimeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function isArticlePasswordValid(value: FormDataEntryValue | null): boolean {
  if (typeof value !== "string") return false;

  const normalizedInput = value.trim();
  const expected = getArticlePassword();
  const inputDigest = sign(`password:${normalizedInput}`);
  const expectedDigest = sign(`password:${expected}`);

  return constantTimeEqual(inputDigest, expectedDigest);
}

export function createArticleAccessToken(): string {
  const issuedAt = Date.now().toString(36);
  const payload = `v1.${issuedAt}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyArticleAccessToken(value: string | undefined): boolean {
  if (!value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [version, issuedAt, signature] = parts;
  if (version !== "v1" || !issuedAt || !signature) return false;

  const issuedAtMs = Number.parseInt(issuedAt, 36);
  if (!Number.isFinite(issuedAtMs)) return false;

  const ageMs = Date.now() - issuedAtMs;
  if (ageMs < 0 || ageMs > ARTICLE_ACCESS_MAX_AGE_SECONDS * 1000) return false;

  const payload = `${version}.${issuedAt}`;
  return constantTimeEqual(signature, sign(payload));
}
