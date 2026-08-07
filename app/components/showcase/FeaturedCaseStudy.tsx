import Link from "next/link";

import Container from "../ui/Container";
import ProjectImage from "./ProjectImage";

import { projects } from "@/app/data/projects";

export default function FeaturedCaseStudy() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  if (!featuredProject) return null;

  return (
    <section className="bg-white py-24">

      <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Featured Case Study
          </span>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900">
            {featuredProject.title}
          </h2>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            {featuredProject.shortDescription}
          </p>

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="group relative overflow-hidden rounded-[32px] border border-gray-200 shadow-2xl">

            <div className="relative h-[480px]">

              <ProjectImage
                src={featuredProject.image}
                alt={featuredProject.title}
              />

            </div>

          </div>

          {/* Details */}

          <div>

            <div className="flex flex-wrap gap-3">

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {featuredProject.industry}
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                {featuredProject.service}
              </span>

            </div>

            <h3 className="mt-8 text-4xl font-bold leading-tight text-gray-900">
              Designed for Growth.
              <br />
              Built for Performance.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every Geekyace project is designed with one goal:
              helping businesses grow through modern technology,
              intuitive user experiences and scalable digital
              solutions.
            </p>

            {/* Technologies */}

            <div className="mt-8">

              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-3">

                {featuredProject.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            {/* Project Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-gray-200 p-5">

                <p className="text-3xl font-bold text-green-600">
                  {featuredProject.year}
                </p>

                <p className="mt-2 text-gray-600">
                  Project Year
                </p>

              </div>

              <div className="rounded-2xl border border-gray-200 p-5">

                <p className="text-3xl font-bold text-green-600">
                  {featuredProject.duration}
                </p>

                <p className="mt-2 text-gray-600">
                  Development Time
                </p>

              </div>

            </div>

            {/* CTA */}

            <Link
              href={`/showcase/${featuredProject.slug}`}
              className="mt-10 inline-flex items-center rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
            >
              View Full Case Study →
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}