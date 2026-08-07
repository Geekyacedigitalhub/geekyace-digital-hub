export interface Technology {
  id: number;
  name: string;
  category: string;
}

export const technologies: Technology[] = [
  {
    id: 1,
    name: "Next.js",
    category: "Frontend",
  },
  {
    id: 2,
    name: "React",
    category: "Frontend",
  },
  {
    id: 3,
    name: "TypeScript",
    category: "Language",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    category: "UI",
  },
  {
    id: 5,
    name: "Node.js",
    category: "Backend",
  },
  {
    id: 6,
    name: "Supabase",
    category: "Database",
  },
  {
    id: 7,
    name: "PostgreSQL",
    category: "Database",
  },
  {
    id: 8,
    name: "Flutter",
    category: "Mobile",
  },
  {
    id: 9,
    name: "Firebase",
    category: "Cloud",
  },
  {
    id: 10,
    name: "OpenAI",
    category: "AI",
  },
  {
    id: 11,
    name: "AWS",
    category: "Cloud",
  },
  {
    id: 12,
    name: "Figma",
    category: "Design",
  },
];