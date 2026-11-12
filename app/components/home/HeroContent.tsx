"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import CountUp from "@/app/components/ui/CountUp";
import SplitReveal from "@/app/components/ui/SplitReveal";
import Magnetic from "@/app/components/ui/Magnetic";
import Parallax from "@/app/components/ui/Parallax";

const trustPoints = [
  "Full-stack web applications",
  "Shopify & e-commerce systems",
  "AI-powered products",
  "Automation & integrations",
];

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur-sm"
      >
        <Sparkles className="h-4 w-4" />
        Full-Stack Development • AI • Shopify
      </motion.div>

      <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[4.25rem] xl:text-7xl">
        <SplitReveal text="I build" delay={0.1} className="block" />
        <span className="gradient-text-animated mt-1 block leading-[1.02]">
          <SplitReveal text="digital products" delay={0.35} className="inline-block" />
        </span>
        <SplitReveal text="that solve real problems." delay={0.65} className="block" />
      </h1>

      <Parallax strength={-8}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          GeekyAce Digital Hub designs and develops production-ready websites,
          SaaS platforms, Shopify systems, AI applications, and business
          automation with modern full-stack technologies.
        </motion.p>
      </Parallax>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5 }}
        className="mt-9 flex flex-wrap items-center gap-4"
      >
        <Magnetic>
          <Link
            href="/contact"
            className="btn-glass glass-shine inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_32px_-8px_rgba(34,197,94,0.55)] transition hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-[0_20px_48px_-12px_rgba(34,197,94,0.7)]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Magnetic>

        <Magnetic strength={0.2}>
          <Link
            href="/portfolio"
            className="glass-dark glass-shine inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-green-400/40 hover:bg-white/10"
          >
            Explore My Portfolio
          </Link>
        </Magnetic>

        <Magnetic strength={0.15}>
          <a
            href="https://github.com/Geekyacedigitalhub"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark glass-shine inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-400/40 hover:bg-white/10"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </Magnetic>
      </motion.div>

      <div className="mt-10 grid max-w-2xl gap-x-8 gap-y-4 sm:grid-cols-2">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
            {point}
          </div>
        ))}
      </div>

      <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
        <div className="glass-dark group relative overflow-hidden rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:border-green-400/30">
          <div aria-hidden="true" className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-green-400/10 blur-xl transition-opacity group-hover:opacity-100 opacity-60" />
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            <CountUp end={10} suffix="+" />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Shipped products</p>
        </div>
        <div className="glass-dark group relative overflow-hidden rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:border-green-400/30">
          <div aria-hidden="true" className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-400/10 blur-xl opacity-60" />
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            <CountUp end={6} suffix="+" />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Solution areas</p>
        </div>
        <div className="glass-dark group relative overflow-hidden rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:border-green-400/30">
          <div aria-hidden="true" className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-teal-400/10 blur-xl opacity-60" />
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            <CountUp end={99} suffix="%" />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Client satisfaction</p>
        </div>
      </div>
    </div>
  );
}
