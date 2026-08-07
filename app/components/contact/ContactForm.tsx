"use client";

import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";

import { useContactForm } from "./useContactForm";
import {
  services,
  budgets,
  timelines,
  contactMethods,
} from "./formOptions";

export default function ContactForm() {
  const {
    formData,
    errors,
    loading,
    success,
    serverError,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <h3 className="mb-8 text-3xl font-bold text-slate-900">
        Tell Us About Your Project
      </h3>

      {success && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
          ✅ Your enquiry has been sent successfully. We'll contact you soon.
        </div>
      )}

      {serverError && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {serverError}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <Input
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service Required</option>

            {services.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </Select>

          {errors.service && (
            <p className="mt-2 text-sm text-red-600">
              {errors.service}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Estimated Budget</option>

            {budgets.map((budget) => (
              <option
                key={budget}
                value={budget}
              >
                {budget}
              </option>
            ))}
          </Select>

          <Select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="">Project Timeline</option>

            {timelines.map((timeline) => (
              <option
                key={timeline}
                value={timeline}
              >
                {timeline}
              </option>
            ))}
          </Select>
        </div>

        <Select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
        >
          <option value="">Preferred Contact Method</option>

          {contactMethods.map((method) => (
            <option
              key={method}
              value={method}
            >
              {method}
            </option>
          ))}
        </Select>

        <div>
          <Textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Project Enquiry"}
        </button>
      </form>
    </div>
  );
}