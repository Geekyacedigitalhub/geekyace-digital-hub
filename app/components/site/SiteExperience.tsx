"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

const privateRoutes = ["/admin", "/dashboard"];

export default function SiteExperience() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route));

  useEffect(() => {
    if (isPrivate) return;

    const updateScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      setShowTop(window.scrollY > 650);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [isPrivate, pathname]);

  if (isPrivate) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-green-500 shadow-[0_0_18px_rgba(34,197,94,.8)]"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:text-green-700 ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
