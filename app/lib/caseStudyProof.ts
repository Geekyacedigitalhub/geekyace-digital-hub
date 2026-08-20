export type CaseStudyProofStatus = "CONCEPT" | "VERIFIED" | "CONFIDENTIAL";

export type CaseStudyProofRecord = {
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  heroImageUrl?: string | null;
  proofStatus: CaseStudyProofStatus;
  proofUrl?: string | null;
  clientPermission: boolean;
  clientDisplayName?: string | null;
};

function isSafePublicUrl(value?: string | null) {
  if (!value) return false;

  try {
    return new URL(value).protocol === "https:";
  } catch {
    return value.startsWith("/");
  }
}

export function getCaseStudyProofIssues(record: CaseStudyProofRecord) {
  const issues: string[] = [];

  if (record.title.trim().length < 4) issues.push("Add a clear project title.");
  if (record.summary.trim().length < 40) issues.push("Write a useful project summary.");
  if (record.challenge.trim().length < 40) issues.push("Explain the buyer or business challenge.");
  if (record.approach.trim().length < 40) issues.push("Explain the work and decision process.");
  if (record.outcome.trim().length < 30) issues.push("Describe the outcome without unsupported claims.");
  if (!isSafePublicUrl(record.heroImageUrl)) issues.push("Add a safe public project image.");

  if (record.proofStatus === "VERIFIED") {
    if (!record.clientPermission) issues.push("Record the client’s publication permission.");
    if (!isSafePublicUrl(record.proofUrl)) issues.push("Add an HTTPS proof source for verified work.");
  }

  if (record.proofStatus === "CONFIDENTIAL" && record.clientDisplayName) {
    issues.push("Remove the public client name from confidential work.");
  }

  return issues;
}

export function canPublishCaseStudy(record: CaseStudyProofRecord) {
  return getCaseStudyProofIssues(record).length === 0;
}

export function getCaseStudyProofLabel(status: CaseStudyProofStatus) {
  if (status === "VERIFIED") return "Verified client work";
  if (status === "CONFIDENTIAL") return "Confidential engagement";
  return "Capability concept";
}
