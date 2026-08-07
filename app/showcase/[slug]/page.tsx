import Image from "next/image";
import { notFound } from "next/navigation";

import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/ui/Container";
import Button from "../../components/Button";
import ProjectCard from "../../components/showcase/ProjectCard";

import {
  projects,
  getProjectBySlug,
} from "@/app/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ShowcaseProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.industry === project.industry &&
        item.slug !== project.slug
    )
    .slice(0, 3);

  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100 py-24">

        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {project.category}
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-8 text-xl leading-9 text-gray-600">
                {project.overview}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white px-4 py-2 text-sm shadow"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-10">

                <Button href="/contact">
                  Start Similar Project
                </Button>

              </div>

            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={650}
                className="h-auto w-full object-cover"
                priority
              />

            </div>

          </div>

        </Container>

      </section>

      {/* Project Details */}

      <section className="py-24">

        <Container>

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="lg:col-span-2 space-y-16">

              <div>

                <h2 className="text-4xl font-bold text-gray-900">
                  The Challenge
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  {project.challenge}
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-gray-900">
                  Our Solution
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  {project.solution}
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-gray-900">
                  Results
                </h2>

                <div className="mt-8 grid gap-4">

                  {project.results.map((result) => (

                    <div
                      key={result}
                      className="rounded-2xl border border-gray-200 bg-green-50 p-5"
                    >
                      ✓ {result}
                    </div>

                  ))}

                </div>

              </div>

            </div>

            <aside className="rounded-3xl border border-gray-200 bg-gray-50 p-8">

              <h3 className="text-2xl font-bold text-gray-900">
                Project Details
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm uppercase text-gray-500">
                    Client
                  </p>
                  <p className="font-semibold">
                    {project.client}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase text-gray-500">
                    Industry
                  </p>
                  <p className="font-semibold">
                    {project.industry}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase text-gray-500">
                    Service
                  </p>
                  <p className="font-semibold">
                    {project.service}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase text-gray-500">
                    Duration
                  </p>
                  <p className="font-semibold">
                    {project.duration}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase text-gray-500">
                    Year
                  </p>
                  <p className="font-semibold">
                    {project.year}
                  </p>
                </div>

              </div>

            </aside>

          </div>

        </Container>

      </section>

      {/* Gallery */}

      {project.gallery.length > 0 && (

        <section className="bg-gray-50 py-24">

          <Container>

            <h2 className="mb-12 text-4xl font-bold text-gray-900">
              Project Gallery
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {project.gallery.map((image) => (

                <div
                  key={image}
                  className="overflow-hidden rounded-3xl shadow-lg"
                >

                  <Image
                    src={image}
                    alt={project.title}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>

              ))}

            </div>

          </Container>

        </section>

      )}

      {/* Related Projects */}

      {relatedProjects.length > 0 && (

        <section className="py-24">

          <Container>

            <h2 className="mb-12 text-4xl font-bold text-gray-900">
              Related Case Studies
            </h2>

            <div className="grid gap-8 lg:grid-cols-3">

              {relatedProjects.map((project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                />

              ))}

            </div>

          </Container>

        </section>

      )}

      {/* CTA */}

      <section className="bg-green-600 py-24 text-white">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-5xl font-extrabold">
              Ready to Build Your Next Digital Product?
            </h2>

            <p className="mt-6 text-xl leading-9 text-green-100">
              Whether it's a website, mobile app, AI assistant, or business automation platform, Geekyace Digital Hub is ready to help bring your ideas to life.
            </p>

            <div className="mt-10">

              <Button
                href="/contact"
                variant="secondary"
              >
                Let's Talk
              </Button>

            </div>

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}