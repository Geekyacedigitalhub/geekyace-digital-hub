import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const projects = [
  {
    title: "AI Customer Support Platform",
    category: "AI Automation",
    description:
      "An AI-powered customer support solution with intelligent chat, ticket automation, and CRM integration.",
    technologies: ["OpenAI", "Next.js", "Node.js"],
  },
  {
    title: "Corporate Business Website",
    category: "Website Development",
    description:
      "A modern corporate website focused on performance, SEO, and lead generation.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Business Workflow Automation",
    category: "Automation",
    description:
      "Automated internal processes that reduced manual work and improved operational efficiency.",
    technologies: ["n8n", "Make", "API Integration"],
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="FEATURED PROJECTS"
          title="Some Of Our Recent Work"
          description="Every project is built with strategy, creativity, and modern technology to help businesses grow."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image Placeholder */}
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
                <span className="text-lg font-semibold text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/portfolio"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                >
                  View Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}