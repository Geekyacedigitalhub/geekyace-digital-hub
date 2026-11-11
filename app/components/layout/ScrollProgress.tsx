"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
