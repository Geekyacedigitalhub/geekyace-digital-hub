import { Project } from "@/app/types/project";

export const automation: Project[] = [
  {
    id: 301,
    slug: "smart-crm-platform",
    title: "Smart CRM Platform",
    client: "SalesConnect",
    category: "Business Automation",
    industry: "Sales",
    service: "Business Automation",
    year: "2026",
    duration: "10 Weeks",
    featured: true,
    image: "/images/showcase/automation/crm-01.jpg",
    gallery: [
      "/images/showcase/automation/crm-01.jpg",
      "/images/showcase/automation/crm-02.jpg",
    ],
    shortDescription:
      "Customer relationship management platform with sales pipeline automation.",
    overview:
      "Centralized CRM helping sales teams manage leads, customers and follow-ups.",
    challenge:
      "Customer information was scattered across spreadsheets.",
    solution:
      "Built a centralized CRM with automated workflows and reporting.",
    results: [
      "Lead Management",
      "Sales Pipeline",
      "Reporting Dashboard",
      "Workflow Automation",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
  },

  {
    id: 302,
    slug: "inventory-management-system",
    title: "Inventory Management System",
    client: "WarehousePro",
    category: "Business Automation",
    industry: "Retail",
    service: "Business Automation",
    year: "2026",
    duration: "9 Weeks",
    featured: true,
    image: "/images/showcase/automation/inventory-01.jpg",
    gallery: [
      "/images/showcase/automation/inventory-01.jpg",
    ],
    shortDescription:
      "Inventory platform with stock tracking and supplier management.",
    overview:
      "Automated inventory monitoring with alerts and purchase tracking.",
    challenge:
      "Manual inventory counts caused stock shortages.",
    solution:
      "Implemented real-time inventory tracking and reorder notifications.",
    results: [
      "Real-time Stock",
      "Supplier Management",
      "Inventory Reports",
      "Low Stock Alerts",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
    ],
  },

  {
    id: 303,
    slug: "payroll-management-system",
    title: "Payroll Management System",
    client: "PeopleFirst",
    category: "Business Automation",
    industry: "Human Resources",
    service: "Business Automation",
    year: "2026",
    duration: "8 Weeks",
    featured: false,
    image: "/images/showcase/automation/payroll-01.jpg",
    gallery: [
      "/images/showcase/automation/payroll-01.jpg",
    ],
    shortDescription:
      "Automated payroll processing and employee salary management.",
    overview:
      "Payroll software reducing manual calculations and reporting.",
    challenge:
      "Payroll processing required excessive manual work.",
    solution:
      "Developed automated salary computation and reporting.",
    results: [
      "Payroll Automation",
      "Tax Reports",
      "Employee Records",
    ],
    technologies: [
      "Next.js",
      "Supabase",
    ],
  },

  {
    id: 304,
    slug: "clinic-booking-platform",
    title: "Clinic Booking Platform",
    client: "HealthyCare",
    category: "Business Automation",
    industry: "Healthcare",
    service: "Business Automation",
    year: "2026",
    duration: "7 Weeks",
    featured: true,
    image: "/images/showcase/automation/booking-01.jpg",
    gallery: [
      "/images/showcase/automation/booking-01.jpg",
    ],
    shortDescription:
      "Appointment scheduling system with patient management.",
    overview:
      "Online booking platform streamlining patient appointments.",
    challenge:
      "Phone-based booking created scheduling conflicts.",
    solution:
      "Built an online appointment and scheduling platform.",
    results: [
      "Appointment Booking",
      "Calendar Integration",
      "Patient Dashboard",
    ],
    technologies: [
      "React",
      "Supabase",
    ],
  },

  {
    id: 305,
    slug: "finance-reporting-dashboard",
    title: "Finance Reporting Dashboard",
    client: "FinanceHub",
    category: "Business Automation",
    industry: "Finance",
    service: "Business Automation",
    year: "2026",
    duration: "8 Weeks",
    featured: false,
    image: "/images/showcase/automation/finance-01.jpg",
    gallery: [
      "/images/showcase/automation/finance-01.jpg",
    ],
    shortDescription:
      "Interactive financial reporting and business intelligence dashboard.",
    overview:
      "Dashboard providing executives with real-time financial insights.",
    challenge:
      "Financial reports were generated manually every month.",
    solution:
      "Created automated reporting with interactive charts and KPIs.",
    results: [
      "Financial Reports",
      "Interactive Charts",
      "KPI Dashboard",
    ],
    technologies: [
      "Next.js",
      "Chart.js",
      "PostgreSQL",
    ],
  },
];