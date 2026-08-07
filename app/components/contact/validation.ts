import { ContactFormData } from "./types";

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export function validateContactForm(
  data: ContactFormData
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!data.service.trim()) {
    errors.service = "Please select a service.";
  }

  if (!data.message.trim()) {
    errors.message = "Please tell us about your project.";
  }

  return errors;
}