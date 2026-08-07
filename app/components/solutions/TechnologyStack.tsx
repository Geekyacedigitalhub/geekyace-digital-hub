"use client";

import {
  Bot,
  Cloud,
  Database,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const technologies = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description:
      "OpenAI, AI Agents, Chatbots, Voice AI, Machine Learning, and intelligent automation.",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Next.js, React, TypeScript, Tailwind CSS, and responsive web technologies.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Node.js, REST APIs, authentication, business logic, and scalable server architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Flutter, React Native, Android, and cross-platform mobile applications.",
  },
  {
    icon: Database,
    title: "Database Systems",
    description:
      "PostgreSQL, MySQL, Firebase, Supabase, and modern cloud databases.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Vercel, Docker, CI/CD pipelines, deployment, hosting, and monitoring.",
  },
];

export default function TechnologyStack() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="TECHNOLOGY STACK"
          title="Built with Modern Technologies"
          description="We use proven technologies and industry best practices to create secure, scalable, and high-performing digital solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {technology.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {technology.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}