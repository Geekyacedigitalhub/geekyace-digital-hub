import {
  ArrowRight,
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";
import Container from "../ui/Container";

export default function OurStory() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left - Our Story */}
          <div>
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              Who We Are
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Technology That Solves Real Business Problems
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Geekyace Digital Hub is a digital solutions company focused
              on helping businesses use technology to work smarter, serve
              customers better, and create new opportunities for growth.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              We work with startups, entrepreneurs, growing companies, and
              established businesses to design and build websites, mobile
              applications, AI-powered systems, automation solutions, and
              other digital products tailored to their goals.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Instead of simply building technology, we focus on
              understanding the business behind each project and choosing
              solutions that are practical, scalable, easy to use, and
              built for long-term value.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Business-Focused
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Solutions built around your actual business goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Growth-Oriented
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Technology designed to support your next stage of growth.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
            >
              Let's Work Together
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right - Mission & Vision */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Target className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To empower businesses with innovative, reliable, and
                practical digital solutions that improve productivity,
                create measurable value, and accelerate sustainable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-lg sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white">
                <Eye className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                To become a trusted technology partner for businesses
                worldwide, creating digital experiences and systems that
                inspire innovation, efficiency, and meaningful growth.
              </p>
            </div>

            {/* Small Statement */}
            <div className="rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-8">
              <p className="text-lg font-bold leading-8 text-slate-900">
                “We don't just build digital products. We build technology
                around the way your business works.”
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}