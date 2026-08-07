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
  LayoutDashboard,
} from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: any;
  count: number;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Website Development",
    description: "Business websites, eCommerce and web applications.",
    icon: Globe,
    count: 12,
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Android and iOS mobile applications.",
    icon: Smartphone,
    count: 8,
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Chatbots, assistants and AI automation.",
    icon: Bot,
    count: 6,
  },
  {
    id: 4,
    title: "Business Automation",
    description: "CRM, ERP and workflow systems.",
    icon: Settings,
    count: 9,
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Flyers, posters and marketing materials.",
    icon: Palette,
    count: 20,
  },
  {
    id: 6,
    title: "Brand Identity",
    description: "Logo, colors and complete branding.",
    icon: Brush,
    count: 10,
  },
  {
    id: 7,
    title: "Video Editing",
    description: "Commercials, YouTube and social media videos.",
    icon: Video,
    count: 10,
  },
  {
    id: 8,
    title: "Motion Graphics",
    description: "Animations and motion design.",
    icon: Clapperboard,
    count: 8,
  },
  {
    id: 9,
    title: "Illustration",
    description: "Digital art and custom illustrations.",
    icon: PenTool,
    count: 12,
  },
  {
    id: 10,
    title: "CAD Drafting",
    description: "2D drafting and 3D modelling.",
    icon: Building2,
    count: 8,
  },
  {
    id: 11,
    title: "Game Development",
    description: "Educational and commercial games.",
    icon: Gamepad2,
    count: 6,
  },
  {
    id: 12,
    title: "UI / UX Design",
    description: "Modern interfaces and user experiences.",
    icon: LayoutDashboard,
    count: 14,
  },
];