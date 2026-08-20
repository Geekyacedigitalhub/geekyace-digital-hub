import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getAdminSessionCookieName, isAdminAuthenticated } from "@/app/lib/admin-auth";

const allowedStatuses = new Set(["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "WON", "CLOSED"]);

async function isAuthorized() {
  const cookieStore = await cookies();
  return isAdminAuthenticated(cookieStore.get(getAdminSessionCookieName())?.value);
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isAuthorized())) return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });
  const { id } = await context.params;
  const body = await request.json().catch(() => null) as { status?: string } | null;
  const status = body?.status?.trim().toUpperCase();
  if (!status || !allowedStatuses.has(status)) return NextResponse.json({ success: false, message: "Invalid lead status." }, { status: 400 });
  try {
    const lead = await prisma.lead.update({ where: { id }, data: { status } });
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("UPDATE LEAD ERROR:", error);
    return NextResponse.json({ success: false, message: "Unable to update lead." }, { status: 500 });
  }
}
