"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Cog,
  Loader2,
  ShieldCheck,
  TerminalSquare,
  Wrench,
  Zap,
} from "lucide-react";

type Line = {
  id: number;
  kind: "error" | "warn" | "fix" | "ok" | "metric" | "meta" | "typing";
  text: string;
  detail?: string;
};

const SCRIPT: { step: number; line: Omit<Line, "id"> }[] = [
  { step: 0, line: { kind: "meta", text: "$ geekyace doctor --scan --auto-fix" } },
  { step: 1, line: { kind: "meta", text: "→ Connecting to production…" } },
  { step: 2, line: { kind: "warn", text: "WARN   checkout flow: 3.2s TTFB (threshold 1.2s)", detail: "slow_db_query" } },
  { step: 3, line: { kind: "error", text: "ERROR  payment webhook: 502 Bad Gateway (retry 3/3)", detail: "provider_timeout" } },
  { step: 4, line: { kind: "error", text: "ERROR  seo/canonical: 4 pages return duplicate tags", detail: "duplicate_meta" } },
  { step: 5, line: { kind: "error", text: "ERROR  mobile-nav: overflow-x on Safari iOS 17", detail: "layout_shift" } },
  { step: 6, line: { kind: "warn", text: "WARN   lighthouse: accessibility score 72 (contrast)", detail: "low_contrast" } },
  { step: 7, line: { kind: "meta", text: "→ 5 issues found · starting auto-repair…" } },
  { step: 8, line: { kind: "fix", text: "FIX    adding DB index on orders.created_at…" } },
  { step: 9, line: { kind: "ok", text: "✓ query plan optimized · TTFB 0.94s" } },
  { step: 10, line: { kind: "fix", text: "FIX    adding exponential backoff + circuit breaker" } },
  { step: 11, line: { kind: "ok", text: "✓ webhook delivery 100% (274/274)" } },
  { step: 12, line: { kind: "fix", text: "FIX    injecting canonical middleware…" } },
  { step: 13, line: { kind: "ok", text: "✓ 0 duplicate tags detected" } },
  { step: 14, line: { kind: "fix", text: "FIX    patching Safari nav transform + touch-action" } },
  { step: 15, line: { kind: "ok", text: "✓ CLS 0.02 · overflow resolved" } },
  { step: 16, line: { kind: "fix", text: "FIX    restating color tokens against WCAG AA" } },
  { step: 17, line: { kind: "ok", text: "✓ contrast ratios ≥ 4.5:1 · a11y 98" } },
  { step: 18, line: { kind: "metric", text: "SCORE  performance 99 · a11y 98 · best-practices 100 · SEO 100" } },
  { step: 19, line: { kind: "meta", text: "→ deploy green · warmed · health checks passing" } },
  { step: 20, line: { kind: "ok", text: "✓ System healthy · 0 active incidents" } },
];

const FINAL_METRICS = [
  { label: "Uptime", value: "99.99%", color: "text-emerald-400" },
  { label: "LCP", value: "1.1s", color: "text-green-400" },
  { label: "Errors", value: "0", color: "text-emerald-400" },
  { label: "Deploys", value: "24/7", color: "text-teal-400" },
];

function LineIcon({ kind }: { kind: Line["kind"] }) {
  switch (kind) {
    case "error":
      return <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-rose-400" />;
    case "warn":
      return <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-400" />;
    case "fix":
      return <Wrench className="h-3.5 w-3.5 shrink-0 text-sky-400" />;
    case "ok":
      return <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />;
    case "metric":
      return <Zap className="h-3.5 w-3.5 shrink-0 text-lime-400" />;
    case "typing":
      return <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-green-400" />;
    default:
      return <TerminalSquare className="h-3.5 w-3.5 shrink-0 text-slate-500" />;
  }
}

