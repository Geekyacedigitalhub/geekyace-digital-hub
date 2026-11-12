"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, User } from "lucide-react";

const items = [
  {
    name: "Tolu Adebayo",
    role: "Founder, Bella Vita Restaurant",
    quote: "Our online reservations doubled in the first month. The site loads instantly on mobile and guests actually complete bookings now — before, people abandoned the form halfway.",
    rating: 5,
    color: "from-rose-400 to-orange-400",
  },
  {
    name: "Michael Chen",
    role: "CTO, StoreScout",
    quote: "He shipped features faster than two agencies we'd worked with before. The code is clean, the product feels polished, and he actually understands e-commerce operations.",
    rating: 5,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Sarah Okonkwo",
    role: "Director, Prime Legal",
    quote: "The AI intake assistant handles 70% of inbound questions after hours. It felt like hiring a second receptionist — without the salary.",
    rating: 5,
    color: "from-violet-400 to-fuchsia-400",
  },
  {
    name: "David Park",
    role: "Head of Growth, MerchantOS",
    quote: "From first call to production launch in 6 weeks. The theme loads sub-1s and conversion is up 38% over our old storefront.",
    rating: 5,
    color: "from-emerald-400 to-teal-400",
  },
];

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const id = setInterval(() => { setDir(1); setIdx((i) => (i + 1) % items.length); }, 6000);
    return () => clearInterval(id);
  }, []);

  const go = (n: number) => { setDir(n > idx ? 1 : -1); setIdx((n + items.length) % items.length); };
  const t = items[idx];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40, filter: "blur(6px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40, filter: "blur(6px)" }),
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="glass-dark relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/80 p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-12">
        {/* Accent glow */}
        <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />

        <Quote className="h-10 w-10 text-green-400/50" aria-hidden />

        <div className="relative mt-6 min-h-[200px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <p className="text-xl leading-relaxed text-white sm:text-2xl">
                <span className="text-green-400">“</span>
                {t.quote}
                <span className="text-green-400">”</span>
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-white font-bold`}>
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(idx - 1)}
          className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:-translate-y-0.5 hover:text-green-700 dark:text-slate-200 dark:hover:text-green-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-green-500" : "w-2 bg-slate-300 dark:bg-white/20"}`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => go(idx + 1)}
          className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:-translate-y-0.5 hover:text-green-700 dark:text-slate-200 dark:hover:text-green-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
