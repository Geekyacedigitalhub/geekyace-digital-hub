"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { confettiBurst } from "@/app/components/ui/Confetti";

export default function ContactDrawer() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onOpen = () => { setOpen(true); setSent(false); };
    window.addEventListener("open-contact-drawer", onOpen);
    return () => window.removeEventListener("open-contact-drawer", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    confettiBurst();
    setTimeout(() => confettiBurst(), 250);
    setTimeout(() => confettiBurst(), 500);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-slate-950/60 backdrop-blur-md"
          />
          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed right-0 top-0 z-[75] flex h-full w-full max-w-lg flex-col overflow-y-auto border-l border-white/10 bg-slate-950/90 p-6 text-slate-200 shadow-[-40px_0_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400">Let's talk</p>
                  <h3 className="text-xl font-extrabold text-white">Start a project</h3>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-16 flex flex-col items-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="mt-6 text-2xl font-extrabold text-white">Message received ✓</h4>
                <p className="mt-3 max-w-sm text-slate-400">
                  I'll get back to you within a few hours. In the meantime, feel free to explore the portfolio or grab a time below.
                </p>
                <div className="mt-8 flex w-full flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-glass glass-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-6 py-3 font-bold text-slate-950"
                  >
                    Go to full contact page <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="glass-dark w-full rounded-xl border border-white/10 px-6 py-3 font-bold text-white transition hover:border-green-400/40"
                  >
                    Keep browsing
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="mt-10 flex flex-1 flex-col gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="glass-dark rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-green-400/50 focus:bg-white/10"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</span>
                  <input
                    required type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="glass-dark rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-green-400/50 focus:bg-white/10"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="flex flex-1 flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">What are you building?</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="glass-dark flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-green-400/50 focus:bg-white/10"
                    placeholder="A SaaS, a Shopify theme, an AI assistant… tell me the idea."
                  />
                </label>
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    className="btn-glass glass-shine flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-green-500 to-green-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_30px_-8px_rgba(22,163,74,0.6)] transition hover:-translate-y-0.5"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500">
                    Average reply time: under 2 hours · WAT business hours
                  </p>
                </div>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
