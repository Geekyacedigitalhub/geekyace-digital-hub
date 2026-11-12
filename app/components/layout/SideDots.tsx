"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "process", label: "Process" },
  { id: "tech", label: "Tech" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Insights" },
  { id: "faq", label: "FAQ" },
];

export default function SideDots() {
  const [active, setActive] = useState<string>("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      if (window.location.pathname !== "/") { setShow(false); return; }
      setShow(window.scrollY > 400);
      let best: { id: string; v: number } = { id: "", v: -Infinity };
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
        const closeness = r.top < 200 ? 200 - Math.abs(r.top) : -Math.abs(r.top - 200);
        const score = visible + closeness * 0.3;
        if (score > best.v) best = { id: s.id, v: score };
      }
      setActive(best.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!show) return null;

  return (
    <nav aria-label="Section navigation" className="fixed right-4 top-1/2 z-[45] hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            aria-label={`Go to ${s.label}`}
            className="group relative flex h-5 w-5 items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]"
                  : "h-2 w-2 bg-slate-400/50 group-hover:h-2.5 group-hover:w-2.5 group-hover:bg-green-400"
              }`}
            />
            <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-md border border-slate-200/70 bg-white/90 px-2 py-1 text-[11px] font-semibold text-slate-700 opacity-0 shadow-md backdrop-blur transition-opacity group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200">
              {s.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
