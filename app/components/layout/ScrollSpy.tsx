"use client";

import { useEffect, useState } from "react";

/**
 * Dispatches a CustomEvent 'active-section' with the id of the section
 * currently most visible in the viewport. The Header listens to it to
 * highlight the matching nav item (e.g. on the home page where sections
 * don't have their own routes).
 */
const HOME_SECTIONS = ["services", "solutions", "process", "tech", "work", "testimonials"];

export default function ScrollSpy() {
  const [, setActive] = useState<string>("");
  useEffect(() => {
    const onScroll = () => {
      if (window.location.pathname !== "/") return;
      let best: { id: string; v: number } = { id: "", v: -Infinity };
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        // visibility score: how much of the section is in viewport, biased toward top
        const visibleTop = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
        const closeness = r.top < 200 ? 200 - Math.abs(r.top) : -Math.abs(r.top - 200);
        const score = visibleTop + closeness * 0.3;
        if (score > best.v) best = { id, v: score };
      }
      setActive((prev) => {
        if (prev !== best.id) {
          window.dispatchEvent(new CustomEvent("active-section", { detail: best.id }));
        }
        return best.id;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return null;
}
