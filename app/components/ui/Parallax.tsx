"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Parallax({
  children,
  strength = 40,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const ty = useTransform(y, (v) => `${v * strength}px`);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: -1 (above viewport) → 1 (below)
      const center = r.top + r.height / 2;
      const p = (vh / 2 - center) / vh;
      y.set(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [y]);

  return (
    <motion.div ref={ref} style={{ y: ty }} className={className}>
      {children}
    </motion.div>
  );
}
