"use client";

import Button from "../Button";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-20 text-white md:py-24">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-green-900/30 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
            Let's Build Your Solution
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50 md:text-xl md:leading-9">
            Whether you need an AI solution, business automation, website,
            mobile application, or complete digital transformation, Geekyace
            Digital Hub is ready to help turn your ideas into a reliable
            digital solution.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Start Your Project
            </Button>

            <Button
              href="/showcase"
              variant="outline"
              size="lg"
              className="border-white text-white hover:border-white hover:bg-white hover:text-green-700"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Message */}
          <p className="mt-8 text-sm font-medium text-green-100">
            Let's discuss your goals, requirements, timeline, and budget.
          </p>
        </div>
      </Container>
    </section>
  );
}