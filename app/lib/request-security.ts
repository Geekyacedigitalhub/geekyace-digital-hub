export function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get("origin");

  // Non-browser/server-to-server requests may not send Origin.
  // Authentication is still enforced separately.
  if (!origin) {
    return true;
  }

  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost?.split(",")[0]?.trim() || request.headers.get("host");

  if (!host) {
    return false;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function sameOriginFailureResponse() {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Cross-origin request blocked.",
    }),
    {
      status: 403,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}
