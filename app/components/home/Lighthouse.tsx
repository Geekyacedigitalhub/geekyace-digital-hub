"use client";

import { motion } from "framer-motion";
import ScoreRing from "@/app/components/ui/ScoreRing";
import { Gauge } from "lucide-react";

const scores = [
  { label: "Performance",  score: 99, color: "#22c55e" },
  { label: "Accessibility", score: 98, color: "#34d399" },
  { label: "Best Practices", score: 100, color: "#10b981" },
  { label: "SEO",          score: 100, color: "#84cc16" },
];

export default function Lighthouse() {
  return (
    <section className="section-ambient relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200/60 bg-green-50/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-700 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300">
              <Gauge className="h-4 w-4" /> Audited
            </div>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Built fast, accessible,
              <span className="gradient-text-animated block">and SEO-perfect.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              Every product ships with top-tier Lighthouse scores — no bloated
              plugins, no render-blocking scripts, no hidden CSS bloat. You get
              the scores, not just promises.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {[
                "Server components where possible, client JS only when needed",
                "Image optimization + responsive srcsets + modern formats",
                "Semantic HTML, ARIA, keyboard navigation baked in",
                "Edge-cached static pages, 0 blocking requests",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-dark relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-10"
          >
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Lighthouse CI</p>
              <span className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-[11px] font-bold text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> all green
              </span>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {scores.map((s, i) => (
                <ScoreRing key={s.label} {...s} delay={i * 0.15} />
              ))}
            </div>
            <p className="mt-6 text-center font-mono text-[11px] text-slate-500">
              Run on the production build · 4G throttled · Moto G Power
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
