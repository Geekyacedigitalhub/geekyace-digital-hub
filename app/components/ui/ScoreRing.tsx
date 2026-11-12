"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ScoreRing({
  score,
  label,
  color = "#22c55e",
  delay = 0,
}: {
  score: number;
  label: string;
  color?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now() + delay * 1000;
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.max(0, Math.min(1, (now - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * score));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, score, delay]);

  const r = 44;
  const c = 2 * Math.PI * r;
  const offset = c - (c * val) / 100;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 110 110" className="-rotate-90">
          <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <motion.circle
            cx="55" cy="55" r={r} fill="none"
            stroke={color} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={c}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.2 }}
            style={{ filter: `drop-shadow(0 0 10px ${color}80)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-3xl font-extrabold text-white">{val}</span>
        </div>
      </div>
      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
    </div>
  );
}
