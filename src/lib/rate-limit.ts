/**
 * Minimal in-memory rate limiter for the contact endpoint. Adequate for a
 * single-instance deployment; swap for a shared store (Upstash/Redis) if the
 * app runs across multiple serverless instances at meaningful volume.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
