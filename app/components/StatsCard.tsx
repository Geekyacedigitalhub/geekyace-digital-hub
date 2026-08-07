import { LucideIcon } from "lucide-react";
import Card from "./ui/Card";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
}

export default function StatsCard({
  icon: Icon,
  value,
  title,
  description,
}: StatsCardProps) {
  return (
    <Card className="text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
        <Icon className="h-8 w-8 text-green-600" />
      </div>

      <h3 className="mt-6 text-5xl font-bold text-green-600">
        {value}
      </h3>

      <h4 className="mt-3 text-xl font-bold text-gray-900">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

    </Card>
  );
}