"use client";

import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "We don't build technology just for the sake of technology. Every solution is designed around your business objectives.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "We combine modern technology with practical strategies that solve real problems and create measurable value.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient Delivery",
    description:
      "Our streamlined development process helps you move from idea to working digital solution without unnecessary delays.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "We focus on responsive, secure, maintainable solutions that are built to perform across devices and platforms.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end when your project launches. We remain available to help your digital systems grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              Why Geekyace
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Technology Built Around Your Business
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We help businesses turn ideas, challenges, and opportunities
              into reliable digital products that are easier to use,
              manage, and grow.
            </p>

            {/* Main highlight */}
            <div className="mt-10 rounded-3xl border border-green-100 bg-green-50 p-6 sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    One Digital Partner for Your Growth
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    From your first idea to launch and ongoing improvements,
                    Geekyace Digital Hub can help you build and improve the
                    technology behind your business.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Background decoration */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-100/70 blur-3xl"
            />

            <div className="relative space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-green-200 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors duration-200 group-hover:bg-green-100 group-hover:text-green-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {reason.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}