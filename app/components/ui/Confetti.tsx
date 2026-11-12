"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Piece = { id: number; left: number; delay: number; duration: number; color: string; rot: number; size: number };

const COLORS = ["#22c55e", "#10b981", "#14b8a6", "#84cc16", "#facc15", "#34d399", "#a3e635"];

export function confettiBurst() {
  window.dispatchEvent(new CustomEvent("confetti-burst"));
}

export default function Confetti() {
  const [pieces, setPieces] = useState<Piece[]>([]);
  useEffect(() => {
    const fire = () => {
      const n = 60;
      const arr: Piece[] = Array.from({ length: n }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 0.2,
        duration: 1.4 + Math.random() * 1.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rot: Math.random() * 720 - 360,
        size: 6 + Math.random() * 8,
      }));
      setPieces(arr);
      setTimeout(() => setPieces([]), 3500);
    };
    window.addEventListener("confetti-burst", fire);
    return () => window.removeEventListener("confetti-burst", fire);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden>
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: -40, opacity: 1, rotate: 0 }}
            animate={{ y: window.innerHeight + 60, opacity: 0, rotate: p.rot }}
            exit={{ opacity: 0 }}
            transition={{ duration: p.duration, delay: p.delay, ease: [0.2, 0.6, 0.4, 1] }}
            className="absolute top-0 rounded-sm"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.4,
              background: p.color,
              boxShadow: `0 0 8px ${p.color}80`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
