"use client";

import Button from "../Button";
import Container from "../ui/Container";
import { projects } from "@/app/data/projects";

const categories = [
  {
    label: "Websites",
    className: "border border-green-400/20 bg-green-400/10 text-green-300",
  },
  {
    label: "Mobile Apps",
    className: "border border-white/10 bg-white/5 text-slate-300",
  },
  {
    label: "AI Solutions",
    className: "border border-green-400/20 bg-green-400/10 text-green-300",
  },
  {
    label: "Automation",
    className: "border border-white/10 bg-white/5 text-slate-300",
  },
  {
    label: "Branding",
    className: "border border-green-400/20 bg-green-400/10 text-green-300",
  },
  {
    label: "CAD",
    className: "border border-white/10 bg-white/5 text-slate-300",
  },
];

const stats = [
  {
    number: String(projects.length),
    label: "Capability Concepts",
  },
  {
    number: "15",
    label: "Industry Scenarios",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "6",
    label: "Core Services",
  },
];

export default function ShowcaseHero() {
  return (
    <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-300">
              Capability Showcase
            </span>

            <h1 className="text-balance mt-7 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Ideas Made
              <br />
              <span className="text-green-600">
                Visible & Tangible
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Explore capability concepts across websites, AI, mobile,
              automation, branding, and digital experiences. Concepts show
              how we think and what we can build; verified client work is
              identified separately when evidence is available.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>

              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
              >
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-green-400/30 hover:bg-green-400/10"
                  >
                    <h2 className="text-4xl font-extrabold text-green-600 sm:text-5xl">
                      {stat.number}
                    </h2>

                    <p className="mt-2 font-semibold text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Card */}
            <div className="glass-panel rounded-3xl p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-bold text-white">
                  Project Categories
                </h2>

                <span className="text-sm font-medium text-green-400">
                  Explore
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category.label}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${category.className}`}
                  >
                    {category.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
