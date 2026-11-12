"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Bug } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-[0_0_40px_rgba(244,63,94,0.3)]"
        >
          <Bug className="h-10 w-10" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 font-mono text-sm text-rose-400"
        >
          ERROR 404 · page_not_found
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
        >
          You found a
          <span className="gradient-text-animated"> broken link.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg leading-8 text-slate-400"
        >
          The page you're looking for doesn't exist, got moved, or was never shipped
          in the first place. Let's get you back to working products.
        </motion.p>
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-10 max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 text-left font-mono text-xs leading-relaxed text-slate-400 backdrop-blur-xl"
        >
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="mt-4">
            <span className="text-green-400">$</span> geekyace resolve --url=404<br />
            <span className="text-amber-400">→</span> redirecting to home…<br />
            <span className="text-green-400">✓</span> found: /home
          </div>
        </motion.pre>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link href="/" className="btn-glass glass-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-6 py-3 font-bold text-slate-950 shadow-[0_12px_30px_-8px_rgba(22,163,74,0.6)]">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Link href="/portfolio" className="glass-dark inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:border-green-400/40">
            See the work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
