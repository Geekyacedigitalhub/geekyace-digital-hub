"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pos = useRef({ x: -400, y: -400, tx: -400, ty: -400 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };
    const onLeave = () => {
      pos.current.tx = -400;
      pos.current.ty = -400;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const tick = () => {
      pos.current.x += (pos.current.tx - pos.current.x) * 0.12;
      pos.current.y += (pos.current.ty - pos.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 220}px, ${pos.current.y - 220}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[440px] w-[440px] rounded-full opacity-40 mix-blend-screen md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(74,222,128,0.22) 0%, rgba(16,185,129,0.12) 35%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
