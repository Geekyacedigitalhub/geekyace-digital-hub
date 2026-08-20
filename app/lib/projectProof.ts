import type { Project } from "@/app/types/project";

export function isVerifiedProject(project: Project) {
  return project.proofStatus === "verified" && Boolean(project.proofUrl?.startsWith("https://"));
}

export function getProjectProofLabel(project: Project) {
  return isVerifiedProject(project) ? "Verified client work" : "Capability concept";
}
