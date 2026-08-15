"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Search,
  Users,
  UserPlus,
  MapPin,
  ArrowRight,
  Pencil,
  Trash2,
  Crown,
  BriefcaseBusiness,
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

function convertToArray(
  value: string | null | undefined
): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function TeamWorkHubPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [search, setSearch] = useState("");
  const [expertise, setExpertise] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
    async function checkAdminSession() {
      try {
        const response = await fetch("/api/admin/session", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          setIsAdmin(false);
          return;
        }

        const data = await response.json();

        setIsAdmin(
          data?.authenticated === true ||
            data?.isAdmin === true ||
            data?.success === true
        );
      } catch (error) {
        console.error("Check admin session error:", error);
        setIsAdmin(false);
      } finally {
        setCheckingAdmin(false);
      }
    }

    checkAdminSession();
  }, []);

  useEffect(() => {
    async function loadTeamMembers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/team-members", {
          method: "GET",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Unable to load team members."
          );
        }

        setTeamMembers(data.members || []);
      } catch (error) {
        console.error("Load team members error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load team members."
        );
      } finally {
        setLoading(false);
      }
    }

    loadTeamMembers();
  }, []);

  const filteredMembers = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    return teamMembers.filter((member) => {
      const skills = convertToArray(member.skills);
      const expertiseItems = convertToArray(member.expertise);
      const platforms = convertToArray(member.platforms);

      const matchesSearch =
        !searchTerm ||
        member.name.toLowerCase().includes(searchTerm) ||
        member.role.toLowerCase().includes(searchTerm) ||
        member.bio.toLowerCase().includes(searchTerm) ||
        skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm)
        ) ||
        expertiseItems.some((item) =>
          item.toLowerCase().includes(searchTerm)
        ) ||
        platforms.some((platform) =>
          platform.toLowerCase().includes(searchTerm)
        );

      const matchesExpertise =
        !expertise ||
        expertiseItems.includes(expertise);

      return matchesSearch && matchesExpertise;
    });
  }, [teamMembers, search, expertise]);

  const expertiseOptions = Array.from(
    new Set(
      teamMembers.flatMap((member) =>
        convertToArray(member.expertise)
      )
    )
  );

  async function removeTeamMember(member: TeamMember) {
    if (!isAdmin) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to remove ${member.name}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/team-members/${member.id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to remove team member."
        );
      }

      setTeamMembers((currentMembers) =>
        currentMembers.filter(
          (currentMember) =>
            currentMember.id !== member.id
        )
      );
    } catch (error) {
      console.error("Remove team member error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to remove team member."
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Back */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 font-semibold text-green-600 hover:text-green-700"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          {/* Header */}
          <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                Team Work Hub
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Your Team Workspace
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Find team members, explore their skills and
                expertise, and connect the right people with
                the right projects.
              </p>
            </div>

            {isAdmin && !checkingAdmin && (
              <Link
                href="/dashboard/team-work-hub/add"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <UserPlus size={19} />
                Add Team Member
              </Link>
            )}
          </div>

          {/* Founder Featured Profile */}
          <section className="mt-10 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-green-50 via-white to-slate-50 p-8 md:p-10">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-4 ring-white shadow-sm">
                    <Image
                      src="/images/opeyemi-ajose-founder.png"
                      alt="Opeyemi Ajose, Founder and CEO of GeekyAce Digital Hub"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-3xl font-extrabold text-slate-900">
                        Opeyemi Ajose
                      </h2>

                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                        <Crown size={13} />
                        Founder
                      </span>
                    </div>

                    <p className="mt-1 font-semibold text-green-600">
                      Founder & CEO — GeekyAce Digital Hub
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Founder, digital entrepreneur, developer &
                      technology enthusiast
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/about#founder"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700 transition hover:bg-green-100"
                  >
                    <BriefcaseBusiness size={17} />
                    Founder Profile
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 px-8 py-7 md:px-10">
              <p className="max-w-4xl leading-8 text-slate-600">
                Opeyemi Ajose is the Founder and CEO of GeekyAce
                Digital Hub, leading the agency&apos;s vision,
                technology, digital services, and continued growth.
                His focus is on turning ideas into professional,
                practical, and scalable digital solutions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-700">
                  Founder & CEO
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                  Digital Technology
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                  Digital Entrepreneurship
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                  Freelance Technology
                </span>
              </div>
            </div>
          </section>

          {/* Search */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative md:col-span-2">
                <Search
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search team members, skills, or expertise..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                />
              </div>

              <select
                value={expertise}
                onChange={(event) =>
                  setExpertise(event.target.value)
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              >
                <option value="">All Expertise</option>

                {expertiseOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Team Members
            </h2>

            <p className="mt-1 text-slate-500">
              {loading
                ? "Loading team members..."
                : `${filteredMembers.length} member${
                    filteredMembers.length !== 1
                      ? "s"
                      : ""
                  } found`}
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-green-600" />

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Loading team members...
              </h2>

              <p className="mt-2 text-slate-500">
                Please wait while we load your team.
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 px-8 py-16 text-center">
              <h2 className="text-2xl font-bold text-red-700">
                Unable to load team members
              </h2>

              <p className="mt-4 text-red-600">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading &&
            !error &&
            filteredMembers.length === 0 && (
              <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <Users size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  No team members found
                </h2>

                <p className="mt-4 text-slate-600">
                  {teamMembers.length === 0
                    ? "You haven't added any team members yet."
                    : "Try changing your search or expertise filter."}
                </p>

                {isAdmin && teamMembers.length === 0 && (
                  <Link
                    href="/dashboard/team-work-hub/add"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                  >
                    <UserPlus size={18} />
                    Add Your First Team Member
                  </Link>
                )}
              </div>
            )}

          {/* Team Members */}
          {!loading &&
            !error &&
            filteredMembers.length > 0 && (
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {filteredMembers.map((member) => {
                  const skills = convertToArray(member.skills);
                  const expertiseItems = convertToArray(
                    member.expertise
                  );
                  const platforms = convertToArray(
                    member.platforms
                  );

                  const initials = member.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (
                    <article
                      key={member.id}
                      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl"
                    >
                      {/* Profile Header */}
                      <div className="flex items-start gap-5">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={`${member.name} profile`}
                            className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-2 ring-green-100"
                          />
                        ) : (
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700">
                            {initials}
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-2xl font-bold text-slate-900">
                              {member.name}
                            </h3>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                              {member.availability}
                            </span>
                          </div>

                          <p className="mt-1 font-medium text-green-600">
                            {member.role}
                          </p>

                          {member.location && (
                            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                              <MapPin size={15} />
                              {member.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="mt-6 leading-8 text-slate-600">
                        {member.bio}
                      </p>

                      {/* Expertise */}
                      <div className="mt-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Expertise
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {expertiseItems.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mt-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Skills
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="mt-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Platforms
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {platforms.map((platform) => (
                            <span
                              key={platform}
                              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div
                        className={`mt-8 grid gap-3 border-t border-slate-100 pt-6 ${
                          isAdmin
                            ? "sm:grid-cols-3"
                            : "sm:grid-cols-1"
                        }`}
                      >
                        <Link
                          href={`/dashboard/team-work-hub/${member.id}`}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
                        >
                          View Profile
                          <ArrowRight size={17} />
                        </Link>

                        {isAdmin && !checkingAdmin && (
                          <>
                            <Link
                              href={`/dashboard/team-work-hub/${member.id}/edit`}
                              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
                            >
                              <Pencil size={17} />
                              Edit
                            </Link>

                            <button
                              type="button"
                              onClick={() =>
                                removeTeamMember(member)
                              }
                              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                            >
                              <Trash2 size={17} />
                              Remove
                            </button>
                          </>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
        </div>
      </Container>
    </main>
  );
}