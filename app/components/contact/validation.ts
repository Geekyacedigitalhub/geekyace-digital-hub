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

  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const service = data.service.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!email) {
    errors.email = "Email address is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (phone.length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!service) {
    errors.service = "Please select a service.";
  }

  if (!message) {
    errors.message = "Please tell us about your project.";
  } else if (message.length < 10) {
    errors.message =
      "Please provide a little more information about your project.";
  }

  return errors;
}