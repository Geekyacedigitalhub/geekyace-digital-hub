import {
  Bot,
  Globe,
  Building2,
  Smartphone,
  Palette,
  Ruler,
} from "lucide-react";

import { Project } from "../types";

export const portfolio: Project[] = [
  {
    slug: "ai-business-assistant",
    icon: Bot,
    title: "AI Business Assistant",
    category: "Artificial Intelligence",
    description:
      "An AI-powered assistant that automates customer support, appointment booking, lead qualification, and business workflows.",
    tech: ["Next.js", "OpenAI", "Automation"],
    image: "/images/showcase/ai/document-ai-01.webp",
  },

  {
    slug: "corporate-website",
    icon: Globe,
    title: "Corporate Business Website",
    category: "Website Development",
    description:
      "A modern corporate website built for performance, SEO, responsiveness, and customer engagement.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    image: "/images/showcase/websites/construction-01.webp",
  },

  {
    slug: "business-management-system",
    icon: Building2,
    title: "Business Management System",
    category: "Business Automation",
    description:
      "An all-in-one business platform for CRM, HR, inventory, invoicing, analytics, and workflow automation.",
    tech: ["Dashboard", "Database", "Cloud"],
    image: "/images/showcase/automation/crm-01.webp",
  },

  {
    slug: "mobile-business-app",
    icon: Smartphone,
    title: "Business Mobile App",
    category: "Mobile Development",
    description:
      "Cross-platform mobile applications that connect businesses with customers anytime and anywhere.",
    tech: ["React Native", "Android", "iOS"],
    image: "/images/showcase/mobile/church-app-01.webp",
  },

  {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Professional logo design, branding systems, marketing materials, and social media assets.",
    tech: ["Branding", "Adobe", "Creative"],
    image: "/images/showcase/branding/coffee-brand.webp",
  },

  {
    slug: "cad-design",
    icon: Ruler,
    title: "CAD & Technical Drafting",
    category: "CAD Drafting",
    description:
      "Professional 2D and 3D drafting services for engineering, construction, and architectural projects.",
    tech: ["AutoCAD", "2D", "3D"],
    image: "/images/showcase/websites/construction-01.webp",
  },
];