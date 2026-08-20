export type Studio = {
  id: "technology" | "creative" | "growth" | "video" | "support";
  number: string;
  name: string;
  shortName: string;
  description: string;
  outcome: string;
  services: string[];
  route: string;
  accent: string;
};

export const studios: Studio[] = [
  {
    id: "technology",
    number: "01",
    name: "Technology & Product",
    shortName: "Product Studio",
    description:
      "Websites, mobile products, AI experiences, automation, and custom software shaped around a clear business goal.",
    outcome: "Launch, modernize, or automate a digital product.",
    services: ["Web development", "Mobile apps", "AI solutions", "Business automation"],
    route: "/studios/technology",
    accent: "from-emerald-300/25 via-emerald-300/[0.04] to-transparent",
  },
  {
    id: "creative",
    number: "02",
    name: "Brand & Creative",
    shortName: "Creative Studio",
    description:
      "Identity, graphic design, presentation, UI, and campaign assets built as one consistent visual system.",
    outcome: "Look established, distinctive, and ready to grow.",
    services: ["Brand identity", "Graphic design", "UI/UX design", "Presentation design"],
    route: "/studios/creative",
    accent: "from-violet-300/25 via-violet-300/[0.04] to-transparent",
  },
  {
    id: "growth",
    number: "03",
    name: "Marketing & Growth",
    shortName: "Growth Studio",
    description:
      "Search, content, social, lifecycle, and conversion systems that turn attention into measurable buyer actions.",
    outcome: "Create a repeatable path from discovery to enquiry.",
    services: ["Growth strategy", "SEO", "Content systems", "Campaign creative"],
    route: "/studios/growth",
    accent: "from-cyan-300/25 via-cyan-300/[0.04] to-transparent",
  },
  {
    id: "video",
    number: "04",
    name: "Video & Motion",
    shortName: "Motion Studio",
    description:
      "Explainers, social video, editing, motion graphics, and visual storytelling designed for each channel.",
    outcome: "Explain the offer faster and hold attention longer.",
    services: ["Video editing", "Motion graphics", "Explainers", "Social video"],
    route: "/studios/video",
    accent: "from-amber-300/25 via-amber-300/[0.04] to-transparent",
  },
  {
    id: "support",
    number: "05",
    name: "Business Support",
    shortName: "Operations Studio",
    description:
      "Research, documentation, virtual support, data workflows, and operational systems delivered with clear ownership.",
    outcome: "Give your core team more focus and operating capacity.",
    services: ["Research", "Virtual support", "Documentation", "Data workflows"],
    route: "/studios/support",
    accent: "from-rose-300/25 via-rose-300/[0.04] to-transparent",
  },
];

export function getStudio(id: Studio["id"]) {
  return studios.find((studio) => studio.id === id) ?? studios[0];
}
