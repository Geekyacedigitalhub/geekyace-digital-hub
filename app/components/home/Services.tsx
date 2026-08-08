"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cog,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites built to attract visitors, build trust, and generate more business.",
    features: [
      "Business Websites",
      "Landing Pages",
      "E-commerce Stores",
    ],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Practical AI systems that help businesses automate support, qualify leads, and improve customer experiences.",
    features: [
      "AI Chatbots",
      "AI Assistants",
      "AI Integrations",
    ],
  },
  {
    icon: Cog,
    title: "Business Automation",
    description:
      "Connected workflows that reduce repetitive work and help your team operate more efficiently.",
    features: [
      "Workflow Automation",
      "CRM Systems",
      "Business Processes",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "User-friendly mobile applications that connect your business with customers wherever they are.",
    features: [
      "Android Apps",
      "iOS Applications",
      "Cross-platform Apps",
    ],
  },
  {
    icon: Palette,
    title: "Brand & Creative Design",
    description:
      "Professional visual identities and digital assets that help businesses present a consistent brand.",
    features: [
      "Brand Identity",
      "UI/UX Design",
      "Marketing Assets",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Digital Services That Move Your Business Forward
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            From websites and mobile apps to AI and business automation,
            we build digital solutions around your actual business goals.
          </p>
        </div>

        {/* Service grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                {/* Accent */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-green-50 transition-transform duration-300 group-hover:scale-125" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-green-600 transition-all duration-200 hover:gap-3 hover:text-green-700"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3.5 text-sm font-bold text-green-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:shadow-md"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}