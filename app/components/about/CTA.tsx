"use client";

import {
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import Button from "../Button";
import Container from "../ui/Container";

const benefits = [
  "Clear project strategy",
  "Modern technology",
  "Responsive development",
  "Ongoing support",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-24 text-white md:py-32">
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-500/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-green-900/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
      />

      <Container>
        <div className="relative mx-auto max-w-5xl">
          {/* Main CTA Card */}
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 px-6 py-12 shadow-2xl backdrop-blur-sm sm:px-10 md:px-16 md:py-16">
            {/* Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-green-50">
                <Sparkles className="h-4 w-4" />
                Let's Work Together
              </span>
            </div>

            {/* Heading */}
            <div className="mx-auto mt-8 max-w-4xl text-center">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Have an Idea?
                <span className="block text-green-100">
                  Let's Turn It Into Reality.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-green-50 sm:text-lg md:text-xl">
                Whether you're launching something new or improving an
                existing business, Geekyace Digital Hub can help you build a
                modern digital solution designed around your goals.
              </p>
            </div>

            {/* Benefits */}
            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-green-50"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-200" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="secondary" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                href="/showcase"
                variant="outline"
                size="lg"
                className="border-white/70 text-white hover:border-white hover:bg-white hover:text-green-700"
              >
                View Our Work
              </Button>
            </div>

            {/* Small reassurance */}
            <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-green-100">
              <MessageSquareText className="h-4 w-4" />
              <span>Tell us what you're building. Let's discuss the next step.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}