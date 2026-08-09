"use client";

import {
  Bot,
  Braces,
  Cloud,
  Database,
  Layers3,
  Smartphone,
  Workflow,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";

const technologies = [
  {
    name: "Next.js",
    category: "Web Development",
    icon: Layers3,
  },
  {
    name: "React",
    category: "Frontend Development",
    icon: Braces,
  },
  {
    name: "TypeScript",
    category: "Development",
    icon: Braces,
  },
  {
    name: "Node.js",
    category: "Backend Development",
    icon: Workflow,
  },
  {
    name: "Flutter",
    category: "Mobile Applications",
    icon: Smartphone,
  },
  {
    name: "AI & OpenAI",
    category: "Artificial Intelligence",
    icon: Bot,
  },
  {
    name: "Supabase",
    category: "Database & Backend",
    icon: Database,
  },
  {
    name: "Cloud & AWS",
    category: "Cloud Infrastructure",
    icon: Cloud,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
  },
  {
    name: "Firebase",
    category: "Backend & Cloud",
    icon: Cloud,
  },
  {
    name: "Tailwind CSS",
    category: "UI Development",
    icon: Layers3,
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    icon: Palette,
  },
];

export default function Technologies() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Technology Stack
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Modern Tools. Better Digital Products.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We use trusted technologies, frameworks, and platforms to build
            digital products that are fast, scalable, secure, and easy to
            maintain.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-bold text-slate-300 transition-colors group-hover:text-green-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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

        {/* Bottom Message */}
        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-green-100 bg-green-50 p-7 text-center sm:p-8">
          <h3 className="text-xl font-bold text-slate-900">
            The Right Technology for the Right Problem
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We don't use technology simply because it's popular. We choose
            tools based on your project's requirements, budget, performance
            needs, scalability, and long-term goals.
          </p>
        </div>
      </Container>
    </section>
  );
}