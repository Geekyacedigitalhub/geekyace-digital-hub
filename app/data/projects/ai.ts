import { Project } from "@/app/types/project";

export const ai: Project[] = [
  {
    id: 201,
    slug: "support-ai-assistant",
    title: "Support AI Assistant",
    client: "SupportPro",
    category: "AI Solution",
    industry: "Customer Service",
    service: "AI Development",
    year: "2026",
    duration: "5 Weeks",
    featured: true,
    image: "/images/showcase/ai/support-ai-01.jpg",
    gallery: [
      "/images/showcase/ai/support-ai-01.jpg",
      "/images/showcase/ai/support-ai-02.jpg",
    ],
    shortDescription:
      "AI-powered customer support chatbot available 24/7.",
    overview:
      "An intelligent assistant that answers customer questions, creates support tickets and reduces response time.",
    challenge:
      "Support staff spent too much time answering repetitive questions.",
    solution:
      "Built an AI assistant trained on company knowledge and integrated with the help desk.",
    results: [
      "24/7 Support",
      "Reduced Response Time",
      "Knowledge Base Search",
      "Human Escalation",
    ],
    technologies: [
      "OpenAI",
      "Next.js",
      "Supabase",
      "LangChain",
    ],
  },

  {
    id: 202,
    slug: "hr-ai-assistant",
    title: "HR AI Assistant",
    client: "TalentFlow",
    category: "AI Solution",
    industry: "Human Resources",
    service: "AI Development",
    year: "2026",
    duration: "6 Weeks",
    featured: true,
    image: "/images/showcase/ai/hr-ai-01.jpg",
    gallery: [
      "/images/showcase/ai/hr-ai-01.jpg",
    ],
    shortDescription:
      "AI assistant for onboarding, policies and employee support.",
    overview:
      "A conversational HR assistant helping employees find answers instantly.",
    challenge:
      "HR teams spent significant time answering repetitive policy questions.",
    solution:
      "Implemented an AI assistant connected to HR documentation.",
    results: [
      "Instant Answers",
      "Employee Self-Service",
      "Policy Search",
      "Reduced HR Workload",
    ],
    technologies: [
      "OpenAI",
      "React",
      "Node.js",
    ],
  },

  {
    id: 203,
    slug: "document-ai",
    title: "Document AI",
    client: "DocFlow",
    category: "AI Solution",
    industry: "Business",
    service: "AI Development",
    year: "2026",
    duration: "8 Weeks",
    featured: false,
    image: "/images/showcase/ai/document-ai-01.jpg",
    gallery: [
      "/images/showcase/ai/document-ai-01.jpg",
    ],
    shortDescription:
      "AI-powered document analysis and summarization.",
    overview:
      "Upload documents and receive intelligent summaries, insights and search capabilities.",
    challenge:
      "Large documents required significant manual review.",
    solution:
      "Integrated AI summarization and semantic search.",
    results: [
      "Document Summaries",
      "Semantic Search",
      "Fast Retrieval",
    ],
    technologies: [
      "OpenAI",
      "LangChain",
      "Supabase",
    ],
  },

  {
    id: 204,
    slug: "sales-ai",
    title: "Sales AI Assistant",
    client: "SalesPilot",
    category: "AI Solution",
    industry: "Sales",
    service: "AI Development",
    year: "2026",
    duration: "6 Weeks",
    featured: false,
    image: "/images/showcase/ai/sales-ai-01.jpg",
    gallery: [
      "/images/showcase/ai/sales-ai-01.jpg",
    ],
    shortDescription:
      "AI assistant helping sales teams prepare proposals and follow-ups.",
    overview:
      "An AI productivity tool for modern sales organizations.",
    challenge:
      "Sales teams spent hours writing repetitive proposals.",
    solution:
      "Built AI-assisted proposal generation and CRM integration.",
    results: [
      "Proposal Generator",
      "Email Drafting",
      "CRM Integration",
    ],
    technologies: [
      "OpenAI",
      "Next.js",
      "PostgreSQL",
    ],
  },

  {
    id: 205,
    slug: "knowledge-ai",
    title: "Knowledge Base AI",
    client: "KnowledgeHub",
    category: "AI Solution",
    industry: "Enterprise",
    service: "AI Development",
    year: "2026",
    duration: "7 Weeks",
    featured: true,
    image: "/images/showcase/ai/knowledge-ai-01.jpg",
    gallery: [
      "/images/showcase/ai/knowledge-ai-01.jpg",
    ],
    shortDescription:
      "Enterprise AI assistant trained on internal company documents.",
    overview:
      "Secure AI search across company knowledge and documentation.",
    challenge:
      "Employees struggled to locate important internal information.",
    solution:
      "Created a retrieval-augmented AI assistant with document indexing.",
    results: [
      "Enterprise Search",
      "Secure Access",
      "Knowledge Retrieval",
      "Improved Productivity",
    ],
    technologies: [
      "OpenAI",
      "LangChain",
      "Supabase",
      "Next.js",
    ],
  },
];