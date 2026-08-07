"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/app/data/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-semibold transition-colors duration-200 ${
              active
                ? "text-green-600"
                : "text-slate-700 hover:text-green-600"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}