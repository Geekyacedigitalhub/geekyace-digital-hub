import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  CalendarDays,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import ProjectImage from "@/app/components/showcase/ProjectImage";
import {
  projects,
  getProjectBySlug,
} from "@/app/data/projects";
import { isVerifiedProject } from "@/app/lib/projectProof";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate all project detail routes at build time.
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Generate SEO metadata for every project.
 */
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Geekyace Digital Hub",
      description:
        "The requested Geekyace Digital Hub project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

/**
 * Project Case Study Page
 */
export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isVerified = isVerifiedProject(project);

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden="true"
        />

        <Container>
          <div className="relative z-10">

            {/* Back Link */}
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-green-400"
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />

              Back to Showcase
            </Link>

            {/* Category */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className={`rounded-full px-4 py-2 text-sm font-black ring-1 ring-inset ${isVerified ? "bg-green-500 text-white ring-green-400" : "bg-amber-300/10 text-amber-200 ring-amber-300/25"}`}>
                {isVerified ? "Verified client work" : "Capability concept"}
              </span>
              <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 ring-1 ring-inset ring-green-500/20">
                {project.category}
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-inset ring-white/10">
                {project.service}
              </span>
              {isVerified && project.proofUrl ? <a href={project.proofUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-green-300/30 bg-green-300/10 px-4 py-2 text-sm font-black text-green-200">Open verification source</a> : null}
            </div>

            {/* Title */}
            <h1 className="mt-7 max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {project.shortDescription}
            </p>

            {/* Project Metadata */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Proof format */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Building2
                  className="text-green-400"
                  size={22}
                  aria-hidden="true"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {isVerified ? "Client" : "Project format"}
                </p>

                <p className="mt-2 font-semibold text-white">
                  {isVerified ? project.client : "Illustrative capability concept"}
                </p>
              </div>

              {/* Industry */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <BriefcaseBusiness
                  className="text-green-400"
                  size={22}
                  aria-hidden="true"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Industry
                </p>

                <p className="mt-2 font-semibold text-white">
                  {project.industry}
                </p>
              </div>

              {/* Year */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <CalendarDays
                  className="text-green-400"
                  size={22}
                  aria-hidden="true"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {isVerified ? "Year" : "Concept year"}
                </p>

                <p className="mt-2 font-semibold text-white">
                  {project.year}
                </p>
              </div>

              {/* Duration */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Layers3
                  className="text-green-400"
                  size={22}
                  aria-hidden="true"
                />

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {isVerified ? "Duration" : "Illustrative scope"}
                </p>

                <p className="mt-2 font-semibold text-white">
                  {project.duration}
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAIN CASE STUDY CONTENT
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>

          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div>

              {/* Main Project Image */}
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    priority
                  />
                </div>
              </div>

              {/* ===================================================
                  OVERVIEW
              =================================================== */}
              <div className="mt-16">

                <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                  {isVerified ? "Project Overview" : "Concept Overview"}
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  About the Project
                </h2>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {project.overview}
                </p>

              </div>

              {/* ===================================================
                  CHALLENGE
              =================================================== */}
              <div className="mt-16">

                <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                  The Challenge
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What Needed to Be Solved
                </h2>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {project.challenge}
                </p>

              </div>

              {/* ===================================================
                  SOLUTION
              =================================================== */}
              <div className="mt-16">

                <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                  Our Solution
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  How Geekyace Approached It
                </h2>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {project.solution}
                </p>

              </div>

              {/* ===================================================
                  RESULTS
              =================================================== */}
              <div className="mt-16">

                <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                  {isVerified ? "Results" : "Planned Deliverables"}
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {isVerified ? "What We Delivered" : "What This Concept Demonstrates"}
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-green-200 hover:bg-green-50/40"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-green-600"
                        size={22}
                        aria-hidden="true"
                      />

                      <p className="font-semibold leading-7 text-slate-800">
                        {result}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* ===================================================
                  GALLERY
              =================================================== */}
              {project.gallery?.length > 0 && (
                <div className="mt-16">

                  <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                    Project Gallery
                  </span>

                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    A Closer Look
                  </h2>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">

                    {project.gallery.map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                      >
                        <div className="relative aspect-[4/3]">

                          <ProjectImage
                            src={image}
                            alt={`${project.title} project gallery image ${index + 1}`}
                          />

                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              )}

            </div>

            {/* =====================================================
                RIGHT SIDEBAR
            ===================================================== */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              {/* Technologies */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">

                <h2 className="text-xl font-bold text-slate-900">
                  Technologies Used
                </h2>

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Live Project */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
                  >
                    Visit Live Project

                    <ExternalLink
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                )}

              </div>

              {/* CTA */}
              <div className="mt-6 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-8">

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 ring-1 ring-green-500/20"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold">
                  Have a project in mind?
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Let's build a digital solution that helps your business
                  grow, operate better, and stand out.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-700"
                >
                  Start Your Project

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

              </div>

            </aside>
          </div>
        </Container>
      </section>

      {/* =========================================================
          BOTTOM NAVIGATION
      ========================================================= */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <Container>

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-green-600"
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />

              Back to All Projects
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Discuss Your Project

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

        </Container>
      </section>

    </main>
  );
}
