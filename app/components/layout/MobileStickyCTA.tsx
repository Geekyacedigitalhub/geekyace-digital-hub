"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-[54] flex items-center gap-2 rounded-2xl border border-green-200/60 bg-white/90 p-2 shadow-[0_15px_40px_-10px_rgba(22,163,74,0.5)] backdrop-blur-xl md:hidden">
      <a
        href="tel:+2348000000000"
        aria-label="Call"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white"
      >
        <Phone className="h-5 w-5" />
      </a>
      <Link
        href="/contact"
        className="btn-glass glass-shine flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-4 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_24px_-8px_rgba(22,163,74,0.6)]"
      >
        <MessageCircle className="h-4 w-4" />
        Book a free strategy call
      </Link>
    </div>
  );
}
