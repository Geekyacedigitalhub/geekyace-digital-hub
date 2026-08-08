"use client";

import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  PenTool,
  Rocket,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description:
      "We learn about your business, goals, audience, and challenges before deciding what needs to be built.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planning & Design",
    description:
      "We turn the requirements into a clear structure, user experience, technical plan, and visual direction.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Development",
    description:
      "Our team builds the solution using modern technologies, clean code, responsive design, and practical integrations.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Testing & Refinement",
    description:
      "We test the experience across devices, fix issues, optimize performance, and make sure everything works as expected.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Once everything is ready, we launch your project and remain available for improvements, maintenance, and support.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            From Idea to Digital Product
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            A straightforward process designed to keep your project organized,
            transparent, and focused on the result.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Desktop connector */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-green-200 lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group relative"
                >
                  {/* Number / Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-green-200 bg-white text-green-600 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="mt-6 text-center">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-green-600">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-green-100 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Have an idea you want to turn into reality?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Tell us what you're building and we'll help you plan the next
                step.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}