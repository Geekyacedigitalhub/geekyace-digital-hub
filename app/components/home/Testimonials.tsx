"use client";

import { ArrowRight, CheckCircle2, Code2, LockKeyhole, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TestimonialCarousel = dynamic(() => import("@/app/components/home/TestimonialCarousel"), { ssr: false });

const proofPoints = [
  {
    icon: Code2,
    title: "Production-minded engineering",
    text: "Projects are presented around architecture, features, technologies, and the business problem being solved.",
  },
  {
    icon: Rocket,
    title: "Built for real workflows",
    text: "The portfolio includes SaaS, Shopify, AI, commerce intelligence, finance, and developer tooling projects.",
  },
  {
    icon: LockKeyhole,
    title: "Private work stays private",
    text: "Private repositories are represented as case studies without exposing source code or protected implementation details.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-ambient relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-950/5 py-24 sm:py-28">
      <div aria-hidden="true" className="glass-blob animate-blob pointer-events-none left-0 top-10 h-80 w-80 bg-green-300/20" />
      <div aria-hidden="true" className="glass-blob animate-float-slow pointer-events-none right-0 bottom-0 h-96 w-96 bg-emerald-300/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="glass-shine inline-flex items-center gap-2 rounded-full border border-green-200/60 bg-white/70 px-4 py-2 text-sm font-bold text-green-700 shadow-sm backdrop-blur-xl">Engineering Approach</span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Show the work. <span className="gradient-text-animated">Explain the work.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Instead of relying on generic claims, the portfolio is designed to let prospective clients inspect the products, stacks, and problem-solving approach behind the work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {proofPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card glass-shine rounded-3xl p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 text-green-700 shadow-sm backdrop-blur transition-all duration-300 group-hover:scale-105"><Icon size={23} /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-green-600">
                  <CheckCircle2 size={14} /> Transparent case study
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Client stories</p>
          <TestimonialCarousel />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/portfolio" className="btn-glass glass-shine inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(15,23,42,0.5)] transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.6)]">
            Inspect the Portfolio <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
