"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Landmark,
  Scale,
  Utensils,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: HeartPulse,
  },
  {
    name: "Education",
    icon: GraduationCap,
  },
  {
    name: "Finance",
    icon: Landmark,
  },
  {
    name: "Real Estate",
    icon: Building2,
  },
  {
    name: "Legal",
    icon: Scale,
  },
  {
    name: "Hospitality",
    icon: Utensils,
  },
];

export default function TrustedCompanies() {
  return (
    <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Trusted Across Industries
          </p>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Digital Solutions Built for Modern Businesses
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We create reliable digital experiences and business systems for
            organizations across different industries.
          </p>
        </div>

        {/* Industry cards */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm transition-colors duration-200 group-hover:bg-green-100 group-hover:text-green-600">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-700 transition-colors group-hover:text-green-700">
                  {industry.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}