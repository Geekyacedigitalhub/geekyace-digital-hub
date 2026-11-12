"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Magnetic pull
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 12 });
  const sy = useSpring(my, { stiffness: 200, damping: 12 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  // Reading progress ring
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const circ = 2 * Math.PI * 24;

  return (
    <div className="fixed bottom-24 right-5 z-[55] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7 md:bottom-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-dark w-72 overflow-hidden rounded-3xl border border-white/20 bg-slate-900/85 p-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-green-300">I'm online</p>
            </div>
            <p className="mt-3 text-lg font-extrabold leading-tight text-white">
              Have an idea? Let's turn it into a product.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Average reply time: under 2 hours.
            </p>
            <button
              type="button"
              onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent("open-contact-drawer")); }}
              className="btn-glass glass-shine mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-green-400 to-green-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.7)] transition hover:-translate-y-0.5"
            >
              Start a conversation <Send className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={() => setOpen((o) => !o)}
        style={{ x: sx, y: sy }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-400 to-green-600 text-slate-950 shadow-[0_15px_40px_-10px_rgba(22,163,74,0.8)] transition-shadow hover:shadow-[0_25px_55px_-10px_rgba(22,163,74,0.9)]"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {/* Progress ring */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden>
          <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          <circle
            cx="28" cy="28" r="24" fill="none"
            stroke="white" strokeWidth="2" strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - progress)}
            style={{ transition: "stroke-dashoffset 0.2s ease" }}
          />
        </svg>
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75" />
          <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-[8px] font-black text-slate-900">!</span>
        </span>
      </motion.button>
    </div>
  );
}
