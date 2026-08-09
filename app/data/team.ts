export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  skills: string[];
  expertise: string[];
  platforms: string[];
  location?: string;
  availability: "Available" | "Busy" | "Unavailable";
  featured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-001",
    name: "Geekyace Team Member",
    role: "Full-Stack Developer",
    bio: "Experienced digital professional focused on building modern websites, web applications, and scalable digital solutions.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
    ],
    expertise: [
      "Web Development",
      "Full-Stack Development",
      "SaaS Development",
    ],
    platforms: [
      "Next.js",
      "React",
      "Node.js",
      "Vercel",
    ],
    location: "Remote",
    availability: "Available",
    featured: true,
  },
];