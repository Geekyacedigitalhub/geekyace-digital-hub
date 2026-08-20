export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  message: string;
  source: string;
  serviceSlug: string;
  studioId: string;
  consent: boolean;
  website: string;
}

export const initialFormData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  contactMethod: "",
  message: "",
  source: "CONTACT",
  serviceSlug: "",
  studioId: "",
  consent: false,
  website: "",
};
