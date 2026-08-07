import { Project } from "@/app/types/project";

import { websites } from "./websites";
import { mobile } from "./mobile";
import { ai } from "./ai";
import { automation } from "./automation";
import { branding } from "./branding";

export const projects: Project[] = [
  ...websites,
  ...mobile,
  ...ai,
  ...automation,
  ...branding,
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const industries = [...new Set(projects.map((p) => p.industry))].sort();
export const services = [...new Set(projects.map((p) => p.service))].sort();
export const categories = [...new Set(projects.map((p) => p.category))].sort();

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProjects = (limit = 6) =>
  featuredProjects.slice(0, limit);

export const getProjectsByIndustry = (industry: string) =>
  projects.filter((project) => project.industry === industry);

export const getProjectsByCategory = (category: string) =>
  projects.filter((project) => project.category === category);

export const getProjectsByService = (service: string) =>
  projects.filter((project) => project.service === service);