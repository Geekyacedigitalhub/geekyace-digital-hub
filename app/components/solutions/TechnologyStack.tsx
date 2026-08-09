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

const technologies = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    technologies:
      "OpenAI, AI Agents, Chatbots, Voice AI, Machine Learning",
    description:
      "We build practical AI-powered solutions that help businesses automate tasks, improve customer experiences, and work more efficiently.",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    technologies:
      "Next.js, React, TypeScript, Tailwind CSS",
    description:
      "Modern, responsive interfaces designed to provide fast performance and excellent experiences across desktop, tablet, and mobile devices.",
  },
  {
    icon: Server,
    title: "Backend Development",
    technologies:
      "Node.js, REST APIs, Authentication, Server Architecture",
    description:
      "Reliable backend systems that handle business logic, integrations, authentication, data processing, and scalable application functionality.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies:
      "Flutter, React Native, Android, Cross-Platform Apps",
    description:
      "High-quality mobile applications designed to deliver smooth experiences while supporting scalable business requirements.",
  },
  {
    icon: Database,
    title: "Database Systems",
    technologies:
      "PostgreSQL, MySQL, Firebase, Supabase",
    description:
      "Secure and reliable data systems designed to organize, protect, and efficiently manage the information your digital products depend on.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    technologies:
      "AWS, Vercel, Docker, CI/CD, Hosting & Monitoring",
    description:
      "Modern deployment and infrastructure solutions that help applications remain reliable, maintainable, and ready to scale.",
  },
];

export default function TechnologyStack() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Technology Stack
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Built with Modern Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            We choose reliable, modern technologies based on the needs of
            each project so your digital solution can perform today and
            remain ready for tomorrow.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={30}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {technology.title}
                </h3>

                {/* Technologies */}
                <p className="mt-3 text-sm font-semibold leading-6 text-green-600">
                  {technology.technologies}
                </p>

                {/* Description */}
                <p className="mt-4 leading-8 text-slate-600">
                  {technology.description}
                </p>

                {/* Bottom Indicator */}
                <div className="mt-7 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            We don't use technology simply because it is popular. We
            select the tools that best fit your project's goals,
            functionality, performance, and long-term growth.
          </p>
        </div>
      </Container>
    </section>
  );
}