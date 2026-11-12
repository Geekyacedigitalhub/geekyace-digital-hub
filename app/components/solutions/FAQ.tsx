"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../ui/Container";
import FAQJsonLd from "@/app/components/seo/FAQJsonLd";
import { faqs } from "@/app/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <FAQJsonLd items={faqs} />
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Questions? We've Got Answers.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            Find answers to some of the most common questions about our
            services, process, support, and working with Geekyace Digital Hub.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-green-300 shadow-md"
                    : "border-slate-200 shadow-sm hover:border-green-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                >
                  <span
                    className={`text-base font-bold transition-colors md:text-lg ${
                      isOpen ? "text-green-700" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-6 pb-7 pt-5 md:px-8">
                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg text-slate-600">
            Still have questions about your project?
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex font-semibold text-green-600 transition hover:text-green-700"
          >
            Talk to our team →
          </a>
        </div>
      </Container>
    </section>
  );
}