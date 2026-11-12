"use client";

// Lightweight replacement — pure CSS tilt via className. Mouse-tracking
// glare removed for performance (it attached a per-card mousemove listener).
import type { ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  return <div className={`tilt-hover relative ${className}`}>{children}</div>;
}
