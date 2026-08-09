import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const session = cookieStore.get(
      getAdminSessionCookieName()
    )?.value;

    const authenticated =
      isAdminAuthenticated(session);

    return NextResponse.json({
      authenticated,
    });
  } catch (error) {
    console.error(
      "Admin session check error:",
      error
    );

    return NextResponse.json(
      {
        authenticated: false,
      },
      {
        status: 500,
      }
    );
  }
}