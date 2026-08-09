"use client";

import Button from "../Button";
import Container from "../ui/Container";

const stats = [
  {
    number: "100+",
    label: "Digital Solutions",
  },
  {
    number: "12",
    label: "Service Categories",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Tailored Solutions",
  },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-green-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
            Our Portfolio
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Experiences
            <br className="hidden sm:block" />
            <span className="text-green-600">
              That Deliver Results
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Explore our growing portfolio of websites, mobile
            applications, AI solutions, branding, business
            automation, CAD drafting, illustrations, video
            editing, and other digital experiences built to
            solve real business needs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
            >
              Start Your Project
            </Button>

            <Button
              href="/showcase"
              variant="secondary"
              size="lg"
            >
              View Showcase
            </Button>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="relative z-10 mt-20 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl sm:p-8"
            >
              <h2 className="text-4xl font-extrabold text-green-600 transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                {item.number}
              </h2>

              <p className="mt-3 text-base font-semibold text-slate-600 sm:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}