import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  Gauge,
  Layers3,
  MessageSquare,
  Rocket,
  ShoppingBag,
  Workflow,
} from "lucide-react";

import Container from "../components/ui/Container";
import CTASection from "../components/ui/CTASection";
import { services } from "@/app/data/services";

const process = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discover",
    description:
      "We clarify the business problem, audience, scope, priorities, and success criteria before development begins.",
  },
  {
    icon: Layers3,
    step: "02",
    title: "Plan & Design",
    description:
      "We turn the requirements into a clear structure, user flow, interface direction, and implementation plan.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description:
      "We develop the product with modern, maintainable technologies and keep the experience focused on real use cases.",
  },
  {
    icon: Gauge,
    step: "04",
    title: "Test & Refine",
    description:
      "We review functionality, responsiveness, usability, integrations, and important edge cases before launch.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    description:
      "We deploy the finished work and make sure the production experience is ready for real users.",
  },
];

const capabilityCards = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    text: "Websites, dashboards, SaaS platforms, APIs, databases, authentication, and custom business applications.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    text: "Shopify themes, apps, storefront experiences, commerce workflows, and integrations built around selling online.",
  },
  {
    icon: Bot,
    title: "AI Products",
    text: "AI-powered applications, document workflows, analysis tools, assistants, and practical automation experiences.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    text: "Connected workflows that move information between business tools and reduce repetitive manual work.",
  },
  {
    icon: Database,
    title: "Data & Backend Systems",
    text: "Database-backed applications, APIs, server-side logic, data models, and production-oriented backend foundations.",
  },
  {
    icon: MessageSquare,
    title: "Digital Experiences",
    text: "Clear interfaces and conversion-focused experiences that help users understand, trust, and use your product.",
  },
];

export default function ServicesPage() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />

        <Container>
          <div className="relative max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-300">
              Full-Stack • Shopify • AI • Automation
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Technology Built Around
              <span className="block text-green-400">the Problem You Need to Solve.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              GeekyAce Digital Hub builds websites, web applications, Shopify systems,
              AI products, automation workflows, and custom digital experiences with a
              practical focus on functionality, usability, and growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-400"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/showcase"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Explore the Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Understand", "Start with the actual business need."],
                ["02", "Build", "Choose the right technology for the job."],
                ["03", "Launch", "Ship a usable product and refine it."],
              ].map(([number, title, text]) => (
                <div key={number} className="border-l border-green-400/40 pl-4">
                  <p className="text-xs font-black tracking-[0.2em] text-green-400">{number}</p>
                  <p className="mt-2 font-extrabold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-green-600">
              What We Build
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Services that connect technology to real business work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose a focused service or combine capabilities into one end-to-end
              project. The scope is shaped around what you actually need.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-100 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-green-600">
                Service Catalog
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Explore the services available for your project.
              </h2>
            </div>
            <Link
              href="/showcase"
              className="inline-flex shrink-0 items-center gap-2 font-bold text-green-700 hover:text-green-600"
            >
              See project examples <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-green-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-green-700">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-green-600">
              How We Work
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A clear path from idea to production.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The exact workflow changes with the project, but the goal stays the same:
              reduce ambiguity, build deliberately, and deliver something people can use.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.step} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <span className="text-xs font-black tracking-[0.2em] text-green-600">{item.step}</span>
                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-green-400">
              Need Something Custom?
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Tell us the problem. We&apos;ll shape the technology around it.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              If your project does not fit neatly into one service, that is fine.
              We can scope the required frontend, backend, data, AI, commerce,
              automation, and integration pieces together.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Web application",
              "Shopify system",
              "AI workflow",
              "Business automation",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center font-bold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to turn an idea into a working product?"
        description="Share what you are trying to build, what is currently not working, or what you want to improve. We can start from there."
      />
    </main>
  );
}