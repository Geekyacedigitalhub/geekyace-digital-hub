"use client";

import Button from "../Button";
import Container from "../ui/Container";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
            Let's Build Together
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            Ready to Build Something Amazing?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">
            Whether you're launching a startup, growing your business,
            or transforming your digital presence, Geekyace Digital Hub
            is ready to help turn your ideas into modern digital
            experiences that create real business value.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              Explore Showcase
            </Button>
          </div>

          <div className="mt-20 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">50+</h3>

              <p className="mt-2 text-green-100">
                Digital Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">6+</h3>

              <p className="mt-2 text-green-100">
                Core Services
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>

              <p className="mt-2 text-green-100">
                Client Support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}