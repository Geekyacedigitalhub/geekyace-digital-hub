"use client";

// Lighter magnetic pull using CSS transform on hover instead of per-frame
// mousemove springs. Eliminates rAF work on every primary CTA.
import { useRef, type ReactNode, type MouseEvent } from "react";

export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)", willChange: "transform" }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
