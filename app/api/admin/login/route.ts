import { NextResponse } from "next/server";

import {
  createAdminSession,
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
  validateAdminCredentials,
} from "@/app/lib/admin-auth";
import { checkRateLimit, isRequestBodyTooLarge, rateLimitHeaders } from "@/app/lib/request-security";

export async function POST(request: Request) {
  try {
    if (isRequestBodyTooLarge(request, 8 * 1024)) {
      return NextResponse.json({ error: "Login request is too large." }, { status: 413 });
    }

    const rateLimit = checkRateLimit(request, "admin-login", 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many login attempts. Please wait before trying again." },
        { status: 429, headers: rateLimitHeaders(rateLimit) }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid login request." }, { status: 400 });
    }

    const email = String(body?.email ?? "").trim();
    const password = String(body?.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        {
          error: "Email and password are required.",
        },
        {
          status: 400,
        }
      );
    }

    const valid = validateAdminCredentials(
      email,
      password
    );

    if (!valid) {
      return NextResponse.json(
        {
          error: "Invalid admin email or password.",
        },
        {
          status: 401,
        }
      );
    }

    const session = createAdminSession();

    const response = NextResponse.json({
      success: true,
      message: "Admin login successful.",
    });

    response.cookies.set(
      getAdminSessionCookieName(),
      session,
      getAdminSessionCookieOptions()
    );

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      {
        error: "Unable to log in as administrator.",
      },
      {
        status: 500,
      }
    );
  }
}
