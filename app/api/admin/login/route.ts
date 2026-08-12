import { NextResponse } from "next/server";

import {
  createAdminSession,
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
  validateAdminCredentials,
} from "@/app/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

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