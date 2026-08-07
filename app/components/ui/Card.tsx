import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className,
  hover = true,
  padding = "lg",
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-gray-200",
        "bg-white",
        "shadow-sm",
        "transition-all duration-300",
        paddingClasses[padding],
        hover &&
          "hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}