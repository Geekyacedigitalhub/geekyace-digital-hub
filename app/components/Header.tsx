"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
  const [activeRect, setActiveRect] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Position the animated pill behind the active nav item.
  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    const active = navigation.find(
      (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)),
    );
    const linkEl = active ? linkRefs.current[active.href] : null;
    if (linkEl) {
      const navRect = navEl.getBoundingClientRect();
      const rect = linkEl.getBoundingClientRect();
      setActiveRect({ left: rect.left - navRect.left, width: rect.width });
    } else {
      setActiveRect(null);
    }
  }, [pathname, scrolled]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex h-[68px] items-center justify-between overflow-hidden rounded-2xl border px-4 transition-all duration-500 ${
            scrolled
              ? "border-white/60 bg-white/70 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.15),0_0_0_1px_rgba(22,163,74,0.06)] backdrop-blur-2xl backdrop-saturate-180"
              : "border-white/40 bg-white/60 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150"
          }`}
        >
          {/* Glossy top highlight */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          {/* Subtle green glow */}
          {scrolled && (
            <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl" />
          )}

          <Link href="/" className="relative z-10 flex h-10 w-[148px] items-center" aria-label="GeekyAce Digital Hub Home">
            <Image src="/images/logo.png" alt="GeekyAce Digital Hub" fill sizes="148px" className="object-contain object-left" priority />
          </Link>

          <nav ref={navRef} className="relative hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 p-1.5 shadow-inner shadow-black/5 backdrop-blur-xl lg:flex">
            {activeRect && (
              <motion.span
                layoutId="nav-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_6px_18px_-6px_rgba(22,163,74,0.6)]"
                style={{ left: activeRect.left, width: activeRect.width }}
              />
            )}
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => { linkRefs.current[item.href] = el; }}
                  className={`relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-white" : "text-slate-600 hover:text-green-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {/* Live availability badge */}
            <Link
              href="/contact"
              className="glass-card group flex items-center gap-2 rounded-full border border-green-200/60 bg-green-50/60 px-3 py-1.5 text-xs font-semibold text-green-800 transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>Available for work</span>
            </Link>

            <Link
              href="/contact"
              className="btn-glass glass-shine group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(22,163,74,0.6)] transition hover:-translate-y-0.5 hover:from-green-400 hover:to-green-500 hover:shadow-[0_16px_40px_-12px_rgba(22,163,74,0.7)]"
            >
              Start Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-slate-200 bg-white/70 p-2.5 text-slate-700 transition hover:border-green-200 hover:bg-green-50 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-strong mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-3">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active ? "bg-green-500/10 text-green-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link href="/contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-4 py-3 font-bold text-white">
                Start Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
