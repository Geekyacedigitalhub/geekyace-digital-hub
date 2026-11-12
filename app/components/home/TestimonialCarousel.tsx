"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type T = { q: string; name: string; role: string; img?: string; rating?: number };
const testimonials: T[] = [
  {
    q: "GeekyAce rebuilt our Shopify stack end-to-end — StoreScout alone changed how we find winners. Loads feel instant and conversions are up materially.",
    name: "Chidi O.", role: "E-commerce Director, Lagos", img: "/images/testimonials/person-1.jpg", rating: 5,
  },
  {
    q: "They understood our healthcare brief faster than any agency we'd spoken to. HIPAA-aligned form handling, clean dashboards, zero hand-holding.",
    name: "Adaeze N.", role: "Product Lead, MedTech startup", img: "/images/testimonials/person-2.jpg", rating: 5,
  },
  {
    q: "BuyerReply AI cut our customer-support response time by 70%. The dashboard is a thing of beauty. Can't recommend enough.",
    name: "Marcus T.", role: "Founder, DTC brand", img: "/images/testimonials/person-3.jpg", rating: 5,
  },
  {
    q: "Our site went from a 32 Lighthouse score to 98 across the board, and the design is genuinely gorgeous. Best dev partner we've had.",
    name: "Sofia R.", role: "CMO, SaaS platform", img: "/images/testimonials/person-4.jpg", rating: 5,
  },
];

const AUTOPLAY_MS = 6000;

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    t.current = window.setTimeout(() => setI((x) => (x + 1) % testimonials.length), AUTOPLAY_MS);
    return () => { if (t.current) clearTimeout(t.current); };
  }, [i, paused]);

  const next = () => setI((x) => (x + 1) % testimonials.length);
  const prev = () => setI((x) => (x - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="section-ambient relative py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="glass-strong glass-shine relative overflow-hidden rounded-[2rem] p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] sm:p-12">
          <Quote className="h-12 w-12 text-green-500/80" aria-hidden />

          <div className="relative mt-6 min-h-[180px] sm:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
              >
                <p className="text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl dark:text-slate-100">
                  “{testimonials[i].q}”
                </p>
                <div className="mt-6 flex items-center gap-4">
                  {testimonials[i].img ? (
                    <Image src={testimonials[i].img} alt={testimonials[i].name} width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2 ring-green-500/40" />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 font-bold text-white">
                      {testimonials[i].name[0]}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{testimonials[i].name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[i].role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonials[i].rating || 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-4">
            <button onClick={prev} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-green-500 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex flex-1 gap-1.5">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
                >
                  <span
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 ${k === i && !paused ? "w-full" : k < i ? "w-full" : "w-0"}`}
                    style={{
                      transition: k === i && !paused ? `width ${AUTOPLAY_MS}ms linear` : "width 0.3s",
                    }}
                  />
                </button>
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-green-500 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
