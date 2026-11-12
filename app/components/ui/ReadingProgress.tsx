"use client";

import { useEffect, useRef, useState } from "react";

export default function ReadingProgress() {
  const [p, setP] = useState(0);
  const ticking = useRef(false);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const article = document.querySelector("article");
      if (!article) { ticking.current = false; return; }
      const r = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-r.top, 0), total);
      setP(total > 0 ? (scrolled / total) * 100 : 0);
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
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full" aria-hidden>
      <div className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" style={{ width: `${p}%`, willChange: "width" }} />
    </div>
  );
}
