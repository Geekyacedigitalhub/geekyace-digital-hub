const JSON_BODY_LIMIT = 32 * 1024;
const AUTH_BODY_LIMIT = 16 * 1024;
const UPLOAD_BODY_LIMIT = 8 * 1024 * 1024;

export function hasBodyExceededLimit(
  request: Request,
  limit: number
): boolean {
  const rawLength = request.headers.get("content-length");

  if (!rawLength) {
    return false;
  }

  const length = Number(rawLength);

  return Number.isFinite(length) && length > limit;
}

export function requestTooLargeResponse() {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Request body is too large.",
    }),
    {
      status: 413,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}

export { AUTH_BODY_LIMIT, JSON_BODY_LIMIT, UPLOAD_BODY_LIMIT };
