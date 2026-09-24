import { NextResponse } from "next/server";
import { isSameOriginRequest, sameOriginFailureResponse } from "@/app/lib/request-security";

import {
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
} from "@/app/lib/admin-auth";

export async function POST(request: Request) {
  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    const response = NextResponse.json({
      success: true,
      message: "Admin logged out successfully.",
    }, {
      headers: { "Cache-Control": "no-store" },
    });

    response.cookies.set(
      getAdminSessionCookieName(),
      "",
      {
        ...getAdminSessionCookieOptions(),
        maxAge: 0,
        expires: new Date(0),
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Admin logout error:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to log out.",
      },
      {
        status: 500,
      }
    );
  }
}