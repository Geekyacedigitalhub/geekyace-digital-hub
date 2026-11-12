"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gauge, Rocket, Search, Shield } from "lucide-react";
import BeforeAfter from "@/app/components/ui/BeforeAfter";
import CountUp from "@/app/components/ui/CountUp";

const metrics = [
  { icon: Rocket, label: "Avg. Conversion Lift", value: 38, suffix: "%", note: "post-launch" },
  { icon: Gauge, label: "LCP Improvement", value: 72, suffix: "%", note: "faster loads" },
  { icon: Search, label: "SEO Score", value: 100, suffix: "", note: "Lighthouse" },
  { icon: Shield, label: "Bugs Shipped Fixed", value: 124, suffix: "+", note: "last quarter" },
];

export default function Transformation() {
  return (
    <section className="section-ambient relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-green-200/60 bg-green-50/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-700 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300"
            >
              <ArrowRight className="h-4 w-4" /> Before → After
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
            >
              From outdated brochure —
              <span className="gradient-text-animated block">to a product that sells.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
            >
              Drag the slider and watch an old, slow, trustless website
              transform into a modern conversion machine. Same business,
              same offer — different engineering, different results.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2">
              {metrics.map(({ icon: Icon, label, value, suffix, note }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass-card spotlight-hover rounded-2xl p-5"
                >
                  <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <p className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
                    <CountUp end={value} suffix={suffix} />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BeforeAfter
              before="/images/showcase/before-after/before-old-site.jpg"
              after="/images/showcase/hero-dashboard.jpg"
              beforeAlt="Before: slow outdated website"
              afterAlt="After: GeekyAce modern product"
              beforeLabel="Before"
              afterLabel="After GeekyAce"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
