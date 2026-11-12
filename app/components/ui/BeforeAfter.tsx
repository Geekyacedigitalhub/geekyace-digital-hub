"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Interactive before/after slider. Drag the handle or click anywhere on the
 * image to scrub. Pure pointer events — no rAF.
 */
export default function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt,
  afterAlt,
  height = 420,
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  height?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
      setPos(p);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      move(e.clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-[0_25px_60px_-20px_rgba(15,23,42,0.35)] select-none dark:border-white/10 dark:bg-slate-800"
      style={{ height }}
      onPointerDown={(e) => { dragging.current = true; const el = wrapRef.current; if (!el) return; const r = el.getBoundingClientRect(); setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100))); }}
    >
      {/* After (full, underneath) */}
      <Image src={after} alt={afterAlt || afterLabel} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" draggable={false} />
      <span className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">{afterLabel}</span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeAlt || beforeLabel} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" draggable={false} />
        <span className="absolute left-4 top-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur">{beforeLabel}</span>
      </div>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        <button
          type="button"
          aria-label="Drag to compare"
          className="pointer-events-auto absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] ring-2 ring-green-500 transition hover:scale-110"
          style={{ left: "50%", transform: "translate(-50%,-50%)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 6-4 4 4 4"/><path d="m16 6 4 4-4 4"/>
          </svg>
        </button>
      </div>
      <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">Drag ← → to compare</p>
    </div>
  );
}
