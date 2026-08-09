"use client";

import Button from "../Button";
import Container from "../ui/Container";

const categories = [
  {
    label: "Websites",
    className: "bg-green-100 text-green-700",
  },
  {
    label: "Mobile Apps",
    className: "bg-blue-100 text-blue-700",
  },
  {
    label: "AI Solutions",
    className: "bg-purple-100 text-purple-700",
  },
  {
    label: "Automation",
    className: "bg-orange-100 text-orange-700",
  },
  {
    label: "Branding",
    className: "bg-pink-100 text-pink-700",
  },
  {
    label: "CAD",
    className: "bg-cyan-100 text-cyan-700",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Industries",
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
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-green-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-100/50 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
              Portfolio Showcase
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Digital Products
              <br />
              <span className="text-green-600">
                That Create Results
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Explore our growing collection of websites, AI solutions,
              mobile applications, automation systems, branding projects,
              and other digital experiences designed to help businesses
              innovate, scale, and succeed.
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
            <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl sm:p-8">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:bg-green-50"
                  >
                    <h2 className="text-4xl font-extrabold text-green-600 sm:text-5xl">
                      {stat.number}
                    </h2>

                    <p className="mt-2 font-semibold text-slate-900">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-bold text-slate-900">
                  Project Categories
                </h2>

                <span className="text-sm font-medium text-slate-400">
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