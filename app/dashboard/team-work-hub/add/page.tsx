"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ImagePlus,
  Save,
  UserPlus,
  X,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import { studios } from "@/app/data/studios";

export default function AddTeamMemberPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [slug, setSlug] = useState("");
  const [headline, setHeadline] = useState("");
  const [studioId, setStudioId] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [languages, setLanguages] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const [availability, setAvailability] = useState<
    "Available" | "Busy" | "Unavailable"
  >("Available");

  const [skills, setSkills] = useState("");
  const [expertise, setExpertise] = useState("");
  const [platforms, setPlatforms] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  /*
   * Create and clean up the local image preview.
   */
  useEffect(() => {
    let previewUrl = "";
    const frame = window.requestAnimationFrame(() => {
      if (!image) {
        setImagePreview("");
        return;
      }

      previewUrl = URL.createObjectURL(image);
      setImagePreview(previewUrl);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [image]);

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setError("");

    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setImage(null);
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError(
        "Please select a JPG, PNG, or WEBP image."
      );

      event.target.value = "";
      setImage(null);
      return;
    }

    const maxSize = 4 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      setError("Profile image must be 4MB or smaller.");

      event.target.value = "";
      setImage(null);
      return;
    }

    setImage(selectedFile);
  }

  function removeImage() {
    setImage(null);

    const imageInput = document.getElementById(
      "profile-image"
    ) as HTMLInputElement | null;

    if (imageInput) {
      imageInput.value = "";
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSaving(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("name", name.trim());
      formData.append("role", role.trim());
      formData.append("slug", slug.trim().toLowerCase());
      formData.append("headline", headline.trim());
      formData.append("studioId", studioId);
      formData.append("yearsExperience", yearsExperience);
      formData.append("languages", languages.trim());
      formData.append("portfolioUrl", portfolioUrl.trim());
      formData.append("featured", String(featured));
      formData.append("published", String(published));
      formData.append("bio", bio.trim());
      formData.append("location", location.trim());
      formData.append("availability", availability);

      formData.append(
        "skills",
        skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .join(", ")
      );

      formData.append(
        "expertise",
        expertise
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .join(", ")
      );

      formData.append(
        "platforms",
        platforms
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .join(", ")
      );

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("/api/team-members", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to save team member."
        );
      }

      alert("Team member added successfully!");

      setName("");
      setRole("");
      setSlug("");
      setHeadline("");
      setStudioId("");
      setYearsExperience("");
      setLanguages("");
      setPortfolioUrl("");
      setFeatured(false);
      setPublished(true);
      setBio("");
      setLocation("");
      setAvailability("Available");
      setSkills("");
      setExpertise("");
      setPlatforms("");
      setImage(null);

      const imageInput = document.getElementById(
        "profile-image"
      ) as HTMLInputElement | null;

      if (imageInput) {
        imageInput.value = "";
      }
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">

          {/* Back Button */}
          <Link
            href="/dashboard/team-work-hub"
            className="inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
          >
            <ArrowLeft size={18} />
            Back to Team Work Hub
          </Link>

          {/* Page Heading */}
          <div className="mt-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              <UserPlus size={16} />
              Team Management
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Add Team Member
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Add a team member&apos;s information, profile
              image, skills, expertise, and platforms to your
              Geeky Ace Team Work Hub.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            onKeyDown={(event) => {
              /*
               * Prevent accidental form submission when pressing
               * Enter in normal input/select fields.
               *
               * Textareas are allowed to use Enter normally.
               */
              if (
                event.key === "Enter" &&
                event.target instanceof HTMLElement &&
                event.target.tagName !== "TEXTAREA"
              ) {
                event.preventDefault();
              }
            }}
            className="mt-10 space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
          >

            {/* Profile Image */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Profile Image
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Upload a professional profile photo. JPG, PNG,
                and WEBP are supported. Maximum size: 4MB.
              </p>

              <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">

                {/* Preview */}
                <div className="relative">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Profile preview"
                        className="h-32 w-32 rounded-2xl object-cover ring-4 ring-green-100"
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute -right-3 -top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition hover:bg-red-700"
                        aria-label="Remove profile image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-green-200 bg-green-50">
                      <ImagePlus
                        size={36}
                        className="text-green-600"
                      />
                    </div>
                  )}
                </div>

                {/* Upload */}
                <div>
                  <label
                    htmlFor="profile-image"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 hover:shadow-lg"
                  >
                    <ImagePlus size={18} />

                    {image
                      ? "Change Profile Image"
                      : "Upload Profile Image"}
                  </label>

                  <input
                    id="profile-image"
                    name="image"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <p className="mt-3 text-sm text-slate-500">
                    Recommended: clear professional headshot.
                  </p>
                </div>
              </div>
            </section>

            {/* Basic Information */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Basic Information
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="e.g. John Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Role
                  </label>

                  <input
                    id="role"
                    type="text"
                    required
                    value={role}
                    onChange={(event) =>
                      setRole(event.target.value)
                    }
                    placeholder="e.g. Full-Stack Developer"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    placeholder="e.g. Remote"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Availability */}
                <div>
                  <label
                    htmlFor="availability"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Availability
                  </label>

                  <select
                    id="availability"
                    value={availability}
                    onChange={(event) =>
                      setAvailability(
                        event.target.value as
                          | "Available"
                          | "Busy"
                          | "Unavailable"
                      )
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  >
                    <option value="Available">
                      Available
                    </option>

                    <option value="Busy">
                      Busy
                    </option>

                    <option value="Unavailable">
                      Unavailable
                    </option>
                  </select>
                </div>

              </div>
            </section>

            <section className="rounded-2xl border border-green-100 bg-green-50/50 p-6">
              <h2 className="text-2xl font-bold text-slate-900">Public Expert Profile</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">These fields power the richer buyer-facing expert profile and its readiness score.</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div><label htmlFor="slug" className="mb-2 block text-sm font-semibold text-slate-700">Public profile slug</label><input id="slug" value={slug} onChange={(event) => setSlug(event.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))} placeholder="john-doe" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20" /></div>
                <div><label htmlFor="studioId" className="mb-2 block text-sm font-semibold text-slate-700">Primary studio</label><select id="studioId" value={studioId} onChange={(event) => setStudioId(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-green-500"><option value="">Select studio</option>{studios.map((studio) => <option key={studio.id} value={studio.id}>{studio.name}</option>)}</select></div>
                <div className="md:col-span-2"><label htmlFor="headline" className="mb-2 block text-sm font-semibold text-slate-700">Buyer-focused headline</label><input id="headline" value={headline} onChange={(event) => setHeadline(event.target.value)} placeholder="What this expert helps buyers achieve" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20" /></div>
                <div><label htmlFor="yearsExperience" className="mb-2 block text-sm font-semibold text-slate-700">Years of relevant experience</label><input id="yearsExperience" type="number" min="1" max="60" value={yearsExperience} onChange={(event) => setYearsExperience(event.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500" /></div>
                <div><label htmlFor="languages" className="mb-2 block text-sm font-semibold text-slate-700">Working languages</label><input id="languages" value={languages} onChange={(event) => setLanguages(event.target.value)} placeholder="English, French" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500" /></div>
                <div className="md:col-span-2"><label htmlFor="portfolioUrl" className="mb-2 block text-sm font-semibold text-slate-700">Public portfolio URL</label><input id="portfolioUrl" type="url" value={portfolioUrl} onChange={(event) => setPortfolioUrl(event.target.value)} placeholder="https://..." className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-500" /></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-700"><label className="flex items-center gap-2"><input type="checkbox" checked={featured} onChange={(event) => setFeatured(event.target.checked)} className="h-4 w-4 accent-green-600" />Feature this expert</label><label className="flex items-center gap-2"><input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} className="h-4 w-4 accent-green-600" />Publish in the public directory</label></div>
            </section>

            {/* Bio */}
            <section>
              <label
                htmlFor="bio"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Professional Bio
              </label>

              <textarea
                id="bio"
                required
                rows={5}
                value={bio}
                onChange={(event) =>
                  setBio(event.target.value)
                }
                placeholder="Write a short professional description..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </section>

            {/* Skills */}
            <section>
              <label
                htmlFor="skills"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Skills
              </label>

              <input
                id="skills"
                type="text"
                required
                value={skills}
                onChange={(event) =>
                  setSkills(event.target.value)
                }
                placeholder="Next.js, React, TypeScript, Node.js"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />

              <p className="mt-2 text-sm text-slate-500">
                Separate multiple skills with commas.
              </p>
            </section>

            {/* Expertise */}
            <section>
              <label
                htmlFor="expertise"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Areas of Expertise
              </label>

              <input
                id="expertise"
                type="text"
                required
                value={expertise}
                onChange={(event) =>
                  setExpertise(event.target.value)
                }
                placeholder="Web Development, SaaS Development, AI"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />

              <p className="mt-2 text-sm text-slate-500">
                Separate multiple expertise areas with commas.
              </p>
            </section>

            {/* Platforms */}
            <section>
              <label
                htmlFor="platforms"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Platforms &amp; Technologies
              </label>

              <input
                id="platforms"
                type="text"
                value={platforms}
                onChange={(event) =>
                  setPlatforms(event.target.value)
                }
                placeholder="Vercel, Firebase, Supabase, AWS"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />

              <p className="mt-2 text-sm text-slate-500">
                Separate multiple platforms with commas.
              </p>
            </section>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:justify-end">

              <Link
                href="/dashboard/team-work-hub"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Save size={18} />

                {saving
                  ? "Saving..."
                  : "Save Team Member"}
              </button>

            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
