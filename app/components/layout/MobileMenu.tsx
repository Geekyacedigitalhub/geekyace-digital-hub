"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import Button from "../Button";
import { navigation } from "@/app/data/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                    active
                      ? "bg-green-100 text-green-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-6">
              <Button href="/contact">
                Start Your Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}