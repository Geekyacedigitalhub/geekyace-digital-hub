"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps the existing Process cards. On desktop, draws an animated SVG
 * path connecting step nodes. The path draws itself when scrolled into view.
 * On mobile the SVG is hidden (vertical flow looks fine without it).
 */
export default function DrawnProcess({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: true });
  const [pathD, setPathD] = useState("");
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const calc = () => {
      const container = containerRef.current;
      if (!container) return;
      const dots = container.querySelectorAll<HTMLElement>("[data-node]");
      if (dots.length < 2) return;
      const cRect = container.getBoundingClientRect();
      const pts = Array.from(dots).map((d) => {
        const r = d.getBoundingClientRect();
        return { x: r.left - cRect.left + r.width / 2, y: r.top - cRect.top + r.height / 2 };
      });
      // Build smooth cubic bezier path through all points
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i];
        const p1 = pts[i + 1];
        const my = (p0.y + p1.y) / 2;
        d += ` C ${p0.x} ${my}, ${p1.x} ${my}, ${p1.x} ${p1.y}`;
      }
      setPathD(d);
      setNodes(pts);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const [dashLen, setDashLen] = useState(0);
  useEffect(() => {
    if (!inView || !pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = String(len);
    pathRef.current.style.strokeDashoffset = String(len);
    requestAnimationFrame(() => {
      if (!pathRef.current) return;
      pathRef.current.style.transition = "stroke-dashoffset 2.2s cubic-bezier(0.22,1,0.36,1) 0.2s";
      pathRef.current.style.strokeDashoffset = "0";
    });
    // animate node dots sequentially
    nodes.forEach((_, i) => {
      setTimeout(() => setDashLen(i + 1), 300 + i * 400);
    });
  }, [inView, pathD, nodes.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Connector SVG, desktop only */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="process-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        {pathD && (
          <>
            <path d={pathD} fill="none" stroke="rgba(22,163,74,0.15)" strokeWidth="2" strokeDasharray="4 6" />
            <path ref={pathRef} d={pathD} fill="none" stroke="url(#process-grad)" strokeWidth="3" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 6px rgba(34,197,94,0.5))" }} />
          </>
        )}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={i < dashLen ? 12 : 0} fill="rgba(34,197,94,0.15)">
              <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" begin={`${0.3 + i * 0.4}s`} />
            </circle>
            <motion.circle
              cx={n.x} cy={n.y} r={6}
              fill={i < dashLen ? "#22c55e" : "rgba(148,163,184,0.5)"}
              stroke="#fff" strokeWidth="2"
              initial={{ r: 0 }}
              animate={{ r: i < dashLen ? 6 : 4 }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
              style={{ filter: i < dashLen ? "drop-shadow(0 0 8px rgba(34,197,94,0.8))" : "none" }}
            />
          </g>
        ))}
      </svg>
      {children}
    </div>
  );
}
