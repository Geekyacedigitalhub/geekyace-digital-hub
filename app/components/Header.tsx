"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/40 bg-white/60 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-white/40 backdrop-blur-xl backdrop-saturate-120"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex h-11 w-[158px] items-center" aria-label="GeekyAce Digital Hub Home">
          <Image src="/images/logo.png" alt="GeekyAce Digital Hub" fill sizes="158px" className="object-contain object-left" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  active ? "text-green-600" : "text-slate-600 hover:text-green-600"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-green-600 transition-all ${
                  active ? "w-full" : "w-0"
                }`} />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="btn-glass glass-shine ml-2 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(22,163,74,0.6)] transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-[0_16px_40px_-12px_rgba(22,163,74,0.7)]"
          >
            Start Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-green-200 hover:bg-green-50 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/40 bg-white/75 backdrop-blur-2xl backdrop-saturate-150 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-6">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    active ? "bg-green-50 text-green-700" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-3 rounded-xl bg-green-600 px-4 py-3.5 text-center font-bold text-white">
              Start Your Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}