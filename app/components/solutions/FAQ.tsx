"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "What digital solutions do you provide?",
    answer:
      "We provide website development, AI solutions, business automation, mobile application development, UI/UX design, cloud solutions, and digital transformation services tailored to your business.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope and complexity. Small websites may take a few weeks, while larger applications and automation projects can take several months. We'll provide a clear timeline before development begins.",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Yes. We provide ongoing maintenance, updates, technical support, and optimization to ensure your solution continues to perform at its best.",
  },
  {
    question: "Can you improve an existing website or application?",
    answer:
      "Absolutely. We can redesign, optimize, modernize, or extend your existing website, application, or business system without starting from scratch.",
  },
  {
    question: "Do you build custom solutions?",
    answer:
      "Yes. Every business is different, so we design and develop custom digital solutions that align with your goals, workflows, and long-term growth strategy.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our contact page. We'll schedule a discovery session, understand your requirements, and recommend the best solution for your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Answers to Common Questions"
          description="Here are some of the questions clients frequently ask before starting a project with Geekyace Digital Hub."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="border-t border-slate-200 px-8 py-6">
                  <p className="leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}