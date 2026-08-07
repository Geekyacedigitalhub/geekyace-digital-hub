"use client";

import Button from "../Button";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            Let's Build Your Next Digital Success Story
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">
            Whether you're starting from scratch or improving an existing
            product, Geekyace Digital Hub is ready to help you transform your
            ideas into modern, scalable digital solutions.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary" size="lg">
              Start Your Project
            </Button>

            <Button
              href="/showcase"
              variant="outline"
              size="lg"
              className="border-white text-white hover:border-white hover:bg-white hover:text-green-700"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}