export interface Project {
  id: number;
  slug: string;

  title: string;
  client: string;

  category: string;
  industry: string;
  service: string;

  year: string;
  duration: string;

  featured: boolean;

  image: string;
  gallery: string[];

  shortDescription: string;
  overview: string;

  challenge: string;
  solution: string;

  results: string[];

  technologies: string[];

  liveUrl?: string;
  proofStatus?: "verified" | "concept";
  proofUrl?: string;
}
