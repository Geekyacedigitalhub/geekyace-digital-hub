import {
  Globe,
  Bot,
  Cpu,
  Smartphone,
  Palette,
  Ruler,
} from "lucide-react";

import { Service } from "../types";

export const services: Service[] = [
  {
    slug: "website-development",

    title: "Website Development",

    shortDescription:
      "Professional websites built for speed, SEO and conversions.",

    fullDescription:
      "We build modern websites, web applications and portals using the latest technologies to help businesses grow.",

    icon: Globe,

    heroImage: "/images/services/website.jpg",

    features: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce Stores",
      "Booking Systems",
      "Customer Portals",
      "Web Applications",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],

    process: [
      "Planning",
      "UI Design",
      "Development",
      "Testing",
      "Deployment",
    ],
  },

  {
    slug: "ai-solutions",

    title: "AI Solutions",

    shortDescription:
      "AI tools that automate business operations.",

    fullDescription:
      "From AI chatbots to intelligent assistants and workflow automation.",

    icon: Bot,

    heroImage: "/images/services/ai.jpg",

    features: [
      "AI Chatbots",
      "OpenAI Integration",
      "Lead Qualification",
      "Automation",
      "Customer Support",
    ],

    technologies: [
      "OpenAI",
      "Python",
      "Next.js",
    ],

    process: [
      "Consultation",
      "Planning",
      "Development",
      "Testing",
      "Deployment",
    ],
  },

  {
    slug: "business-automation",

    title: "Business Automation",

    shortDescription:
      "Automate repetitive business processes.",

    fullDescription:
      "Inventory, CRM, HR, reporting and workflow automation solutions.",

    icon: Cpu,

    heroImage: "/images/services/automation.jpg",

    features: [
      "CRM",
      "Inventory",
      "Payroll",
      "Invoices",
      "Reports",
      "HR",
    ],

    technologies: [
      "Cloud",
      "Database",
      "Automation",
    ],

    process: [
      "Analysis",
      "Planning",
      "Development",
      "Testing",
      "Training",
    ],
  },

  {
    slug: "mobile-app-development",

    title: "Mobile App Development",

    shortDescription:
      "Android & iOS mobile applications.",

    fullDescription:
      "Cross-platform mobile applications that keep businesses connected with customers.",

    icon: Smartphone,

    heroImage: "/images/services/mobile.jpg",

    features: [
      "Android Apps",
      "iOS Apps",
      "Business Apps",
      "Booking Apps",
    ],

    technologies: [
      "React Native",
      "Firebase",
      "Cloud",
    ],

    process: [
      "Planning",
      "Design",
      "Development",
      "Testing",
      "Publishing",
    ],
  },

  {
    slug: "graphic-design",

    title: "Graphic Design",

    shortDescription:
      "Creative branding and marketing design.",

    fullDescription:
      "Logos, social media graphics, company profiles and complete brand identity.",

    icon: Palette,

    heroImage: "/images/services/design.jpg",

    features: [
      "Logos",
      "Brand Identity",
      "Flyers",
      "Social Media",
      "Business Cards",
    ],

    technologies: [
      "Illustrator",
      "Photoshop",
      "Figma",
    ],

    process: [
      "Research",
      "Concept",
      "Design",
      "Revision",
      "Delivery",
    ],
  },

  {
    slug: "cad-drafting",

    title: "CAD Drafting",

    shortDescription:
      "Professional engineering drafting.",

    fullDescription:
      "High-quality architectural and engineering CAD drafting services.",

    icon: Ruler,

    heroImage: "/images/services/cad.jpg",

    features: [
      "2D Drawings",
      "3D Models",
      "Floor Plans",
      "Construction Drawings",
    ],

    technologies: [
      "AutoCAD",
      "Revit",
      "Civil 3D",
    ],

    process: [
      "Requirements",
      "Drafting",
      "Review",
      "Approval",
      "Delivery",
    ],
  },
];