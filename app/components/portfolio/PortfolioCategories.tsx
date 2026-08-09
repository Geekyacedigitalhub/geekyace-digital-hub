"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import { categories } from "@/app/data/categories";

export default function PortfolioCategories() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Explore Our Portfolio"
          description="Browse our work by category and discover the different digital solutions we create for businesses and organizations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl sm:p-8"
              >
                {/* Decorative Background */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={30} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                {/* Project Count */}
                <div className="relative mt-7 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700 transition-colors duration-300 group-hover:bg-green-100">
                  {category.count} Showcase Projects
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}