function LineRow({ line }: { line: Line }) {
  const color = {
    error: "text-rose-300",
    warn: "text-amber-300",
    fix: "text-sky-300",
    ok: "text-emerald-300",
    metric: "text-lime-300",
    typing: "text-green-300",
    meta: "text-slate-400",
  }[line.kind];
  return (
    <motion.div
      initial={{ opacity: 0, x: -8, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-2 font-mono text-[12.5px] leading-relaxed sm:text-sm"
    >
      <LineIcon kind={line.kind} />
      <span className={color}>
        {line.text}
        {line.detail && <span className="ml-2 text-slate-500">// {line.detail}</span>}
      </span>
    </motion.div>
  );
}

export default function AutoFixConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const [lines, setLines] = useState<Line[]>([]);
  const [progress, setProgress] = useState(0);
  const [scanning, setScanning] = useState(true);
  const [health, setHealth] = useState(28); // goes from 28 (red) to 100 (green)
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const run = () => {
      if (i >= SCRIPT.length) {
        setScanning(false);
        setProgress(100);
        setHealth(100);
        return;
      }
      const s = SCRIPT[i];
      setLines((prev) => [...prev, { id: i, ...s.line }]);
      // progress: steps 0-6 = scanning (0-40%), steps 7-17 = fixing (40-90%), steps 18-20 = healthy (90-100%)
      if (s.step <= 6) setProgress(Math.round(((s.step + 1) / 7) * 38));
      else if (s.step <= 17) setProgress(Math.round(38 + ((s.step - 6) / 12) * 52));
      else setProgress(Math.round(90 + ((s.step - 17) / 4) * 10));
      setHealth(
        s.step <= 6 ? Math.max(28, 45 - s.step * 2)
        : s.step <= 17 ? Math.round(60 + ((s.step - 6) / 12) * 38)
        : 100,
      );
      i += 1;
      // auto-scroll to bottom
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      });
      const delay = s.line.kind === "error" ? 220 : s.line.kind === "fix" ? 380 : s.line.kind === "ok" ? 260 : 180;
      setTimeout(run, delay);
    };
    const start = setTimeout(run, 500);
    return () => clearTimeout(start);
  }, [inView]);

  const healthColor =
    health >= 90 ? "text-emerald-400" : health >= 60 ? "text-amber-400" : "text-rose-400";
  const healthRing =
    health >= 90 ? "stroke-emerald-400" : health >= 60 ? "stroke-amber-400" : "stroke-rose-400";

  const circ = 2 * Math.PI * 22;

  return (
    <section ref={ref} className="section-ambient relative overflow-hidden py-20 sm:py-28 dark:bg-slate-950/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200/60 bg-green-50/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-700 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300">
            <ShieldCheck className="h-4 w-4" /> Self-Healing Systems
          </div>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            When something breaks —
            <span className="gradient-text-animated block">we fix it before you notice.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            Every GeekyAce product ships with health checks, automatic rollbacks,
            retry logic, and monitoring dashboards. Errors get triaged, patched,
            and re-deployed while you sleep.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Cog, t: "Automated repair loops", d: "Common failure modes patched without human intervention." },
              { icon: ShieldCheck, t: "Circuit breakers + retries", d: "Provider outages don't take your site down." },
              { icon: Zap, t: "Real-time observability", d: "Logs, metrics, and alerts piped to your team instantly." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex items-start gap-4">
                <div className="glass-card mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-green-600 dark:text-green-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Terminal card */}
        <div className="relative">
          {/* Glow */}
          <div aria-hidden className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-emerald-500/20 blur-3xl dark:bg-emerald-500/10" />

          {/* Outer glass */}
          <div className="glass-strong relative overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-slate-950/90 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl dark:border-white/10">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-400">~/geekyace/diagnostic</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {scanning ? "repairing…" : "healthy"}
              </div>
            </div>

            {/* Progress bar */}
            <div className="px-5 pt-4 sm:px-6">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>AUTO-REPAIR PROGRESS</span>
                <span className="text-emerald-400">{progress}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={scrollRef}
              className="relative h-[360px] overflow-y-auto px-5 py-5 font-mono sm:px-6"
            >
              <div className="space-y-2">
                {lines.map((l) => <LineRow key={l.id} line={l} />)}
                {scanning && (
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-green-400" />
                    <span className="text-green-300">_</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-4 gap-0 border-t border-white/10 bg-gradient-to-r from-white/[0.02] to-emerald-500/[0.05]">
              {FINAL_METRICS.map((m) => (
                <div key={m.label} className="px-4 py-4 text-center">
                  <p className={`font-mono text-lg font-extrabold ${progress > 80 ? m.color : "text-slate-600"} transition-colors duration-500`}>
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating health ring card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9, y: inView ? 0 : 10 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-dark absolute -left-6 -top-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-10 sm:-top-8"
          >
            <div className="relative h-12 w-12">
              <svg viewBox="0 0 52 52" className="-rotate-90">
                <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <motion.circle
                  cx="26" cy="26" r="22" fill="none"
                  className={healthRing}
                  strokeWidth="4" strokeLinecap="round"
                  strokeDasharray={circ}
                  animate={{ strokeDashoffset: circ - (circ * health) / 100 }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
              <div className={`absolute inset-0 flex items-center justify-center text-xs font-extrabold ${healthColor}`}>{health}</div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Health</p>
              <p className={`text-sm font-bold ${healthColor}`}>
                {health >= 90 ? "Optimal" : health >= 60 ? "Recovering" : "Degraded"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
