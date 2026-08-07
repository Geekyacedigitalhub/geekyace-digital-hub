import {
  Globe,
  Smartphone,
  Bot,
  Settings,
  Palette,
  Brush,
  Video,
  Clapperboard,
  PenTool,
  Building2,
  Gamepad2,
} from "lucide-react";

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: any;
  heroImage: string;
  category: string;
  featured: boolean;
  technologies: string[];
  industries: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    description:
      "Modern, responsive and high-performance websites built to grow your business.",
    icon: Globe,
    heroImage: "/images/services/website-development.jpg",
    category: "Development",
    featured: true,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    industries: [
      "Healthcare",
      "Education",
      "Restaurant",
      "Hospitality",
      "Real Estate",
      "NGO",
      "Church",
    ],
    benefits: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "Secure",
    ],
  },

  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Android and iOS applications designed for performance and usability.",
    icon: Smartphone,
    heroImage: "/images/services/mobile-app.jpg",
    category: "Development",
    featured: true,
    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
    ],
    industries: [
      "Healthcare",
      "Restaurant",
      "Education",
      "Finance",
      "Retail",
    ],
    benefits: [
      "Android & iOS",
      "Cross Platform",
      "Fast Performance",
      "Modern UI",
    ],
  },

  {
    id: 3,
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI",
    description:
      "Intelligent automation, chatbots and AI-powered business solutions.",
    icon: Bot,
    heroImage: "/images/services/ai.jpg",
    category: "Artificial Intelligence",
    featured: true,
    technologies: [
      "OpenAI",
      "Python",
      "Node.js",
    ],
    industries: [
      "Healthcare",
      "Finance",
      "Education",
      "Retail",
    ],
    benefits: [
      "Automation",
      "24/7 Assistance",
      "Productivity",
      "Cost Reduction",
    ],
  },

  {
    id: 4,
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    description:
      "Digital systems that streamline operations and improve efficiency.",
    icon: Settings,
    heroImage: "/images/services/automation.jpg",
    category: "Automation",
    featured: true,
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
    industries: [
      "Logistics",
      "Healthcare",
      "Education",
      "Retail",
    ],
    benefits: [
      "Workflow Automation",
      "Reporting",
      "Dashboards",
      "Scalability",
    ],
  },

  {
    id: 5,
    slug: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphics",
    description:
      "Creative visuals that strengthen your brand and marketing.",
    icon: Palette,
    heroImage: "/images/services/graphic-design.jpg",
    category: "Creative",
    featured: true,
    technologies: [
      "Photoshop",
      "Illustrator",
      "Canva",
    ],
    industries: [
      "All Industries",
    ],
    benefits: [
      "Brand Consistency",
      "Marketing Materials",
      "Creative Concepts",
      "Print Ready",
    ],
  },

  {
    id: 6,
    slug: "brand-identity",
    title: "Brand Identity",
    shortTitle: "Branding",
    description:
      "Build a memorable identity that connects with your audience.",
    icon: Brush,
    heroImage: "/images/services/branding.jpg",
    category: "Creative",
    featured: true,
    technologies: [
      "Illustrator",
      "Photoshop",
      "Figma",
    ],
    industries: [
      "All Industries",
    ],
    benefits: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Consistency",
    ],
  },

  {
    id: 7,
    slug: "video-editing",
    title: "Video Editing",
    shortTitle: "Video",
    description:
      "Professional editing for commercials, social media and corporate videos.",
    icon: Video,
    heroImage: "/images/services/video-editing.jpg",
    category: "Media",
    featured: false,
    technologies: [
      "Premiere Pro",
      "After Effects",
    ],
    industries: [
      "Marketing",
      "Entertainment",
      "Corporate",
    ],
    benefits: [
      "High Quality",
      "Social Media Ready",
      "Storytelling",
      "Brand Awareness",
    ],
  },

  {
    id: 8,
    slug: "motion-graphics",
    title: "Motion Graphics",
    shortTitle: "Motion",
    description:
      "Engaging animations for businesses, marketing and presentations.",
    icon: Clapperboard,
    heroImage: "/images/services/motion-graphics.jpg",
    category: "Media",
    featured: false,
    technologies: [
      "After Effects",
      "Illustrator",
    ],
    industries: [
      "Marketing",
      "Corporate",
    ],
    benefits: [
      "Animation",
      "Explainer Videos",
      "Engagement",
      "Modern Presentation",
    ],
  },

  {
    id: 9,
    slug: "illustration",
    title: "Illustration",
    shortTitle: "Illustration",
    description:
      "Custom illustrations that communicate ideas creatively.",
    icon: PenTool,
    heroImage: "/images/services/illustration.jpg",
    category: "Creative",
    featured: false,
    technologies: [
      "Illustrator",
      "Procreate",
    ],
    industries: [
      "Publishing",
      "Education",
      "Marketing",
    ],
    benefits: [
      "Unique Artwork",
      "Custom Characters",
      "Creative Assets",
      "Scalable Graphics",
    ],
  },

  {
    id: 10,
    slug: "cad-drafting",
    title: "CAD Drafting",
    shortTitle: "CAD",
    description:
      "Professional 2D drafting and 3D modelling for engineering and architecture.",
    icon: Building2,
    heroImage: "/images/services/cad.jpg",
    category: "Engineering",
    featured: false,
    technologies: [
      "AutoCAD",
      "Revit",
      "SolidWorks",
    ],
    industries: [
      "Construction",
      "Engineering",
      "Manufacturing",
    ],
    benefits: [
      "Accurate Drawings",
      "3D Models",
      "Technical Documentation",
      "Professional Standards",
    ],
  },

  {
    id: 11,
    slug: "game-development",
    title: "Game Development",
    shortTitle: "Games",
    description:
      "Interactive educational and commercial games for multiple platforms.",
    icon: Gamepad2,
    heroImage: "/images/services/game-development.jpg",
    category: "Development",
    featured: false,
    technologies: [
      "Unity",
      "C#",
    ],
    industries: [
      "Education",
      "Entertainment",
    ],
    benefits: [
      "Interactive Learning",
      "Cross Platform",
      "Engaging Gameplay",
      "Modern Graphics",
    ],
  },
];