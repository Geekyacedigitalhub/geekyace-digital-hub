"use client";

import { useEffect, useRef } from "react";

const HOME_SECTIONS = ["services", "solutions", "process", "tech", "work", "testimonials", "blog", "faq"];

export default function ScrollSpy() {
  const ticking = useRef(false);
  useEffect(() => {
    const update = () => {
      if (window.location.pathname !== "/") { ticking.current = false; return; }
      let best: { id: string; v: number } = { id: "", v: -Infinity };
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const visibleTop = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
        const closeness = r.top < 200 ? 200 - Math.abs(r.top) : -Math.abs(r.top - 200);
        const score = visibleTop + closeness * 0.3;
        if (score > best.v) best = { id, v: score };
      }
      window.dispatchEvent(new CustomEvent("active-section", { detail: best.id }));
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
  return null;
}
