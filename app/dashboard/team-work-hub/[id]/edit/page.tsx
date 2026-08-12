"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ImagePlus,
  Save,
  User,
  X,
} from "lucide-react";

import Container from "@/app/components/ui/Container";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string | null;
  availability: string;
  skills: string;
  expertise: string;
  platforms: string;
  imageUrl: string | null;
}

export default function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [memberId, setMemberId] = useState("");

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const [availability, setAvailability] = useState<
    "Available" | "Busy" | "Unavailable"
  >("Available");

  const [skills, setSkills] = useState("");
  const [expertise, setExpertise] = useState("");
  const [platforms, setPlatforms] = useState("");

  const [existingImageUrl, setExistingImageUrl] =
    useState<string | null>(null);

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [removeExistingImage, setRemoveExistingImage] =
    useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /*
   * Get the team member ID from the dynamic route.
   */
  useEffect(() => {
    async function getParams() {
      try {
        const resolvedParams = await params;
        setMemberId(resolvedParams.id);
      } catch (error) {
        console.error("Unable to resolve route params:", error);
        setError("Unable to determine team member ID.");
        setLoading(false);
      }
    }

    getParams();
  }, [params]);

  /*
   * Load existing team member.
   */
  useEffect(() => {
    if (!memberId) {
      return;
    }

    async function loadMember() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/team-members/${memberId}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error || "Unable to load team member."
          );
        }

        const member: TeamMember = data.member;

        setName(member.name || "");
        setRole(member.role || "");
        setBio(member.bio || "");
        setLocation(member.location || "");

        setAvailability(
          member.availability === "Busy" ||
            member.availability === "Unavailable"
            ? member.availability
            : "Available"
        );

        setSkills(member.skills || "");
        setExpertise(member.expertise || "");
        setPlatforms(member.platforms || "");

        setExistingImageUrl(member.imageUrl || null);
      } catch (error) {
        console.error("Load team member error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load team member."
        );
      } finally {
        setLoading(false);
      }
    }

    loadMember();
  }, [memberId]);

  /*
   * Create local preview for newly selected image.
   */
  useEffect(() => {
    if (!image) {
      setImagePreview("");
      return;
    }

    const previewUrl = URL.createObjectURL(image);

    setImagePreview(previewUrl);

    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [image]);

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setError("");
    setSuccess("");

    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
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
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      setError(
        "Profile image must be 5MB or smaller."
      );

      event.target.value = "";
      return;
    }

    setRemoveExistingImage(false);
    setImage(selectedFile);
  }

  function removeSelectedImage() {
    setImage(null);

    const imageInput = document.getElementById(
      "profile-image"
    ) as HTMLInputElement | null;

    if (imageInput) {
      imageInput.value = "";
    }
  }

  function removeExistingProfileImage() {
    setRemoveExistingImage(true);
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

    if (!memberId) {
      setError("Team member ID is missing.");
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();

      formData.append("name", name.trim());
      formData.append("role", role.trim());
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

      formData.append(
        "removeImage",
        removeExistingImage ? "true" : "false"
      );

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(
        `/api/team-members/${memberId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to update team member."
        );
      }

      setSuccess(
        "Team member updated successfully!"
      );

      setTimeout(() => {
        window.location.href = `/dashboard/team-work-hub/${memberId}`;
      }, 700);
    } catch (error) {
      console.error(
        "Update team member error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while updating."
      );
    } finally {
      setSaving(false);
    }
  }

  /*
   * Loading state
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-green-600" />

              <h1 className="mt-6 text-2xl font-bold text-slate-900">
                Loading team member...
              </h1>

              <p className="mt-2 text-slate-500">
                Please wait while we load the profile.
              </p>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  /*
   * Error state when member could not be loaded.
   */
  if (error && !name) {
    return (
      <main className="min-h-screen bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/dashboard/team-work-hub"
              className="inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
            >
              <ArrowLeft size={18} />
              Back to Team Work Hub
            </Link>

            <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 px-8 py-16 text-center">
              <h1 className="text-2xl font-bold text-red-700">
                Unable to load team member
              </h1>

              <p className="mt-4 text-red-600">
                {error}
              </p>

              <Link
                href="/dashboard/team-work-hub"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <ArrowLeft size={18} />
                Back to Team Work Hub
              </Link>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">

          {/* Back */}
          <Link
            href={`/dashboard/team-work-hub/${memberId}`}
            className="inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
          >
            <ArrowLeft size={18} />
            Back to Profile
          </Link>

          {/* Header */}
          <div className="mt-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              <User size={16} />
              Team Management
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Edit Team Member
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Update this team member&apos;s profile,
              skills, expertise, platforms, or profile
              image.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            onKeyDown={(event) => {
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
                Replace or remove the existing profile
                image. JPG, PNG, and WEBP are supported.
                Maximum size: 5MB.
              </p>

              <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">

                {/* Image Preview */}
                <div className="relative">

                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="New profile preview"
                        className="h-32 w-32 rounded-2xl object-cover ring-4 ring-green-100"
                      />

                      <button
                        type="button"
                        onClick={removeSelectedImage}
                        className="absolute -right-3 -top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition hover:bg-red-700"
                        aria-label="Remove selected image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : existingImageUrl &&
                    !removeExistingImage ? (
                    <div className="relative">
                      <img
                        src={existingImageUrl}
                        alt={`${name} profile`}
                        className="h-32 w-32 rounded-2xl object-cover ring-4 ring-green-100"
                      />

                      <button
                        type="button"
                        onClick={
                          removeExistingProfileImage
                        }
                        className="absolute -right-3 -top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition hover:bg-red-700"
                        aria-label="Remove existing image"
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
                      ? "Change Image"
                      : "Upload New Image"}
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
                    Uploading a new image will replace the
                    current one.
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
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
                Separate multiple expertise areas with
                commas.
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

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                {success}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:justify-end">

              <Link
                href={`/dashboard/team-work-hub/${memberId}`}
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
                  ? "Saving Changes..."
                  : "Save Changes"}
              </button>

            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}