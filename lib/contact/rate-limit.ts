import { CONTACT_RATE_LIMIT } from "./constants";

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function checkContactRateLimit(key: string): boolean {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now >= existing.resetAt) {
    buckets.set(key, {
      count: 1,
      resetAt: now + CONTACT_RATE_LIMIT.windowMs,
    });
    return true;
  }

  if (existing.count >= CONTACT_RATE_LIMIT.maxRequests) {
    return false;
  }

  existing.count += 1;
  return true;
}

/** Test helper — clears in-memory buckets. */
export function resetContactRateLimitForTests(): void {
  buckets.clear();
}
