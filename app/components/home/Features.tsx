"use client";

import {
  Award,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Efficient development process that helps launch your project quickly without compromising quality.",
    accent: "from-yellow-400/20 to-orange-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "Every project is built with performance, security, scalability, and long-term maintenance in mind.",
    accent: "from-emerald-400/20 to-green-400/10",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We provide continuous technical support to ensure your business keeps running smoothly.",
    accent: "from-sky-400/20 to-blue-400/10",
  },
  {
    icon: Award,
    title: "Professional Quality",
    description:
      "Every website, application, and automation solution is crafted with attention to detail.",
    accent: "from-purple-400/20 to-pink-400/10",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Meeting deadlines is part of our commitment so your business can move forward with confidence.",
    accent: "from-teal-400/20 to-cyan-400/10",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "Using the latest frameworks, AI tools, and cloud technologies to build future-ready products.",
    accent: "from-lime-400/20 to-green-400/10",
  },
];

export default function Features() {
  return (
    <section className="section-ambient relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
      <div aria-hidden="true" className="glass-blob animate-float-slower pointer-events-none left-1/4 top-10 h-80 w-80 bg-green-300/15" />
      <Container>
        <SectionHeading
          badge="WHY CHOOSE US"
          title="Everything You Need To Build, Grow & Scale"
          description="We combine creativity, technology, and strategy to deliver digital solutions that help businesses stay ahead in today's competitive market."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card glass-shine group relative overflow-hidden rounded-3xl p-8"
              >
                <div aria-hidden="true" className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`} />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-slate-50 text-green-700 shadow-[0_8px_20px_-8px_rgba(22,163,74,0.4)] ring-1 ring-green-100/70 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-[0_12px_30px_-8px_rgba(22,163,74,0.6)]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
