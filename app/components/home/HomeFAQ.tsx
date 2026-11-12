"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/app/components/ui/Container";
import FAQJsonLd from "@/app/components/seo/FAQJsonLd";
import { faqs } from "@/app/data/faqs";

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <FAQJsonLd items={faqs} />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-600 dark:text-green-400">FAQ</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Questions, <span className="gradient-text-animated">answered.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Straight answers to the things founders usually ask before a first call.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className={`glass-card overflow-hidden rounded-2xl border transition ${isOpen ? "border-green-400/40 shadow-[0_10px_30px_-10px_rgba(22,163,74,0.4)]" : "border-slate-200/60 dark:border-white/10"}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 dark:text-white">{f.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180 text-green-500" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-slate-600 dark:text-slate-300">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
