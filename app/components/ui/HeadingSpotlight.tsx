"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Wraps a heading so a green spotlight follows the cursor across it,
 * giving a 'flashlight on glass' premium effect.
 */
export default function HeadingSpotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - r.left}px`);
    el.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`relative ${className}`}
      style={
        {
          backgroundImage:
            "radial-gradient(280px circle at var(--hx,50%) var(--hy,50%), rgba(34,197,94,0.18), transparent 60%)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
