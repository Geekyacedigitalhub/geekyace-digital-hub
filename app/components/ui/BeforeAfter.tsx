"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { motion } from "framer-motion";

export default function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeSrc,
  afterSrc,
  alt,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  const onDown = (e: MouseEvent | TouchEvent) => {
    setDragging(true);
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    update(x);
  };
  const onMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging && "clientX" in e) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    update(x);
  };
  const onUp = () => setDragging(false);

  return (
    <div
      ref={ref}
      className="glass-card relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      {/* After (full) */}
      <Image src={afterSrc} alt={`${alt} — after`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" draggable={false} />
      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={beforeSrc} alt={`${alt} — before`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover grayscale contrast-75" draggable={false} />
        <div className="absolute inset-0 bg-rose-500/10" />
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-rose-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
        {afterLabel}
      </div>

      {/* Divider */}
      <motion.div
        className="pointer-events-none absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
        style={{ left: `${pos}%`, x: "-50%" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-emerald-500/40">
          <div className="flex gap-1">
            <span className="h-3 w-0.5 rounded bg-slate-400" />
            <span className="h-3 w-0.5 rounded bg-slate-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
