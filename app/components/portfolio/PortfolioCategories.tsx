"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import { categories } from "@/app/data/categories";

export default function PortfolioCategories() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="OUR SERVICES"
          title="Browse by Service Category"
          description="Explore the digital services and solutions we design, develop, and deliver for businesses across multiple industries."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-8 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
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