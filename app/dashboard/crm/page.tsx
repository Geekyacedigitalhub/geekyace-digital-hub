import DashboardPageHeader from "@/app/components/dashboard/DashboardPageHeader";
import CrmPipeline from "@/app/components/dashboard/CrmPipeline";

export default function CrmPage() { return <main className="min-h-screen bg-slate-50"><DashboardPageHeader title="Growth CRM" subtitle="Pipeline, sources, and next actions" /><CrmPipeline /></main>; }
