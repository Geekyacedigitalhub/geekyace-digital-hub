"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type Metric = { label: string; value: string; note?: string };
type Block = { heading?: string; body: string };

export default function CaseStudyLayout({
  cover,
  coverAlt,
  metrics,
  overview,
  problem,
  solution,
  blocks,
  gallery,
}: {
  cover: string;
  coverAlt: string;
  metrics: Metric[];
  overview: string;
  problem: string;
  solution: string;
  blocks: Block[];
  gallery?: { src: string; alt: string; caption?: string }[];
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div>
      {/* Parallax cover */}
      <div ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <Image src={cover} alt={coverAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-16 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">Case study</p>
        </div>
      </div>

      {/* Metrics band */}
      <section className="mx-auto -mt-16 max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="glass-strong grid grid-cols-2 gap-6 rounded-3xl p-6 sm:grid-cols-4 sm:p-8">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl font-extrabold text-green-600 dark:text-green-400 sm:text-4xl">{m.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{m.label}</p>
              {m.note && <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{m.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto mt-16 max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Overview</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">{overview}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200/60 bg-rose-50/60 p-6 dark:border-rose-400/10 dark:bg-rose-500/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">The Problem</h3>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{problem}</p>
            </div>
            <div className="rounded-2xl border border-green-200/60 bg-green-50/60 p-6 dark:border-green-400/10 dark:bg-green-500/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-700 dark:text-green-300">The Solution</h3>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{solution}</p>
            </div>
          </div>

          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {b.heading && <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">{b.heading}</h3>}
              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">{b.body}</p>
            </motion.div>
          ))}

          {gallery && gallery.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.map((g) => (
                <figure key={g.src} className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-lg dark:border-white/10">
                  <div className="relative aspect-[4/3]">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width:768px) 100vw, 400px" className="object-cover" />
                  </div>
                  {g.caption && <figcaption className="bg-slate-50 px-4 py-3 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-400">{g.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}
