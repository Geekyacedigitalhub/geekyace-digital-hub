import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  User,
  Briefcase,
  Code2,
  Layers3,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import { prisma } from "@/app/lib/prisma";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

function convertToArray(value: string | null | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item: string) => item.trim())
    .filter(Boolean);
}

export default async function TeamMemberProfilePage({
  params,
}: PageProps) {
  const { id } = await params;

  const member = await prisma.teamMember.findUnique({
    where: {
      id,
    },
  });

  if (!member) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Container>
          <div className="py-20">
            <h1 className="mt-6 text-3xl font-bold text-slate-900">
              Team Member Not Found
            </h1>

            <p className="mt-4 text-slate-600">
              The team member you are looking for does not exist
              or may have been removed.
            </p>

            <Link
              href="/dashboard/team-work-hub"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <ArrowLeft size={18} />
              Back to Team Work Hub
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  /*
   * Prisma is currently not exposing imageUrl in the TypeScript
   * type even though the database contains the field.
   *
   * This keeps the page working while allowing imageUrl to be used.
   */
  const memberWithImage = member as typeof member & {
    imageUrl: string | null;
  };

  const skills = convertToArray(member.skills);
  const expertise = convertToArray(member.expertise);
  const platforms = convertToArray(member.platforms);

  const initials = member.name
    .split(" ")
    .map((name: string) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        <div className="py-10 md:py-14">

          {/* Back */}
          <Link
            href="/dashboard/team-work-hub"
            className="inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
          >
            <ArrowLeft size={18} />
            Back to Team Work Hub
          </Link>

          {/* Profile Card */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Profile Header */}
            <div className="bg-gradient-to-r from-green-50 to-white px-8 py-12 md:px-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">

                {/* Profile Image */}
                {memberWithImage.imageUrl ? (
                  <img
                    src={memberWithImage.imageUrl}
                    alt={`${member.name} profile`}
                    className="h-28 w-28 shrink-0 rounded-3xl object-cover ring-4 ring-white shadow-md"
                  />
                ) : (
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-green-100 text-3xl font-extrabold text-green-700">
                    {initials}
                  </div>
                )}

                {/* Information */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
                      {member.name}
                    </h1>

                    <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                      {member.availability}
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-semibold text-green-600">
                    {member.role}
                  </p>

                  {member.location && (
                    <div className="mt-3 flex items-center gap-2 text-slate-500">
                      <MapPin size={17} />
                      {member.location}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="grid gap-10 p-8 md:grid-cols-3 md:p-12">

              {/* Main Content */}
              <div className="md:col-span-2">

                {/* About */}
                <section>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <User size={20} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      About
                    </h2>
                  </div>

                  <p className="mt-5 leading-8 text-slate-600">
                    {member.bio}
                  </p>
                </section>

                {/* Expertise */}
                <section className="mt-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <Briefcase size={20} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      Areas of Expertise
                    </h2>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {expertise.length > 0 ? (
                      expertise.map((item: string) => (
                        <span
                          key={item}
                          className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
                        >
                          {item}
                        </span>
                      ))
                    ) : (
                      <p className="text-slate-500">
                        No expertise listed.
                      </p>
                    )}
                  </div>
                </section>

                {/* Skills */}
                <section className="mt-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <Code2 size={20} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      Skills
                    </h2>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {skills.length > 0 ? (
                      skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <p className="text-slate-500">
                        No skills listed.
                      </p>
                    )}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside>

                {/* Platforms */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <Layers3 size={20} />
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                      Platforms
                    </h2>
                  </div>

                  <div className="mt-5 space-y-3">
                    {platforms.length > 0 ? (
                      platforms.map((platform: string) => (
                        <div
                          key={platform}
                          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                        >
                          {platform}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500">
                        No platforms listed.
                      </p>
                    )}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    Availability
                  </p>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {member.availability}
                  </p>
                </div>

              </aside>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}