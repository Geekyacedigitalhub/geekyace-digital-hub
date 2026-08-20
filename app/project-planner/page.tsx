import type { Metadata } from "next";
import ProjectPlanner from "@/app/components/planner/ProjectPlanner";

export const metadata: Metadata = {
  title: "AceMatch 2.0 Expert Squad Builder",
  description: "Carry a marketplace service into AceMatch or begin with the outcome to build a recommended GeekyAce squad, delivery path, and reusable buyer brief.",
  alternates: { canonical: "/project-planner" },
};

export default function ProjectPlannerPage() {
  return <ProjectPlanner />;
}
