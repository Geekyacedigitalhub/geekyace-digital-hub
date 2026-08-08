"use client";

import {
  Bot,
  Braces,
  Cloud,
  Database,
  Layers3,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    category: "Web Development",
    icon: Layers3,
  },
  {
    name: "React",
    category: "Frontend",
    icon: Braces,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Workflow,
  },
  {
    name: "TypeScript",
    category: "Development",
    icon: Braces,
  },
  {
    name: "AI & LLMs",
    category: "Artificial Intelligence",
    icon: Bot,
  },
  {
    name: "Supabase",
    category: "Database & Backend",
    icon: Database,
  },
  {
    name: "Cloud Platforms",
    category: "Infrastructure",
    icon: Cloud,
  },
  {
    name: "Mobile Technology",
    category: "Mobile Applications",
    icon: Smartphone,
  },
];

export default function TechStack() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            <Sparkles className="h-4 w-4" />
            Technology
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Modern Technology. Practical Results.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We use proven modern technologies and carefully selected tools to
            build fast, scalable, secure, and maintainable digital solutions.
          </p>
        </div>

        {/* Technology grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {technology.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {technology.category}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-14 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            The technology we use depends on your project requirements,
            budget, scalability needs, and long-term goals.
          </p>
        </div>
      </div>
    </section>
  );
}