import type { MetadataRoute } from "next";
import { marketplaceServices } from "@/app/data/serviceMarketplace";
import { industries } from "@/app/data/industries";
import { projects } from "@/app/data/projects";
import { studios } from "@/app/data/studios";
import { expertProfiles, proofCaseStudies } from "@/app/data/v32GrowthOS";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geekyacedigitalhub.com";
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/showcase", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/case-studies", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/project-planner", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/experts", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/trust", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/book", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/proposal", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((route) => ({ url: `${baseUrl}${route.path}`, lastModified, changeFrequency: route.changeFrequency, priority: route.priority }));

  const serviceRoutes = marketplaceServices.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 }));
  const industryRoutes = industries.map((industry) => ({ url: `${baseUrl}/solutions/${industry.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.75 }));
  const projectRoutes = projects.map((project) => ({ url: `${baseUrl}/showcase/${project.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 }));
  const studioRoutes = studios.map((studio) => ({ url: `${baseUrl}/studios/${studio.id}`, lastModified, changeFrequency: "monthly" as const, priority: 0.85 }));
  const proofRoutes = proofCaseStudies.filter((study) => study.published).map((study) => ({ url: `${baseUrl}/case-studies/${study.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 }));
  const expertRoutes = expertProfiles.map((profile) => ({ url: `${baseUrl}/experts/${profile.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.75 }));

  return [...staticRoutes, ...studioRoutes, ...serviceRoutes, ...industryRoutes, ...proofRoutes, ...expertRoutes, ...projectRoutes];
}
