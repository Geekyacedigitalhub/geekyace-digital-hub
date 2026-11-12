"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || status === "loading") {
      setStatus("err"); setMsg("Please enter a valid email."); return;
    }
    setStatus("loading"); setMsg("");
    // No backend yet — simulate success for now. Swaps to POST /api/newsletter later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("ok"); setMsg("You're in. Check your inbox for a confirmation.");
    setEmail("");
  };

  return (
    <div className={`glass-strong glass-shine relative overflow-hidden rounded-3xl p-8 sm:p-10 ${compact ? "" : "shadow-[0_25px_60px_-20px_rgba(22,163,74,0.4)]"}`}>
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-500/20 blur-3xl" aria-hidden />
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-green-400">
            <Mail className="h-3.5 w-3.5" /> Newsletter
          </span>
          <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Get new field notes <span className="gradient-text-animated">in your inbox.</span>
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            One short email per post. No spam, unsubscribe any time.
          </p>
        </div>
        <form onSubmit={submit} className="w-full max-w-md">
          <div className="flex gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur focus-within:border-green-400/60 focus-within:ring-2 focus-within:ring-green-400/20">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
              className="w-full rounded-lg bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-b from-green-500 to-green-600 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-[0_6px_20px_-6px_rgba(34,197,94,0.7)] transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : status === "ok" ? <Check className="h-4 w-4" /> : <><span className="hidden sm:inline">Subscribe</span><ArrowRight className="h-4 w-4" /></>}
            </button>
          </div>
          <AnimatePresence>
            {msg && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className={`mt-2 text-xs ${status === "ok" ? "text-green-400" : "text-rose-400"}`}>
                {msg}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
