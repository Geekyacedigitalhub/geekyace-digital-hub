import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import Container from "../components/ui/Container";

export const metadata: Metadata = {
  title: "Digital Project Resources",
  description: "Use GeekyAce planning tools, checklists, and practical guides to make clearer decisions about websites, AI, automation, and digital growth.",
};

const resources = [
  {
    icon: ClipboardCheck,
    title: "Website Project Checklist",
    description:
      "Know what you need before starting a website project, from your business goals and content to domain, hosting, features, and functionality.",
    points: [
      "Define your website goals",
      "Prepare your content and branding",
      "Choose the right features",
    ],
    href: "/project-planner",
    cta: "Plan My Website",
  },
  {
    icon: Bot,
    title: "AI & Automation Readiness Guide",
    description:
      "Identify repetitive tasks in your business that could potentially be improved with AI, automation, and smarter digital workflows.",
    points: [
      "Find repetitive business tasks",
      "Identify automation opportunities",
      "Understand where AI can help",
    ],
    href: "/services/ai-solutions",
    cta: "Explore AI Solutions",
  },
  {
    icon: Rocket,
    title: "Website Launch Checklist",
    description:
      "A practical checklist for preparing a website for launch and making sure the important details are not forgotten.",
    points: [
      "Test mobile responsiveness",
      "Check forms and navigation",
      "Review SEO and performance",
    ],
    href: "/project-planner",
    cta: "Get Launch Support",
  },
  {
    icon: Target,
    title: "Digital Business Starter Guide",
    description:
      "A simple starting point for entrepreneurs and businesses that want to build a stronger digital presence and reach more customers online.",
    points: [
      "Define your digital goals",
      "Choose the right online channels",
      "Create a professional digital presence",
    ],
    href: "/solutions",
    cta: "Explore Solutions",
  },
  {
    icon: Sparkles,
    title: "AI Opportunity Finder",
    description:
      "Think through the areas of your business where AI could save time, improve customer experiences, or help your team work more efficiently.",
    points: [
      "Customer support opportunities",
      "Content and marketing workflows",
      "Internal business processes",
    ],
    href: "/services/ai-solutions",
    cta: "Discover AI Opportunities",
  },
  {
    icon: FileText,
    title: "Project Planning Guide",
    description:
      "Before investing in development, get clearer about your idea, users, goals, features, budget, and the result you want to achieve.",
    points: [
      "Clarify your project idea",
      "Prioritize important features",
      "Prepare for development",
    ],
    href: "/project-planner",
    cta: "Build My Project Brief",
  },
];

const principles = [
  {
    icon: Lightbulb,
    title: "Start With the Problem",
    description:
      "Technology works best when it is connected to a real business or customer problem.",
  },
  {
    icon: ShieldCheck,
    title: "Build for Reliability",
    description:
      "A digital solution should be practical, maintainable, secure, and dependable.",
  },
  {
    icon: CheckCircle2,
    title: "Focus on Results",
    description:
      "The goal is not simply to build technology. The goal is to create something useful.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-500/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-400/10 blur-3xl"
        />

        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-300">
              <BookOpen className="h-4 w-4" />
              GeekyAce Digital Toolkit
            </span>

            <h1 className="text-balance mt-7 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Useful Resources.
              <span className="block text-green-600">
                Better Digital Decisions.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Practical guides and checklists to help entrepreneurs,
              startups, and businesses understand technology, plan
              digital projects, and make smarter decisions.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/project-planner"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl"
              >
                Try Project Planner
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:border-green-300 hover:bg-white/10 hover:text-green-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Resource Introduction */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="brand-eyebrow">Free Knowledge</span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Resources Built Around Real Digital Projects
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Technology can feel complicated when you do not know
              where to start. These resources are designed to make
              important digital decisions easier to understand.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="premium-card group flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-green-400"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {resource.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {resource.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href={resource.href}
                      className="inline-flex items-center gap-2 font-bold text-green-600 transition hover:text-green-700"
                    >
                      {resource.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How GeekyAce Thinks */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Technology Should Serve the Goal
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              At GeekyAce Digital Hub, we believe good digital work
              starts with understanding the problem before choosing
              the technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Project Planning CTA */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
              <Sparkles className="h-4 w-4" />
              Have an Idea?
            </span>

            <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              Let&apos;s Turn Your Idea Into Something Useful
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              You do not need to have everything figured out before
              reaching out. Tell us what you want to achieve, and
              we can help you think through the right digital
              solution.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-500 hover:shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="mailto:hello@geekyacedigitalhub.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Email GeekyAce
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
