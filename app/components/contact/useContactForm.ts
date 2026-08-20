"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brief = params.get("brief");
    const service = params.get("service");
    const studio = params.get("studio");
    const intent = params.get("intent");
    const platform = params.get("platform");
    const channel = params.get("channel");

    if (!brief && !service && !studio && !intent && !platform && !channel) return;

    const frame = window.requestAnimationFrame(() => {
      setFormData((previous) => ({
        ...previous,
        service: service || "Multiple Services",
        serviceSlug: service || previous.serviceSlug,
        studioId: studio || previous.studioId,
        source: brief ? "ACEMATCH" : platform ? "MARKETPLACE" : channel ? channel.toUpperCase() : "CONTACT",
        message: brief || [
          studio ? `I would like to discuss the ${studio} studio.` : "",
          intent === "consultation" ? "I would like to request a project-fit consultation." : "",
          platform ? `I would like to work through ${platform}.` : "",
          channel ? `I would like to connect through ${channel}.` : "",
        ].filter(Boolean).join("\n"),
      }));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    const nextValue = event.target instanceof HTMLInputElement && event.target.type === "checkbox" ? event.target.checked : value;

    setFormData((previous) => ({
      ...previous,
      [name]: nextValue,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setSuccess(false);
    setServerError("");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSuccess(false);
    setServerError("");

    const validation =
      validateContactForm(formData);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to send your enquiry. Please try again."
        );
      }

      setSuccess(true);
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
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
