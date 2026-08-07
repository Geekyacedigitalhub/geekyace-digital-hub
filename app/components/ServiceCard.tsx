import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "../types";
import Card from "./ui/Card";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="group flex h-full flex-col">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-600">

        <Icon className="h-8 w-8 text-green-600 transition group-hover:text-white" />

      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {service.title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-gray-600">
        {service.shortDescription}
      </p>

      <Link
        href={`/services/${service.slug}`}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition-all hover:gap-3"
      >
        Learn More

        <ArrowRight className="h-4 w-4" />
      </Link>

    </Card>
  );
}