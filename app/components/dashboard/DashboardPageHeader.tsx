"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, LogOut } from "lucide-react";

export default function DashboardPageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();

  async function logout() {
    setLoggingOut(true);
    try {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      if (!response.ok) throw new Error("Unable to log out.");
      router.replace("/admin/login");
      router.refresh();
    } catch {
      setLoggingOut(false);
    }
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-[1440px] flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-10">
        <div className="flex items-center gap-4"><Link href="/dashboard" aria-label="Back to dashboard" className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-green-300 hover:text-green-700"><ArrowLeft className="h-5 w-5" /></Link><div><p className="font-black text-slate-950">{title}</p><p className="text-sm text-slate-500">{subtitle}</p></div></div>
        <div className="flex items-center gap-2"><Link href="/" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-green-300 hover:text-green-700">Website <ExternalLink className="h-4 w-4" /></Link><button type="button" onClick={logout} disabled={loggingOut} className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-black text-red-700 disabled:opacity-60"><LogOut className="h-4 w-4" />{loggingOut ? "Logging out" : "Logout"}</button></div>
      </div>
    </header>
  );
}
