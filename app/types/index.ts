import { ElementType } from "react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;

  icon: ElementType;

  heroImage: string;

  features: string[];

  technologies: string[];

  process: string[];
}

export interface Project {
  slug: string;
  icon: ElementType;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}