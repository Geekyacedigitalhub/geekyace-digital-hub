"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: a small ring that follows the mouse with easing,
 * a trailing dot, and grows on hover over interactive elements.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100, rx: -100, ry: -100, dx: -100, dy: -100, hover: false });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // disable on touch

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest('a, button, [role="button"], input, textarea, .cursor-hover');
      pos.current.hover = !!interactive;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      // Ring follows with easing; dot snaps closer
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.15;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.15;
      pos.current.dx += (pos.current.x - pos.current.dx) * 0.35;
      pos.current.dy += (pos.current.y - pos.current.dy) * 0.35;

      const scale = pos.current.hover ? 2.2 : 1;
      const dotScale = pos.current.hover ? 0.4 : 1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.rx - 16}px, ${pos.current.ry - 16}px, 0) scale(${scale})`;
        ringRef.current.style.borderColor = pos.current.hover ? "rgba(74,222,128,0.9)" : "rgba(74,222,128,0.6)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.dx - 3}px, ${pos.current.dy - 3}px, 0) scale(${dotScale})`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    document.body.classList.add("custom-cursor-enabled");

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 rounded-full border-2 border-green-400/60 bg-green-400/5 backdrop-blur-[1px] transition-[border-color] duration-200 md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
