import type { Studio } from "@/app/data/studios";

export type ProofStatus = "VERIFIED" | "CONFIDENTIAL" | "CONCEPT";

export type ProofCaseStudy = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  studioId: Studio["id"];
  serviceSlugs: string[];
  industries: string[];
  heroImageUrl: string;
  proofStatus: ProofStatus;
  proofUrl?: string;
  clientPermission: boolean;
  clientDisplayName?: string;
  featured: boolean;
  published: boolean;
  engagement: string;
  deliverables: string[];
  evidenceNotes: string[];
};

export const proofCaseStudies: ProofCaseStudy[] = [
  {
    slug: "confidential-service-business-launch",
    title: "Confidential Service Business Launch System",
    summary:
      "A coordinated brand, website, and enquiry journey prepared for a professional-services launch while protecting the client identity and commercially sensitive details.",
    challenge:
      "The buyer needed one accountable team to turn an early service concept into a credible launch presence without managing separate strategy, design, and development vendors.",
    approach:
      "GeekyAce structured the work around positioning, visual direction, a conversion-focused website, and a clear enquiry handoff. Each phase used shared acceptance criteria and one delivery owner.",
    outcome:
      "The engagement produced a launch-ready digital system with a consistent buyer story, reusable brand assets, and a clearer path from first visit to qualified enquiry.",
    studioId: "creative",
    serviceSlugs: ["brand-identity", "website-development"],
    industries: ["Professional services", "Business services"],
    heroImageUrl: "/images/showcase/branding/fashion-brand.webp",
    proofStatus: "CONFIDENTIAL",
    clientPermission: false,
    featured: true,
    published: true,
    engagement: "Cross-studio launch project",
    deliverables: [
      "Positioning and visual direction",
      "Responsive marketing website",
      "Buyer enquiry journey",
      "Launch asset handover",
    ],
    evidenceNotes: [
      "Client identity withheld by agreement",
      "No unsupported revenue or conversion claims",
      "Scope and outcomes described without exposing private assets",
    ],
  },
  {
    slug: "ai-support-workflow-concept",
    title: "AI Support Workflow Capability Concept",
    summary:
      "A transparent capability concept showing how an AI-assisted support journey can triage questions, route qualified requests, and preserve a human escalation path.",
    challenge:
      "Growing service teams often lose time to repetitive enquiries while buyers wait too long for the right answer or a clear route to a human specialist.",
    approach:
      "The concept maps intent capture, approved knowledge, escalation rules, conversation summaries, and lead handoff before demonstrating the interface and workflow architecture.",
    outcome:
      "The concept demonstrates a safer, reviewable automation pattern that can be adapted after discovery, data-access review, and business-specific guardrails are confirmed.",
    studioId: "technology",
    serviceSlugs: ["ai-assistants", "business-automation"],
    industries: ["Professional services", "Customer support"],
    heroImageUrl: "/images/showcase/ai/support-ai-01.webp",
    proofStatus: "CONCEPT",
    clientPermission: false,
    featured: true,
    published: true,
    engagement: "Capability demonstration",
    deliverables: [
      "Conversation journey map",
      "Escalation and safety rules",
      "Support interface concept",
      "Implementation readiness checklist",
    ],
    evidenceNotes: [
      "Clearly labeled as a capability concept",
      "Not represented as commissioned client work",
      "No performance metrics claimed",
    ],
  },
  {
    slug: "multi-channel-growth-system-concept",
    title: "Multi-channel Growth System Capability Concept",
    summary:
      "A capability concept for connecting landing-page messaging, campaign creative, lifecycle email, and lead attribution into one measurable buyer journey.",
    challenge:
      "Disconnected marketing activities make it difficult to understand which message or channel creates meaningful enquiries and where buyer confidence is lost.",
    approach:
      "The concept starts with one conversion event, maps the supporting touchpoints, defines source tracking, and aligns the creative and reporting structure around the same decision journey.",
    outcome:
      "The resulting blueprint gives a growth team a clearer measurement model, a reusable campaign structure, and a practical starting point for controlled experimentation.",
    studioId: "growth",
    serviceSlugs: ["paid-advertising", "email-marketing", "lead-generation"],
    industries: ["E-commerce", "Digital services"],
    heroImageUrl: "/images/showcase/branding/social-media.webp",
    proofStatus: "CONCEPT",
    clientPermission: false,
    featured: false,
    published: true,
    engagement: "Capability demonstration",
    deliverables: [
      "Buyer journey map",
      "Campaign message framework",
      "Attribution plan",
      "Experiment backlog",
    ],
    evidenceNotes: [
      "Clearly labeled as a capability concept",
      "Illustrative deliverables only",
      "Final scope depends on channel and data access",
    ],
  },
];

export function getProofCaseStudy(slug: string) {
  return proofCaseStudies.find((study) => study.slug === slug);
}

