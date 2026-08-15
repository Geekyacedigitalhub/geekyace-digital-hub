"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "./Logo";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Our Work",
    href: "/showcase",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Dashboard",
    href: "/dashboard/team-work-hub",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <div
          onClick={closeMenu}
          className="shrink-0"
        >
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "text-green-600"
                    : "text-slate-700 hover:text-green-600"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-green-500 transition-all duration-200 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg lg:inline-flex"
        >
          Start Project

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:border-green-200 hover:bg-green-50 hover:text-green-600 lg:hidden"
        >
          {menuOpen ? (
            <X
              className="h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <Menu
              className="h-6 w-6"
              aria-hidden="true"
            />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                      active
                        ? "bg-green-50 text-green-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-green-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-green-700"
              >
                Start Project

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}