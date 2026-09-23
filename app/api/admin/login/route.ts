import { NextResponse } from "next/server";
import { isSameOriginRequest, sameOriginFailureResponse } from "@/app/lib/request-security";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";
import { hasBodyExceededLimit, AUTH_BODY_LIMIT, requestTooLargeResponse } from "@/app/lib/request-limits";
import { createAdminSession, getAdminSessionCookieName, getAdminSessionCookieOptions, validateAdminCredentials } from "@/app/lib/admin-auth";

const noStore = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    if (hasBodyExceededLimit(request, AUTH_BODY_LIMIT)) return requestTooLargeResponse();

    const rate = checkRateLimit(`admin-login:${getClientIdentifier(request)}`, 5, 15 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    const body = await request.json();
    const email = String(body?.email ?? "").trim();
    const password = String(body?.password ?? "");

    const emailRate = checkRateLimit(
      `admin-login-email:${email.toLowerCase()}`,
      10,
      15 * 60 * 1000
    );
    if (!emailRate.allowed) return rateLimitResponse(emailRate.retryAfterSeconds);

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400, headers: noStore });
    }

    if (!validateAdminCredentials(email, password)) {
      return NextResponse.json({ error: "Invalid admin email or password." }, { status: 401, headers: noStore });
    }

    const response = NextResponse.json(
      { success: true, message: "Admin login successful." },
      { headers: noStore }
    );

    response.cookies.set(getAdminSessionCookieName(), createAdminSession(), getAdminSessionCookieOptions());
    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Unable to log in as administrator." }, { status: 500, headers: noStore });
  }
}