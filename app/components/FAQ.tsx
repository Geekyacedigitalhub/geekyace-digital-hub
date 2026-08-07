"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most websites are completed within 2–4 weeks depending on the scope and requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Geekyace Digital Hub works with businesses and individuals worldwide through remote collaboration.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with modern technologies such as Next.js, React, Tailwind CSS, TypeScript, AI tools, and cloud services.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign, optimize, and modernize your existing website while improving performance and user experience.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer maintenance, updates, security improvements, and long-term technical support.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Answers to some of the questions we receive most often.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm"
            >

              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="text-green-600" />
                ) : (
                  <ChevronDown className="text-green-600" />
                )}

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}