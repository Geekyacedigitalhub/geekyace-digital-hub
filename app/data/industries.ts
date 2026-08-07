export interface Industry {
  id: number;
  slug: string;
  name: string;
  icon: string;
  description: string;
  heroImage: string;
  services: string[];
  challenges: string[];
  solutions: string[];
  featured: boolean;
}

export const industries: Industry[] = [
  {
    id: 1,
    slug: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    description:
      "Helping hospitals, clinics and healthcare providers improve patient experience through modern digital solutions.",
    heroImage: "/images/industries/healthcare.jpg",
    services: [
      "Website Development",
      "Mobile App Development",
      "AI Solutions",
      "Business Automation",
      "Graphic Design",
      "Video Editing",
    ],
    challenges: [
      "Appointment Scheduling",
      "Patient Records",
      "Communication",
      "Online Visibility",
    ],
    solutions: [
      "Hospital Website",
      "Patient Portal",
      "Appointment Booking",
      "Medical Dashboard",
      "AI Reception Assistant",
    ],
    featured: true,
  },

  {
    id: 2,
    slug: "education",
    name: "Education",
    icon: "🎓",
    description:
      "Digital platforms for schools, universities and training centres.",
    heroImage: "/images/industries/education.jpg",
    services: [
      "Website Development",
      "Mobile App Development",
      "Business Automation",
      "Brand Identity",
      "Graphic Design",
    ],
    challenges: [
      "Student Management",
      "Admissions",
      "Communication",
      "Online Learning",
    ],
    solutions: [
      "School Website",
      "Student Portal",
      "Attendance System",
      "Result Checker",
      "School Mobile App",
    ],
    featured: true,
  },

  {
    id: 3,
    slug: "restaurant",
    name: "Restaurant",
    icon: "🍽️",
    description:
      "Helping restaurants increase sales with modern ordering systems and digital marketing.",
    heroImage: "/images/industries/restaurant.jpg",
    services: [
      "Website Development",
      "Mobile App Development",
      "Graphic Design",
      "Brand Identity",
      "Video Editing",
    ],
    challenges: [
      "Online Ordering",
      "Reservations",
      "Customer Engagement",
    ],
    solutions: [
      "Restaurant Website",
      "QR Menu",
      "Online Ordering",
      "Delivery App",
      "Restaurant Branding",
    ],
    featured: true,
  },

  {
    id: 4,
    slug: "real-estate",
    name: "Real Estate",
    icon: "🏢",
    description:
      "Modern websites and business tools for property companies and realtors.",
    heroImage: "/images/industries/real-estate.jpg",
    services: [
      "Website Development",
      "Graphic Design",
      "Business Automation",
      "Video Editing",
    ],
    challenges: [
      "Property Listings",
      "Lead Generation",
      "Marketing",
    ],
    solutions: [
      "Property Website",
      "Property Dashboard",
      "Virtual Tours",
      "Promotional Videos",
    ],
    featured: true,
  },

  {
    id: 5,
    slug: "hospitality",
    name: "Hospitality",
    icon: "🏨",
    description:
      "Digital experiences for hotels, resorts and travel businesses.",
    heroImage: "/images/industries/hospitality.jpg",
    services: [
      "Website Development",
      "Mobile App Development",
      "Brand Identity",
      "Video Editing",
    ],
    challenges: [
      "Bookings",
      "Guest Experience",
      "Marketing",
    ],
    solutions: [
      "Hotel Website",
      "Booking Engine",
      "Hotel Branding",
      "Promotional Videos",
    ],
    featured: true,
  },

  {
    id: 6,
    slug: "church",
    name: "Church",
    icon: "⛪",
    description:
      "Helping ministries reach more people through digital platforms.",
    heroImage: "/images/industries/church.jpg",
    services: [
      "Website Development",
      "Graphic Design",
      "Video Editing",
      "Mobile App Development",
    ],
    challenges: [
      "Member Engagement",
      "Online Giving",
      "Live Streaming",
    ],
    solutions: [
      "Church Website",
      "Church Mobile App",
      "Donation Platform",
      "Media Library",
    ],
    featured: true,
  },

  {
    id: 7,
    slug: "finance",
    name: "Finance",
    icon: "💳",
    description:
      "Secure and scalable digital platforms for financial businesses.",
    heroImage: "/images/industries/finance.jpg",
    services: [
      "Website Development",
      "AI Solutions",
      "Business Automation",
    ],
    challenges: [
      "Security",
      "Automation",
      "Customer Experience",
    ],
    solutions: [
      "Banking Dashboard",
      "Customer Portal",
      "AI Assistant",
      "Financial Reports",
    ],
    featured: false,
  },

  {
    id: 8,
    slug: "ngo",
    name: "NGO",
    icon: "🌍",
    description:
      "Helping non-profit organisations reach donors and communities effectively.",
    heroImage: "/images/industries/ngo.jpg",
    services: [
      "Website Development",
      "Brand Identity",
      "Graphic Design",
      "Video Editing",
    ],
    challenges: [
      "Fundraising",
      "Volunteer Management",
      "Awareness",
    ],
    solutions: [
      "NGO Website",
      "Donation System",
      "Campaign Materials",
      "Impact Reports",
    ],
    featured: false,
  },
];