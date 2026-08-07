"use client";

import Image from "next/image";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../Button";

interface PortfolioCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function PortfolioCard({
  slug,
  title,
  category,
  description,
  image,
  technologies,
}: PortfolioCardProps) {
  const visibleTechnologies = technologies.slice(0, 4);
  const remainingCount = technologies.length - visibleTechnologies.length;

  return (
    <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-8">
        <Badge>{category}</Badge>

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="leading-8 text-slate-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}

          {remainingCount > 0 && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              +{remainingCount}
            </span>
          )}
        </div>

        <div className="pt-2">
          <Button href={`/portfolio/${slug}`}>
            View Portfolio
          </Button>
        </div>
      </div>
    </Card>
  );
}