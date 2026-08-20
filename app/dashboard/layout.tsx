import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const session = cookieStore.get(getAdminSessionCookieName())?.value;

  if (!isAdminAuthenticated(session)) {
    redirect("/admin/login");
  }

  return children;
}
