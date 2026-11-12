"use client";

import { useEffect, useRef } from "react";

/**
 * Slow, scroll-timed color wash across the whole page — very subtle,
 * gives the site a cinematic color shift without being distracting.
 */
export default function ScrollAmbient() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (ref.current) {
        ref.current.style.opacity = String(0.5 + p * 0.5);
        ref.current.style.transform = `translate3d(0, ${p * -60}px, 0)`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[0]"
    >
      {/* Three soft colored blobs positioned in fixed places */}
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-300/25 blur-[120px]" />
      <div className="absolute right-[-10%] top-[30%] h-[460px] w-[460px] rounded-full bg-teal-300/20 blur-[120px]" />
      <div className="absolute left-[20%] top-[70%] h-[500px] w-[500px] rounded-full bg-lime-300/15 blur-[140px]" />
    </div>
  );
}
