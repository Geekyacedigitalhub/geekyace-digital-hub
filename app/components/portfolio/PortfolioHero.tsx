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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-green-300/20 blur-3xl" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Our Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Building Digital Experiences
            <br />
            <span className="text-green-600">
              That Deliver Results
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Explore our growing portfolio of websites, mobile
            applications, AI solutions, branding, business
            automation, CAD drafting, illustrations, video
            editing, and many other digital experiences.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

        <div className="relative z-10 mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
            >
              <h3 className="text-5xl font-extrabold text-green-600">
                {item.number}
              </h3>

              <p className="mt-4 text-lg font-medium text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}