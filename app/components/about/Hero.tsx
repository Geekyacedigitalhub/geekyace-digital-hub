"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "../ui/PageHero";

export default function Hero() {
  return (
    <PageHero
      badge="ABOUT GEEKYACE DIGITAL HUB"
      title="Building Digital Solutions That Drive Business Growth"
      description="We help businesses succeed through modern websites, AI solutions, automation, mobile applications, and digital transformation."
    >
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          Start Your Project
          <ArrowRight size={20} />
        </Link>

        <Link
          href="/showcase"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
        >
          View Our Work
        </Link>
      </div>
    </PageHero>
  );
}