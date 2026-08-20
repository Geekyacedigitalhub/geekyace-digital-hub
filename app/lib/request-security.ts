type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitStore = Map<string, RateLimitBucket>;

type RateLimitGlobal = typeof globalThis & {
  geekyaceRateLimits?: RateLimitStore;
};

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

const rateLimitGlobal = globalThis as RateLimitGlobal;
const rateLimitStore =
  rateLimitGlobal.geekyaceRateLimits ?? new Map<string, RateLimitBucket>();

if (process.env.NODE_ENV !== "production") {
  rateLimitGlobal.geekyaceRateLimits = rateLimitStore;
}

function getClientAddress(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    request.headers.get("x-real-ip")?.trim() ||
    forwarded ||
    "unknown"
  ).slice(0, 120);
}

function pruneExpiredBuckets(now: number) {
  if (rateLimitStore.size < 1_000) return;

  for (const [key, bucket] of rateLimitStore) {
    if (bucket.resetAt <= now) rateLimitStore.delete(key);
  }
}

export function checkRateLimit(
  request: Request,
  namespace: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  pruneExpiredBuckets(now);

  const key = `${namespace}:${getClientAddress(request)}`;
  const current = rateLimitStore.get(key);
  const bucket = !current || current.resetAt <= now
    ? { count: 0, resetAt: now + windowMs }
    : current;

  bucket.count += 1;
  rateLimitStore.set(key, bucket);

  return {
    allowed: bucket.count <= limit,
    remaining: Math.max(0, limit - bucket.count),
    retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1_000)),
  };
}

export function isRequestBodyTooLarge(request: Request, maxBytes: number): boolean {
  const value = request.headers.get("content-length");
  if (!value) return false;

  const bytes = Number(value);
  return Number.isFinite(bytes) && bytes > maxBytes;
}

export function rateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    "Cache-Control": "no-store",
    "Retry-After": String(result.retryAfterSeconds),
    "X-RateLimit-Remaining": String(result.remaining),
  };
}
