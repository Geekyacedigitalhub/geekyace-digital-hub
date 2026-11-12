"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.7)] transition-[width] duration-100"
        style={{ width: `${progress}%`, willChange: "width" }}
      />
    </div>
  );
}
