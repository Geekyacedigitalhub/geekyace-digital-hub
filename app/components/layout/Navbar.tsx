"use client";

import Link from "next/link";
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
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Showcase",
    href: "/showcase",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-green-500"
            >
              {link.name}
            </Link>
          ))}

        </div>


        {/* Button */}
        <Link
          href="/contact"
          className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Start Project
        </Link>

      </div>
    </nav>
  );
}