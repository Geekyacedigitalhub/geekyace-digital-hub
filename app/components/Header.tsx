"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/app/components/ui/Magnetic";
import ThemeToggle from "@/app/components/ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", anchor: "services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio", anchor: "work" },
  { name: "Insights", href: "/blog", anchor: "blog" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string>("");
  const [activeRect, setActiveRect] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Home page: listen to ScrollSpy for anchor highlight
  useEffect(() => {
    if (pathname !== "/") { setActiveAnchor(""); return; }
    const onSpy = (e: Event) => setActiveAnchor((e as CustomEvent).detail as string);
    window.addEventListener("active-section", onSpy);
    return () => window.removeEventListener("active-section", onSpy);
  }, [pathname]);

  // Position the animated pill behind the active nav item.
  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    let activeHref = "/";
    for (const item of navigation) {
      if (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) {
        activeHref = item.href;
        break;
      }
    }
    // Home: highlight anchor if on home
    if (pathname === "/" && activeAnchor) {
      const item = navigation.find((n) => n.anchor === activeAnchor);
      if (item) activeHref = item.href;
    }
    const linkEl = linkRefs.current[activeHref];
    if (linkEl) {
      const navRect = navEl.getBoundingClientRect();
      const rect = linkEl.getBoundingClientRect();
      setActiveRect({ left: rect.left - navRect.left, width: rect.width });
    } else {
      setActiveRect(null);
    }
  }, [pathname, activeAnchor, scrolled]);

  const isActive = (item: typeof navigation[number]) => {
    if (pathname === "/" && item.anchor === activeAnchor) return true;
    return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "pt-3" : "pt-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative flex h-[68px] items-center justify-between overflow-hidden rounded-2xl border px-3 transition-all duration-500 dark:border-white/10 dark:bg-slate-900/60 ${
          scrolled
            ? "border-white/60 bg-white/70 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.15),0_0_0_1px_rgba(22,163,74,0.06)] backdrop-blur-2xl backdrop-saturate-180"
            : "border-white/40 bg-white/60 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150"
        }`}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          {scrolled && <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl dark:bg-green-400/15" />}

          <Link href="/" className="logo-shine relative z-10 flex h-10 w-[148px] items-center rounded-lg" aria-label="GeekyAce Digital Hub Home">
            <Image src="/images/logo.png" alt="GeekyAce Digital Hub" fill sizes="148px" className="object-contain object-left transition-transform duration-500 hover:scale-105 dark:brightness-110" priority />
          </Link>

          <nav ref={navRef} className="relative hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 p-1.5 shadow-inner shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:flex">
            {activeRect && (
              <motion.span
                layoutId="nav-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_6px_18px_-6px_rgba(22,163,74,0.6)]"
                style={{ left: activeRect.left, width: activeRect.width }}
              />
            )}
            {navigation.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => { linkRefs.current[item.href] = el; }}
                  className={`relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-white" : "text-slate-600 hover:text-green-700 dark:text-slate-300 dark:hover:text-green-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Available badge */}
            <Link
              href="/contact"
              className="glass-card group flex items-center gap-2 rounded-full border border-green-200/60 bg-green-50/60 px-3 py-1.5 text-xs font-semibold text-green-800 transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>Available</span>
            </Link>

            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="btn-glass glass-shine group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(22,163,74,0.6)] transition hover:-translate-y-0.5 hover:from-green-400 hover:to-green-500 hover:shadow-[0_16px_40px_-12px_rgba(22,163,74,0.7)]"
              >
                Start Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>

            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="rounded-xl border border-slate-200 bg-white/70 p-2.5 text-slate-700 transition hover:border-green-200 hover:bg-green-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
                const active = isActive(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active ? "bg-green-500/10 text-green-700 dark:text-green-300" : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
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
