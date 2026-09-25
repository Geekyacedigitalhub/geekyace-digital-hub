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
  { name: "Showcase", href: "/showcase" },
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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/75 backdrop-blur-md"
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
                onClick={() => setMenuOpen(false)}
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
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
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
        <div className="border-t border-slate-200 bg-white lg:hidden">
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
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-3 rounded-xl bg-green-600 px-4 py-3.5 text-center font-bold text-white">
              Start Your Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}