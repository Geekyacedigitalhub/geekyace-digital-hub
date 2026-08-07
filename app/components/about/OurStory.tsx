"use client";

import { Target, Eye } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="OUR STORY"
          title="Driven by Innovation. Built for Growth."
          description="Geekyace Digital Hub was founded with one clear mission: to help businesses embrace technology through modern digital solutions that solve real-world challenges."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Who We Are
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Geekyace Digital Hub is a digital solutions company
              specializing in website development, AI-powered systems,
              business automation, mobile application development, and
              digital transformation.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              We partner with startups, entrepreneurs, and established
              businesses to design and build modern digital products
              that increase efficiency, improve customer experiences,
              and support long-term growth.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Target size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To empower businesses with innovative technology
                solutions that create measurable value, improve
                productivity, and accelerate digital growth.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Eye size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To become one of Africa's leading technology companies,
                recognized for delivering innovative digital solutions
                that transform businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}