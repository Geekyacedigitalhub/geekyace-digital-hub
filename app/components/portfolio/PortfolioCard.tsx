"use client";

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
  technologies,
}: PortfolioCardProps) {
  const visibleTechnologies = technologies.slice(0, 4);
  const remainingCount =
    technologies.length - visibleTechnologies.length;

  return (
    <Card className="overflow-hidden">
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
          <Button href={`/showcase/${slug}`}>
            View Portfolio
          </Button>
        </div>
      </div>
    </Card>
  );
}