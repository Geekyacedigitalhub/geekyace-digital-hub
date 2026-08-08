import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import { projects } from "@/app/data/projects";

export default function PortfolioGallery() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Featured Work
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Explore Our Digital Showcase
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse a selection of websites, mobile applications,
            AI solutions, business automation, branding,
            and creative digital experiences.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/showcase/${project.slug}`}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {project.industry}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {project.service}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {project.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-sm text-gray-500">
                      {project.year}
                    </p>

                    <p className="text-sm text-gray-500">
                      {project.duration}
                    </p>
                  </div>

                  <span className="font-semibold text-green-600 transition group-hover:translate-x-1 group-hover:text-green-700">
                    View Case Study →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}