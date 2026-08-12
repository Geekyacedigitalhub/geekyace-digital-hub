import { NextResponse } from "next/server";

import {
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
} from "@/app/lib/admin-auth";

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Admin logged out successfully.",
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