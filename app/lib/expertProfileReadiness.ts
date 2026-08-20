import type { Studio } from "@/app/data/studios";

export type ExpertProfileDraft = {
  slug?: string | null;
  name: string;
  role: string;
  headline?: string | null;
  studioId?: Studio["id"] | null;
  bio: string;
  imageUrl?: string | null;
  yearsExperience?: number | null;
  skills: string[];
  expertise: string[];
  platforms: string[];
  languages: string[];
  portfolioUrl?: string | null;
};

function isSafeProfileUrl(value?: string | null) {
  if (!value) return false;

  try {
    return new URL(value).protocol === "https:";
  } catch {
    return value.startsWith("/");
  }
}

export function getExpertProfileIssues(profile: ExpertProfileDraft) {
  const issues: string[] = [];

  if (!profile.slug?.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) issues.push("Add a valid public profile slug.");
  if (profile.name.trim().length < 2) issues.push("Add the expert’s full public name.");
  if (profile.role.trim().length < 3) issues.push("Add a clear specialist role.");
  if (!profile.headline || profile.headline.trim().length < 20) issues.push("Add a buyer-focused profile headline.");
  if (!profile.studioId) issues.push("Assign the expert to a primary studio.");
  if (profile.bio.trim().length < 80) issues.push("Expand the biography to explain experience and buyer value.");
  if (!isSafeProfileUrl(profile.imageUrl)) issues.push("Add a safe public profile image.");
  if (!profile.yearsExperience || profile.yearsExperience < 1) issues.push("Add the expert’s years of relevant experience.");
  if (profile.skills.length < 3) issues.push("Add at least three specific skills.");
  if (profile.expertise.length < 2) issues.push("Add at least two areas of expertise.");
  if (profile.platforms.length < 1) issues.push("Add at least one delivery platform or tool.");
  if (profile.languages.length < 1) issues.push("Add at least one working language.");
  if (profile.portfolioUrl && !isSafeProfileUrl(profile.portfolioUrl)) issues.push("Use an HTTPS portfolio link.");

  return issues;
}

export function getExpertProfileReadiness(profile: ExpertProfileDraft) {
  const issues = getExpertProfileIssues(profile);
  const totalChecks = 12;
  const passedChecks = Math.max(0, totalChecks - issues.length);

  return {
    ready: issues.length === 0,
    score: Math.round((passedChecks / totalChecks) * 100),
    issues,
  };
}
