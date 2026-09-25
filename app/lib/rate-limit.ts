type RateLimitEntry = { count: number; resetAt: number };

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

const buckets = new Map<string, RateLimitEntry>();
const MAX_BUCKETS = 10_000;
const MAX_CLIENT_IDENTIFIER_LENGTH = 100;

function pruneExpiredBuckets(now: number): void {
  for (const [key, entry] of buckets) {
    if (entry.resetAt <= now) buckets.delete(key);
  }

  if (buckets.size <= MAX_BUCKETS) return;

  const oldest = [...buckets.entries()]
    .sort(([, a], [, b]) => a.resetAt - b.resetAt)
    .slice(0, buckets.size - MAX_BUCKETS);

  for (const [key] of oldest) buckets.delete(key);
}

function normalizeClientIdentifier(value: string | null): string | null {
  const normalized = value?.trim();
  if (!normalized || normalized.length > MAX_CLIENT_IDENTIFIER_LENGTH) {
    return null;
  }

  return normalized;
}

export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const forwardedIp = normalizeClientIdentifier(forwarded?.split(",")[0] ?? null);
  const realIpValue = normalizeClientIdentifier(realIp);

  return forwardedIp || realIpValue || "unknown";
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  if (buckets.size >= MAX_BUCKETS) pruneExpiredBuckets(now);
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export function rateLimitResponse(retryAfterSeconds: number) {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Too many requests. Please try again later.",
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfterSeconds),
        "Cache-Control": "no-store",
      },
    }
  );
}
