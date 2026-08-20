"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";

interface PublicTeamMember {
  id: string;
  slug?: string | null;
  name: string;
  role: string;
  bio: string;
  location: string | null;
  skills: string;
  expertise: string;
  platforms?: string;
  availability?: string;
  imageUrl: string | null;
}

interface TeamDirectoryResponse {
  members?: PublicTeamMember[];
}

function toList(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function isAllowedImagePath(value: string | null): value is string {
  if (value?.startsWith("/") && !value.startsWith("//")) return true;

  try {
    const url = new URL(value || "");
    return url.protocol === "https:" && url.hostname.endsWith(".public.blob.vercel-storage.com") && url.pathname.startsWith("/team-members/");
  } catch {
    return false;
  }
}

function TeamPortrait({ member }: { member: PublicTeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = isAllowedImagePath(member.imageUrl) ? member.imageUrl : null;

  if (imageUrl && !imageFailed) {
    return (
      <Image
        src={imageUrl}
        alt={`${member.name}, ${member.role} at GeekyAce Digital Hub`}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="object-cover transition duration-300 group-hover:scale-105"
        onError={() => setImageFailed(true)}
      />
    );
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-green-100 text-4xl font-black text-green-700"
      aria-label={member.name}
    >
      {getInitials(member.name) || "GA"}
    </div>
  );
}

function TeamRosterSkeleton() {
  return (
    <div className="mt-20 border-t border-slate-200 pt-16" aria-busy="true">
      <span className="sr-only">Loading team members</span>
      <div className="mx-auto h-9 max-w-md animate-pulse rounded-xl bg-slate-100" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-[430px] animate-pulse rounded-3xl bg-slate-100"
          />
        ))}
      </div>
    </div>
  );
}

export default function PublicTeamRoster() {
  const [members, setMembers] = useState<PublicTeamMember[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [selectedMember, setSelectedMember] =
    useState<PublicTeamMember | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTeam() {
      try {
        const response = await fetch("/api/team-members", {
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load the team directory.");
        }

        const data = (await response.json()) as TeamDirectoryResponse;

        if (!Array.isArray(data.members)) {
          throw new Error("The team directory returned an invalid response.");
        }

        setMembers(data.members);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.warn(
          "The public team directory is temporarily unavailable:",
          error instanceof Error ? error.message : error
        );
        setFailed(true);
      }
    }

    void loadTeam();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedMember]);

  if (members === null && !failed) {
    return <TeamRosterSkeleton />;
  }

  if (failed) {
    return (
      <div id="team" className="mt-20 scroll-mt-28 border-t border-slate-200 pt-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-2xl font-black text-slate-950">Our team profiles are being updated</h3>
          <p className="mt-3 leading-7 text-slate-600">
            Please check back shortly or contact GeekyAce Digital Hub to meet the right specialist for your project.
          </p>
        </div>
      </div>
    );
  }

  if (!members?.length) {
    return null;
  }

  return (
    <div id="team" className="mt-20 scroll-mt-28 border-t border-slate-200 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
          Meet Our People
        </span>

        <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          The Team Behind GeekyAce Digital Hub
        </h3>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Meet the professionals working together to turn your ideas into
          useful, reliable digital solutions.
        </p>
      </div>

      <div className={`mt-12 grid gap-7 ${members.length === 1 ? "mx-auto max-w-md" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {members.map((member) => {
          const specialties = [
            ...toList(member.expertise),
            ...toList(member.skills),
          ]
            .filter((item, index, list) => list.indexOf(item) === index)
            .slice(0, 4);

          return (
            <article
              key={member.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMember(member)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedMember(member);
                }
              }}
              aria-label={`View ${member.name}'s profile`}
              className="premium-card group h-full cursor-pointer overflow-hidden rounded-[2rem] text-left transition duration-500 hover:-translate-y-2 hover:border-green-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-slate-100">
                <TeamPortrait member={member} />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur-xl">GeekyAce team</span>
              </div>

              <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-black text-slate-950">
                        {member.name}
                      </h4>
                      <p className="mt-1 font-bold text-green-600">
                        {member.role}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {member.location ? (
                    <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <MapPin
                        className="h-4 w-4 text-green-600"
                        aria-hidden="true"
                      />
                      {member.location}
                    </p>
                  ) : null}

                  <p className="mt-5 line-clamp-3 leading-7 text-slate-600">
                    {member.bio}
                  </p>

                  {specialties.length > 0 ? (
                    <div
                      className="mt-6 flex flex-wrap gap-2"
                      aria-label={`${member.name}'s specialties`}
                    >
                      {specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-100"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <span className="mt-7 inline-flex items-center gap-2 font-black text-green-700">
                    View profile
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {member.slug ? <Link href={`/experts/${member.slug}`} onClick={(event) => event.stopPropagation()} className="mt-3 inline-flex items-center gap-2 text-sm font-black text-slate-600 underline decoration-green-300 underline-offset-4">Open full public profile</Link> : null}
              </div>
            </article>
          );
        })}
      </div>

      {selectedMember ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-xl"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-profile-title"
            className="premium-noise relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#07110c] text-white shadow-[0_40px_120px_-20px_rgba(0,0,0,.75)]"
          >
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close team member profile"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-white shadow-lg backdrop-blur-xl transition hover:border-green-400 hover:bg-green-500 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-50" />
            <div className="relative grid md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-80 overflow-hidden bg-slate-900 md:min-h-[650px]">
                <TeamPortrait member={selectedMember} />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07110c] to-transparent md:hidden" />
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-green-400">
                  Team Profile
                </span>

                <h3
                  id="team-profile-title"
                  className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl"
                >
                  {selectedMember.name}
                </h3>

                <p className="mt-2 text-xl font-bold text-green-400">
                  {selectedMember.role}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                  {selectedMember.location ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold">
                      <MapPin className="h-4 w-4 text-green-400" aria-hidden="true" />
                      {selectedMember.location}
                    </span>
                  ) : null}

                  {selectedMember.availability ? (
                    <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 font-semibold text-green-300">
                      {selectedMember.availability}
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 border-l-2 border-green-500 pl-5 leading-8 text-slate-300">
                  {selectedMember.bio}
                </p>

                {toList(selectedMember.expertise).length > 0 ? (
                  <div className="mt-8">
                    <h4 className="font-black text-white">Expertise</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {toList(selectedMember.expertise).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-sm font-semibold text-green-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {toList(selectedMember.skills).length > 0 ? (
                  <div className="mt-7">
                    <h4 className="font-black text-white">Skills</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {toList(selectedMember.skills).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {selectedMember.platforms &&
                toList(selectedMember.platforms).length > 0 ? (
                  <div className="mt-7">
                    <h4 className="font-black text-white">Platforms</h4>
                    <p className="mt-2 leading-7 text-slate-300">
                      {toList(selectedMember.platforms).join(" · ")}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
