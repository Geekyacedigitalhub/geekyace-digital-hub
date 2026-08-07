import { ReactNode } from "react";
import Card from "./Card";

interface InfoCardProps {
  icon?: ReactNode;
  badge?: string;
  title: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
}

export default function InfoCard({
  icon,
  badge,
  title,
  description,
  footer,
  className,
}: InfoCardProps) {
  return (
    <Card className={className}>

      {icon && (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
          {icon}
        </div>
      )}

      {badge && (
        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h3 className="mt-4 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      {description && (
        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>
      )}

      {footer && (
        <div className="mt-8">
          {footer}
        </div>
      )}

    </Card>
  );
}