export type ExpertProfile = {
  slug: string;
  name: string;
  role: string;
  headline: string;
  studioId: Studio["id"];
  bio: string;
  imageUrl: string;
  location: string;
  availability: string;
  yearsExperience?: number;
  skills: string[];
  expertise: string[];
  platforms: string[];
  languages: string[];
  portfolioUrl?: string;
  buyerFit: string[];
  workingStyle: string[];
  featured: boolean;
};

export const expertProfiles: ExpertProfile[] = [
  {
    slug: "opeyemi-ajose",
    name: "Opeyemi Ajose",
    role: "Founder & CEO",
    headline:
      "Founder-led digital strategy and technology delivery for businesses that need one accountable partner.",
    studioId: "technology",
    bio:
      "Opeyemi Ajose is the Founder and CEO of GeekyAce Digital Hub. He brings together technology, creativity, development, and structured problem-solving to help entrepreneurs, startups, and established businesses turn ideas into practical digital solutions.",
    imageUrl: "/images/opeyemi-ajose-founder.png",
    location: "Worldwide · Remote",
    availability: "Available for discovery",
    skills: ["Digital strategy", "Web development", "Solution architecture", "Project direction"],
    expertise: ["Digital products", "Agency leadership", "Business technology"],
    platforms: ["Next.js", "React", "Vercel", "Modern AI platforms"],
    languages: ["English"],
    portfolioUrl: "https://github.com/Geekyacedigitalhub",
    buyerFit: [
      "Founders shaping a new digital offer",
      "Businesses modernizing an existing platform",
      "Projects that need coordinated strategy and delivery",
    ],
    workingStyle: [
      "Clarify the business decision before selecting technology",
      "Keep scope, ownership, and acceptance criteria visible",
      "Bring the right specialists into the project at the right stage",
    ],
    featured: true,
  },
];

export function getExpertProfile(slug: string) {
  return expertProfiles.find((profile) => profile.slug === slug);
}

export type GrowthLeadPreview = {
  id: string;
  label: string;
  service: string;
  studioId: Studio["id"];
  source: "ACEMATCH" | "BOOKING" | "PROPOSAL" | "CONTACT";
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL" | "WON";
  valueBand: string;
  age: string;
  nextAction: string;
};

export const previewGrowthLeads: GrowthLeadPreview[] = [
  { id: "preview-01", label: "Hospitality website brief", service: "Website Development", studioId: "technology", source: "ACEMATCH", status: "QUALIFIED", valueBand: "$5k–$15k", age: "Today", nextAction: "Prepare discovery agenda" },
  { id: "preview-02", label: "Brand launch consultation", service: "Brand Identity Design", studioId: "creative", source: "BOOKING", status: "CONTACTED", valueBand: "$1.5k–$5k", age: "1 day", nextAction: "Confirm meeting time" },
  { id: "preview-03", label: "Automation proposal request", service: "Business Automation", studioId: "technology", source: "PROPOSAL", status: "PROPOSAL", valueBand: "$5k–$15k", age: "2 days", nextAction: "Send scoped proposal" },
  { id: "preview-04", label: "Growth campaign enquiry", service: "Paid Advertising", studioId: "growth", source: "CONTACT", status: "NEW", valueBand: "$1.5k–$5k", age: "3 hours", nextAction: "Qualify channel and offer" },
  { id: "preview-05", label: "Product launch workspace", service: "SaaS & MVP Development", studioId: "technology", source: "ACEMATCH", status: "WON", valueBand: "$15k+", age: "12 days", nextAction: "Open client workspace" },
];

export const previewPortalProject = {
  client: "Northstar Demo Company",
  demo: true,
  project: "Digital launch system",
  status: "In production",
  progress: 68,
  nextMilestone: "Responsive build review",
  nextMeeting: "Thursday · 2:00 PM UTC",
  health: "On track",
  budgetStatus: "Within approved scope",
  milestones: [
    { title: "Discovery and direction", status: "Complete", date: "Completed" },
    { title: "Experience and visual system", status: "Complete", date: "Approved" },
    { title: "Responsive production build", status: "In progress", date: "Due next" },
    { title: "Quality assurance and launch", status: "Upcoming", date: "After approval" },
  ],
  deliverables: [
    { name: "Project direction brief", type: "PDF", state: "Approved" },
    { name: "Responsive design review", type: "Figma", state: "Approved" },
    { name: "Staging website", type: "Link", state: "Ready for review" },
  ],
  updates: [
    { title: "Staging review is ready", body: "Core pages are available for structured feedback. Comments are due before the QA sprint begins.", time: "Today" },
    { title: "Design direction approved", body: "The approved direction is now the source of truth for production and launch assets.", time: "3 days ago" },
  ],
};

export const consultationSlots = [
  "Tuesday · 10:00 AM UTC",
  "Tuesday · 3:00 PM UTC",
  "Wednesday · 12:00 PM UTC",
  "Thursday · 2:00 PM UTC",
  "Friday · 11:00 AM UTC",
];
