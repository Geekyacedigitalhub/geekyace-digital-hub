"use client";

import { useState } from "react";
import {
  ContactFormData,
  initialFormData,
} from "./types";
import {
  validateContactForm,
  ValidationErrors,
} from "./validation";

export function useContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [errors, setErrors] =
    useState<ValidationErrors>({});

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [serverError, setServerError] =
    useState("");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const validation =
      validateContactForm(formData);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      setLoading(true);
      setServerError("");
      setSuccess(false);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Unable to send enquiry."
        );
      }

      setSuccess(true);
      setFormData(initialFormData);

    } catch {
      setServerError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    errors,
    loading,
    success,
    serverError,
    handleChange,
    handleSubmit,
  };
}