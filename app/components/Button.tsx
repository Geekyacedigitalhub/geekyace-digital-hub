import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2";

  const variants = {
    primary:
      "btn-glass glass-shine bg-green-600 text-white hover:bg-green-700 hover:-translate-y-0.5 shadow-[0_12px_30px_-10px_rgba(22,163,74,0.55)] hover:shadow-[0_20px_40px_-12px_rgba(22,163,74,0.7)]",

    secondary:
      "glass glass-shine border border-green-200/60 text-green-700 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-[0_12px_30px_-12px_rgba(22,163,74,0.25)]",

    outline:
      "glass glass-shine border border-white/30 text-white hover:-translate-y-0.5 hover:border-green-300 hover:bg-white/15",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}