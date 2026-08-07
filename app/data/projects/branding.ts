import { Project } from "@/app/types/project";

export const branding: Project[] = [
  {
    id: 401,
    slug: "brewbean-brand-identity",
    title: "BrewBean Coffee Brand",
    client: "BrewBean Coffee",
    category: "Brand Identity",
    industry: "Food & Beverage",
    service: "Branding",
    year: "2026",
    duration: "3 Weeks",
    featured: true,
    image: "/images/showcase/branding/coffee-brand.jpg",
    gallery: [
      "/images/showcase/branding/coffee-brand.jpg",
    ],
    shortDescription:
      "Complete visual identity for a specialty coffee shop.",
    overview:
      "Created a modern brand identity including logo, colors, typography and packaging.",
    challenge:
      "The business lacked a recognizable visual identity.",
    solution:
      "Developed a cohesive brand system for print and digital media.",
    results: [
      "Brand Guidelines",
      "Logo Design",
      "Packaging",
      "Social Media Assets",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
  },

  {
    id: 402,
    slug: "urbanwear-brand",
    title: "UrbanWear Clothing",
    client: "UrbanWear",
    category: "Brand Identity",
    industry: "Fashion",
    service: "Branding",
    year: "2026",
    duration: "4 Weeks",
    featured: false,
    image: "/images/showcase/branding/fashion-brand.jpg",
    gallery: ["/images/showcase/branding/fashion-brand.jpg"],
    shortDescription:
      "Fashion branding with logo, packaging and marketing assets.",
    overview:
      "A premium visual identity for a modern clothing label.",
    challenge:
      "The startup needed a memorable and consistent brand.",
    solution:
      "Designed a complete branding package for digital and print.",
    results: [
      "Logo System",
      "Brand Colors",
      "Marketing Templates",
    ],
    technologies: ["Illustrator", "Photoshop"],
  },

  {
    id: 403,
    slug: "restaurant-social-campaign",
    title: "Restaurant Social Campaign",
    client: "Bella Vista",
    category: "Graphic Design",
    industry: "Restaurant",
    service: "Graphic Design",
    year: "2026",
    duration: "2 Weeks",
    featured: false,
    image: "/images/showcase/branding/social-media.jpg",
    gallery: ["/images/showcase/branding/social-media.jpg"],
    shortDescription:
      "Social media graphics designed to increase customer engagement.",
    overview:
      "Campaign graphics created for Facebook and Instagram marketing.",
    challenge:
      "Low engagement on social media platforms.",
    solution:
      "Created branded promotional graphics and content templates.",
    results: [
      "Social Media Templates",
      "Promotional Graphics",
    ],
    technologies: ["Photoshop", "Illustrator"],
  },

  {
    id: 404,
    slug: "promo-motion-graphics",
    title: "Promotional Motion Graphics",
    client: "TechLaunch",
    category: "Motion Graphics",
    industry: "Technology",
    service: "Motion Graphics",
    year: "2026",
    duration: "3 Weeks",
    featured: true,
    image: "/images/showcase/branding/motion-graphics.jpg",
    gallery: ["/images/showcase/branding/motion-graphics.jpg"],
    shortDescription:
      "Animated promotional content for digital marketing campaigns.",
    overview:
      "Motion graphics used across social media and presentations.",
    challenge:
      "Static marketing assets failed to capture attention.",
    solution:
      "Produced engaging animated graphics with brand consistency.",
    results: [
      "Animated Ads",
      "Brand Videos",
    ],
    technologies: ["After Effects", "Illustrator"],
  },

  {
    id: 405,
    slug: "corporate-video",
    title: "Corporate Promotional Video",
    client: "CorporateX",
    category: "Video Production",
    industry: "Business",
    service: "Video Editing",
    year: "2026",
    duration: "3 Weeks",
    featured: false,
    image: "/images/showcase/branding/video-production.jpg",
    gallery: ["/images/showcase/branding/video-production.jpg"],
    shortDescription:
      "Professional promotional video for business marketing.",
    overview:
      "Corporate promotional video highlighting services and achievements.",
    challenge:
      "The company lacked high-quality marketing video content.",
    solution:
      "Produced, edited and delivered a polished promotional video.",
    results: [
      "4K Video",
      "Brand Storytelling",
    ],
    technologies: ["Premiere Pro", "After Effects"],
  },
];