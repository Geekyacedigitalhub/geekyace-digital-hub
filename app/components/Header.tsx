"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Proof", href: "/case-studies" },
  { name: "Experts", href: "/experts" },
  { name: "About", href: "/about" },
];

const privateRoutes = ["/admin", "/dashboard"];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMenuOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  if (isPrivate) return null;

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-slate-200/80 bg-white/88 shadow-[0_14px_50px_-30px_rgba(2,8,23,.48)] backdrop-blur-2xl" : "border-transparent bg-white/75 backdrop-blur-xl"}`}>
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link href="/" className="relative flex h-11 w-[158px] shrink-0 items-center" aria-label="GeekyAce Digital Hub home">
          <Image src="/images/logo.png" alt="GeekyAce Digital Hub" fill sizes="158px" className="object-contain object-left" priority />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center rounded-full border border-slate-200/80 bg-white/75 p-1.5 shadow-sm lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2.5 text-[13px] font-bold transition-all ${active ? "bg-slate-950 text-white shadow-md" : "text-slate-600 hover:bg-green-50 hover:text-green-700"}`}>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/client-portal" className="text-sm font-bold text-slate-700 transition hover:text-green-700">Client portal</Link>
          <Link href="/project-planner" className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_-12px_rgba(22,163,74,.85)] transition hover:-translate-y-0.5 hover:bg-green-500">
            Start a brief
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden border-slate-200 bg-white/95 backdrop-blur-2xl transition-[max-height,border] duration-500 lg:hidden ${menuOpen ? "max-h-[580px] border-t" : "max-h-0 border-t-0"}`}>
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-2xl gap-2 p-5">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return <Link key={item.href} href={item.href} className={`rounded-2xl px-5 py-3.5 text-base font-bold ${active ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-green-50 hover:text-green-700"}`}>{item.name}</Link>;
          })}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link href="/client-portal" className="rounded-2xl border border-slate-200 px-4 py-3.5 text-center font-bold text-slate-800">Client portal</Link>
            <Link href="/project-planner" className="rounded-2xl bg-green-600 px-4 py-3.5 text-center font-bold text-white">Start a brief</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
