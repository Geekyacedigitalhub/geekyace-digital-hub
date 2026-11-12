"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Animated chip pill group — a green gradient pill slides to the selected chip
 * (same pattern as the Header nav). Used for category / industry / service
 * filters on the Portfolio page.
 */
export default function ChipPills({
  label,
  options,
  value,
  onChange,
  allLabel = "All",
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  allLabel?: string;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [rect, setRect] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const btn = refs.current[value || "__all__"];
    if (btn) {
      const nr = el.getBoundingClientRect();
      const br = btn.getBoundingClientRect();
      setRect({ left: br.left - nr.left, width: br.width });
    }
  }, [value, options]);

  const items = [{ v: "", l: allLabel }, ...options.map((o) => ({ v: o, l: o }))];

  return (
    <div>
      <p className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">{label}</p>
      <div
        ref={navRef}
        className="relative flex flex-wrap gap-1.5 rounded-2xl border border-slate-200/70 bg-white/70 p-1.5 shadow-inner shadow-black/5 backdrop-blur dark:border-white/10 dark:bg-white/5"
      >
        {rect && (
          <motion.span
            layoutId={`pill-${label}`}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_6px_18px_-6px_rgba(22,163,74,0.6)]"
            style={{ left: rect.left, width: rect.width }}
          />
        )}
        {items.map((it) => {
          const active = value === it.v;
          return (
            <button
              key={it.v || "__all__"}
              ref={(el) => { refs.current[it.v || "__all__"] = el; }}
              type="button"
              onClick={() => onChange(it.v)}
              className={`relative z-10 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active ? "text-white" : "text-slate-600 hover:text-green-700 dark:text-slate-300 dark:hover:text-green-300"
              }`}
            >
              {it.l}
            </button>
          );
        })}
      </div>
    </div>
  );
}
