"use client";

import { motion } from "framer-motion";
import CountUp from "@/app/components/ui/CountUp";
import { Code2, Gauge, Globe2, Rocket, ShieldCheck, Users } from "lucide-react";

const stats = [
  { icon: Rocket,    value: 50,  suffix: "+", label: "Products shipped",     tint: "from-green-400/20 to-emerald-500/5" },
  { icon: Users,     value: 97,  suffix: "%", label: "Client satisfaction",   tint: "from-emerald-400/20 to-teal-500/5" },
  { icon: Gauge,     value: 99,  suffix: "",  label: "Avg Lighthouse score",  tint: "from-teal-400/20 to-lime-500/5" },
  { icon: Code2,     value: 247000, suffix: "+", label: "Lines of code",    tint: "from-lime-400/20 to-green-500/5" },
  { icon: Globe2,    value: 12,  suffix: "",  label: "Countries served",     tint: "from-cyan-400/20 to-emerald-500/5" },
  { icon: ShieldCheck, value: 0, suffix: "",  label: "Production incidents this month", tint: "from-emerald-400/20 to-green-500/5" },
];

export default function MetricsRibbon() {
  return (
    <section className="relative overflow-hidden border-y border-slate-900/10 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 dark:border-white/10 dark:from-slate-950 dark:via-black dark:to-emerald-950/60 sm:py-20">
      {/* Blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
      {/* Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
           style={{
             backgroundImage:
               "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
             backgroundSize: "48px 48px",
           }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">By the numbers</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Track record you can <span className="gradient-text-animated">actually measure.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {stats.map(({ icon: Icon, value, suffix, label, tint }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.06]"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${tint} blur-2xl transition-opacity group-hover:opacity-100 opacity-60`} />
              <Icon className="h-5 w-5 text-green-400" />
              <p className="mt-5 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <CountUp end={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
