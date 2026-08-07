import { Project } from "@/app/types/project";

export const mobile: Project[] = [
  {
    id: 101,
    slug: "swiftbite-food-delivery",
    title: "SwiftBite Food Delivery",
    client: "SwiftBite",
    category: "Mobile App",
    industry: "Restaurant",
    service: "Mobile App Development",
    year: "2026",
    duration: "8 Weeks",
    featured: true,
    image: "/images/showcase/mobile/food-delivery-01.jpg",
    gallery: [
      "/images/showcase/mobile/food-delivery-01.jpg",
      "/images/showcase/mobile/food-delivery-02.jpg",
      "/images/showcase/mobile/food-delivery-03.jpg",
    ],
    shortDescription:
      "Food delivery application with live order tracking and online payments.",
    overview:
      "Cross-platform mobile application designed to simplify ordering food from local restaurants.",
    challenge:
      "Customers experienced slow ordering through phone calls and messaging apps.",
    solution:
      "Built a modern mobile application with real-time order tracking, secure checkout and push notifications.",
    results: [
      "Live Order Tracking",
      "Push Notifications",
      "Online Payments",
      "Cross Platform",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Stripe",
      "Google Maps",
    ],
  },

  {
    id: 102,
    slug: "skyline-hotel-booking-app",
    title: "Skyline Hotel Booking",
    client: "Skyline Hotel",
    category: "Mobile App",
    industry: "Hospitality",
    service: "Mobile App Development",
    year: "2026",
    duration: "7 Weeks",
    featured: true,
    image: "/images/showcase/mobile/hotel-app-01.jpg",
    gallery: [
      "/images/showcase/mobile/hotel-app-01.jpg",
      "/images/showcase/mobile/hotel-app-02.jpg",
    ],
    shortDescription:
      "Hotel reservation app with digital check-in and booking management.",
    overview:
      "Mobile booking platform helping guests reserve rooms anytime.",
    challenge:
      "Guests depended on third-party booking platforms.",
    solution:
      "Developed a direct booking mobile application with payment integration.",
    results: [
      "Room Booking",
      "Digital Check-in",
      "Booking History",
      "Secure Payments",
    ],
    technologies: [
      "Flutter",
      "Supabase",
      "Stripe",
    ],
  },

  {
    id: 103,
    slug: "grace-church-mobile",
    title: "Grace Church App",
    client: "Grace Community Church",
    category: "Mobile App",
    industry: "Church",
    service: "Mobile App Development",
    year: "2026",
    duration: "6 Weeks",
    featured: false,
    image: "/images/showcase/mobile/church-app-01.jpg",
    gallery: [
      "/images/showcase/mobile/church-app-01.jpg",
    ],
    shortDescription:
      "Church application with sermons, events and online giving.",
    overview:
      "Digital platform helping church members stay connected.",
    challenge:
      "Members missed announcements and event updates.",
    solution:
      "Built an app with sermon library, notifications and event calendar.",
    results: [
      "Event Calendar",
      "Online Giving",
      "Push Notifications",
    ],
    technologies: [
      "Flutter",
      "Firebase",
    ],
  },

  {
    id: 104,
    slug: "bright-future-student-app",
    title: "Bright Future Student",
    client: "Bright Future Academy",
    category: "Mobile App",
    industry: "Education",
    service: "Mobile App Development",
    year: "2026",
    duration: "8 Weeks",
    featured: false,
    image: "/images/showcase/mobile/school-app-01.jpg",
    gallery: [
      "/images/showcase/mobile/school-app-01.jpg",
    ],
    shortDescription:
      "Student companion app for schedules, grades and announcements.",
    overview:
      "Educational mobile application connecting students with their school.",
    challenge:
      "Students relied on multiple communication channels.",
    solution:
      "Unified schedules, grades, assignments and announcements in one app.",
    results: [
      "Student Dashboard",
      "Grades",
      "Schedules",
      "Notifications",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Cloud Messaging",
    ],
  },

  {
    id: 105,
    slug: "fitlife-tracker",
    title: "FitLife Tracker",
    client: "FitLife",
    category: "Mobile App",
    industry: "Health & Fitness",
    service: "Mobile App Development",
    year: "2026",
    duration: "9 Weeks",
    featured: true,
    image: "/images/showcase/mobile/fitness-app-01.jpg",
    gallery: [
      "/images/showcase/mobile/fitness-app-01.jpg",
      "/images/showcase/mobile/fitness-app-02.jpg",
    ],
    shortDescription:
      "Fitness tracking application with workout plans and progress analytics.",
    overview:
      "Health-focused application encouraging users to achieve their fitness goals.",
    challenge:
      "Users struggled to consistently track workouts and progress.",
    solution:
      "Created personalized workout plans, analytics dashboards and reminders.",
    results: [
      "Workout Tracking",
      "Progress Analytics",
      "Goal Management",
      "Health Dashboard",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "HealthKit",
      "Google Fit",
    ],
  },
];