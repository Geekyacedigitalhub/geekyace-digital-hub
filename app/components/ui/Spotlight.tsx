// Spotlight is now CSS-only; this is a pass-through wrapper so existing
// imports keep working. No mouse tracking = no rAF = smoother scrolling.
import type { ReactNode } from "react";

export default function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`spotlight-hover ${className}`}>{children}</div>;
}
