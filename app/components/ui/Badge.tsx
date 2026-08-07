import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: "green" | "gray" | "blue" | "purple";
}

export default function Badge({
  children,
  color = "green",
}: BadgeProps) {
  const colors = {
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}