import type { Metadata } from "next";
import ClientPortalDemo from "@/app/components/portal/ClientPortalDemo";

export const metadata: Metadata = {
  title: "Client Workspace Preview",
  description: "Preview the GeekyAce client workspace for milestones, files, updates, approvals, and project feedback.",
  robots: { index: false, follow: false },
};

export default function ClientPortalPage() {
  return <main><ClientPortalDemo /></main>;
}
