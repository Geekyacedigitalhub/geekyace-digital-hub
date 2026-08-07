import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Project } from "../types";

import Card from "./ui/Card";
import Badge from "./ui/Badge";
import ProjectImage from "./ProjectImage";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden p-0">

      <ProjectImage
        image={project.image}
        title={project.title}
      />

      <div className="p-8">

        <Badge>
          {project.category}
        </Badge>

        <h3 className="mt-5 text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}

        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
        >
          View Case Study

          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

    </Card>
  );
}