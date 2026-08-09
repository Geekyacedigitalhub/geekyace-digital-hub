"use client";

import {
  CheckCircle2,
  Send,
} from "lucide-react";

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
    <div>
      {/* Form Header */}
      <div className="mb-8">
        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Project Enquiry
        </span>

        <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
          Tell Us About Your Project
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Share a few details about your project and we'll get back to you
          with the next steps.
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="font-semibold">
              Enquiry sent successfully!
            </p>

            <p className="mt-1 text-sm leading-6">
              Thanks for reaching out. We'll contact you soon.
            </p>
          </div>
        </div>
      )}

      {/* Server Error */}
      {serverError && (
        <div
          role="alert"
          className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
        >
          {serverError}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Name + Company */}
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

          <div>
            <Input
              name="company"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email + Phone */}
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

        {/* Service */}
        <div>
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">
              Select Service Required
            </option>

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

        {/* Budget + Timeline */}
        <div className="grid gap-6 md:grid-cols-2">
          <Select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">
              Estimated Budget
            </option>

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
            <option value="">
              Project Timeline
            </option>

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

        {/* Preferred Contact Method */}
        <Select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
        >
          <option value="">
            Preferred Contact Method
          </option>

          {contactMethods.map((method) => (
            <option
              key={method}
              value={method}
            >
              {method}
            </option>
          ))}
        </Select>

        {/* Project Message */}
        <div>
          <Textarea
            name="message"
            placeholder="Tell us about your project, goals, features you need, or any other important details..."
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
        >
          {loading ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Sending Enquiry...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Project Enquiry
            </>
          )}
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Your project information will only be used to respond to your
          enquiry.
        </p>
      </form>
    </div>
  );
}