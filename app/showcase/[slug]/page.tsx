import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Layers3,
  Sparkles,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import ProjectImage from "@/app/components/showcase/ProjectImage";
import { getProjectBySlug } from "@/app/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-50 py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Project Not Found
            </h1>

            <p className="mt-4 text-slate-600">
              The project you are looking for doesn't exist or may have
              been removed.
            </p>

            <Link
              href="/showcase"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Showcase
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"
        />

        <Container>
          <div className="relative">
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-green-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Showcase
            </Link>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
              {/* Left */}
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 ring-1 ring-green-500/20">
                    {project.category}
                  </span>

                  <span className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
                    {project.industry}
                  </span>
                </div>

                <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {project.shortDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
            {/* Main Content */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Project Overview
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {project.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                {project.overview}
              </p>

              {/* Challenge */}
              <div className="mt-14">
                <h3 className="text-2xl font-bold text-slate-900">
                  The Challenge
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Solution
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900">
                  Project Results
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                      <span className="font-medium text-slate-700">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Project Details
                </h3>

                <div className="mt-7 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Calendar className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Year
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Layers3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Duration
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Service
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      {project.service}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Industry
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      {project.industry}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-green-700 hover:shadow-lg"
                >
                  Start a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Project Gallery
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Inside the Project
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
                Explore more screens and details from this digital
                project.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/10]">
                    <ProjectImage
                      src={image}
                      alt={`${project.title} project preview ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl"
            />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-slate-950">
                <Sparkles className="h-7 w-7" />
              </div>

              <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl">
                Have a Project Like This?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                Let's turn your idea into a professional digital
                solution designed around your business goals.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}