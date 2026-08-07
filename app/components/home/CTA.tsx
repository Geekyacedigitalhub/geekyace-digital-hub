import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import Container from "@/app/components/ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-8 py-16 text-center shadow-2xl lg:px-16">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
            Let's Build Something Amazing
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Ready to Transform Your Business with Technology?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you need a modern website, AI-powered automation,
            mobile application, or a complete digital transformation,
            Geekyace Digital Hub is ready to help you achieve your goals.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-slate-200 transition hover:border-slate-600"
            >
              <MessageCircle size={20} />
              View Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}