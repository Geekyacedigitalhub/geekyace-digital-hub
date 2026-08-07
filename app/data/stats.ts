export interface Stat {
  id: number;
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    value: "10+",
    label: "Digital Services",
    description: "Web, mobile, AI, branding, automation and more.",
  },
  {
    id: 2,
    value: "8+",
    label: "Industries",
    description: "Solutions tailored for different business sectors.",
  },
  {
    id: 3,
    value: "20+",
    label: "Technologies",
    description: "Modern frameworks and platforms powering our work.",
  },
  {
    id: 4,
    value: "100%",
    label: "Custom Solutions",
    description: "Every project is designed around your business goals.",
  },
];