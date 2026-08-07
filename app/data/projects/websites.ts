import { Project } from "@/app/types/project";

export const websites: Project[] = [
  {
    id: 1,
    slug: "bella-vista-restaurant",
    title: "Bella Vista Restaurant",
    client: "Bella Vista Restaurant",
    category: "Website",
    industry: "Restaurant",
    service: "Website Development",
    year: "2026",
    duration: "4 Weeks",
    featured: true,
    image: "/images/showcase/websites/restaurant-01.jpg",
    gallery: [
      "/images/showcase/websites/restaurant-01.jpg",
      "/images/showcase/websites/restaurant-02.jpg",
      "/images/showcase/websites/restaurant-03.jpg",
    ],
    shortDescription:
      "Modern restaurant website with reservations, digital menu and online ordering.",
    overview:
      "A premium restaurant website designed to increase reservations and improve customer experience.",
    challenge:
      "The restaurant relied on social media only and had no professional online presence.",
    solution:
      "Designed a responsive website featuring online reservations, interactive menu, gallery and contact system.",
    results: [
      "Responsive on all devices",
      "SEO Optimized",
      "Online Reservation System",
      "Fast Performance",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
  },

  {
    id: 2,
    slug: "nova-medical-center",
    title: "Nova Medical Center",
    client: "Nova Medical Center",
    category: "Website",
    industry: "Healthcare",
    service: "Website Development",
    year: "2026",
    duration: "6 Weeks",
    featured: true,
    image: "/images/showcase/websites/medical-01.jpg",
    gallery: [
      "/images/showcase/websites/medical-01.jpg",
      "/images/showcase/websites/medical-02.jpg",
    ],
    shortDescription:
      "Healthcare portal with appointment booking and patient dashboard.",
    overview:
      "Professional healthcare platform connecting patients with medical services.",
    challenge:
      "Patients experienced long waiting times for appointments.",
    solution:
      "Implemented online booking, doctor directory and patient portal.",
    results: [
      "Appointment Booking",
      "Patient Dashboard",
      "Responsive Design",
      "Secure Portal",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
  },

  {
    id: 3,
    slug: "urban-properties",
    title: "Urban Properties",
    client: "Urban Properties",
    category: "Website",
    industry: "Real Estate",
    service: "Website Development",
    year: "2026",
    duration: "5 Weeks",
    featured: true,
    image: "/images/showcase/websites/real-estate-01.jpg",
    gallery: [
      "/images/showcase/websites/real-estate-01.jpg",
      "/images/showcase/websites/real-estate-02.jpg",
    ],
    shortDescription:
      "Luxury real estate platform with advanced property search.",
    overview:
      "Modern property listing platform built for premium real estate agencies.",
    challenge:
      "Managing hundreds of property listings manually.",
    solution:
      "Built searchable listings, interactive maps and inquiry system.",
    results: [
      "Property Search",
      "Google Maps",
      "Responsive Layout",
      "SEO Friendly",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
  },

  {
    id: 4,
    slug: "bright-future-academy",
    title: "Bright Future Academy",
    client: "Bright Future Academy",
    category: "Website",
    industry: "Education",
    service: "Website Development",
    year: "2026",
    duration: "5 Weeks",
    featured: true,
    image: "/images/showcase/websites/school-01.jpg",
    gallery: [
      "/images/showcase/websites/school-01.jpg",
    ],
    shortDescription:
      "Modern school website with admissions and student portal.",
    overview:
      "Educational platform connecting students, parents and teachers.",
    challenge:
      "School information was scattered across multiple platforms.",
    solution:
      "Created centralized admissions, announcements and student resources.",
    results: [
      "Admissions",
      "Student Portal",
      "Responsive",
      "CMS Ready",
    ],
    technologies: ["Next.js", "Firebase"],
  },

  {
    id: 5,
    slug: "skyline-hotel",
    title: "Skyline Hotel",
    client: "Skyline Hotel",
    category: "Website",
    industry: "Hospitality",
    service: "Website Development",
    year: "2026",
    duration: "6 Weeks",
    featured: true,
    image: "/images/showcase/websites/hotel-01.jpg",
    gallery: [
      "/images/showcase/websites/hotel-01.jpg",
    ],
    shortDescription:
      "Hotel booking website with online reservations and payment.",
    overview:
      "Premium hotel platform focused on increasing direct bookings.",
    challenge:
      "Heavy dependence on third-party booking platforms.",
    solution:
      "Developed a direct booking system integrated with online payments.",
    results: [
      "Room Booking",
      "Stripe Payments",
      "Responsive",
      "SEO Optimized",
    ],
    technologies: ["React", "Stripe"],
  },

  {
    id: 6,
    slug: "greenleaf-construction",
    title: "GreenLeaf Construction",
    client: "GreenLeaf Construction",
    category: "Website",
    industry: "Construction",
    service: "Website Development",
    year: "2026",
    duration: "4 Weeks",
    featured: false,
    image: "/images/showcase/websites/construction-01.jpg",
    gallery: [
      "/images/showcase/websites/construction-01.jpg",
    ],
    shortDescription:
      "Construction company website showcasing projects and services.",
    overview:
      "Corporate website highlighting completed construction projects.",
    challenge:
      "Outdated website with poor mobile experience.",
    solution:
      "Modern responsive redesign with project gallery.",
    results: [
      "Project Showcase",
      "Lead Generation",
      "Responsive",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
  },

  {
    id: 7,
    slug: "grace-community-church",
    title: "Grace Community Church",
    client: "Grace Community Church",
    category: "Website",
    industry: "Church",
    service: "Website Development",
    year: "2026",
    duration: "3 Weeks",
    featured: false,
    image: "/images/showcase/websites/church-01.jpg",
    gallery: [
      "/images/showcase/websites/church-01.jpg",
    ],
    shortDescription:
      "Church website with events, sermons and online giving.",
    overview:
      "Faith-centered digital platform for church members.",
    challenge:
      "Members had difficulty accessing announcements.",
    solution:
      "Created sermons archive, event calendar and donation page.",
    results: [
      "Event Calendar",
      "Sermons",
      "Online Giving",
    ],
    technologies: ["Next.js", "Supabase"],
  },

  {
    id: 8,
    slug: "lex-partners-law",
    title: "Lex & Partners Law",
    client: "Lex & Partners",
    category: "Website",
    industry: "Legal",
    service: "Website Development",
    year: "2026",
    duration: "5 Weeks",
    featured: false,
    image: "/images/showcase/websites/law-01.jpg",
    gallery: [
      "/images/showcase/websites/law-01.jpg",
    ],
    shortDescription:
      "Professional legal website with consultation booking.",
    overview:
      "Corporate legal website designed to generate qualified leads.",
    challenge:
      "No online consultation booking.",
    solution:
      "Added lawyer profiles and appointment scheduling.",
    results: [
      "Consultation Booking",
      "Lawyer Profiles",
      "SEO Ready",
    ],
    technologies: ["Next.js", "TypeScript"],
  },

  {
    id: 9,
    slug: "apex-accounting",
    title: "Apex Accounting",
    client: "Apex Accounting",
    category: "Website",
    industry: "Finance",
    service: "Website Development",
    year: "2026",
    duration: "4 Weeks",
    featured: false,
    image: "/images/showcase/websites/accounting-01.jpg",
    gallery: [
      "/images/showcase/websites/accounting-01.jpg",
    ],
    shortDescription:
      "Accounting firm website with secure document uploads.",
    overview:
      "Professional financial services website built for trust.",
    challenge:
      "Manual document collection from clients.",
    solution:
      "Implemented secure document submission and inquiry forms.",
    results: [
      "Secure Uploads",
      "Responsive",
      "Professional Branding",
    ],
    technologies: ["React", "Node.js"],
  },

  {
    id: 10,
    slug: "hope-foundation",
    title: "Hope Foundation",
    client: "Hope Foundation",
    category: "Website",
    industry: "NGO",
    service: "Website Development",
    year: "2026",
    duration: "4 Weeks",
    featured: false,
    image: "/images/showcase/websites/ngo-01.jpg",
    gallery: [
      "/images/showcase/websites/ngo-01.jpg",
    ],
    shortDescription:
      "Non-profit website with donations and volunteer management.",
    overview:
      "Digital platform helping the organization reach more supporters.",
    challenge:
      "Limited online engagement and donations.",
    solution:
      "Built donation pages, volunteer forms and impact stories.",
    results: [
      "Donation System",
      "Volunteer Forms",
      "Mobile Friendly",
    ],
    technologies: ["Next.js", "Supabase"],
  },
];