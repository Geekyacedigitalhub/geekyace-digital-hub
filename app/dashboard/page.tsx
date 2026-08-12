"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Globe,
  LogOut,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const dashboardItems = [
  {
    title: "Team Work Hub",
    description:
      "Manage your team members, view their profiles, skills, expertise, and platforms.",
    href: "/dashboard/team-work-hub",
    icon: Users,
    action: "Open Team Work Hub",
  },
  {
    title: "GeekyAce AI",
    description:
      "Test and manage the AI assistant that helps website visitors find the right digital solution.",
    href: "/#ai",
    icon: Bot,
    action: "Open AI Assistant",
  },
  {
    title: "Website",
    description:
      "Return to the public GeekyAce Digital Hub website and view the live experience.",
    href: "/",
    icon: Globe,
    action: "View Website",
  },
];

export default function DashboardPage() {
  const [loggingOut, setLoggingOut] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    async function checkAdminSession() {
      try {
        const response = await fetch("/api/admin/session", {
          method: "GET",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data?.authenticated) {
          window.location.href = "/admin/login";
          return;
        }

        setCheckingSession(false);
      } catch (error) {
        console.error("Admin session check error:", error);
        window.location.href = "/admin/login";
      }
    }

    checkAdminSession();
  }, []);

  async function handleLogout() {
    const confirmed = window.confirm(
      "Are you sure you want to log out of the admin dashboard?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoggingOut(true);

      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to log out."
        );
      }

      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Admin logout error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to log out."
      );

      setLoggingOut(false);
    }
  }

  // Prevent dashboard content from flashing before authentication is checked.
  if (checkingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-green-600" />

          <p className="mt-5 text-sm font-medium text-slate-600">
            Checking admin session...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg font-extrabold text-white shadow-sm">
              G
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                GeekyAce Digital Hub
              </p>

              <p className="text-xs text-slate-500">
                Admin Dashboard
              </p>
            </div>
          </Link>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700 sm:inline-flex"
            >
              View Website
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogOut size={17} />

              {loggingOut
                ? "Logging out..."
                : "Logout"}
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Welcome */}
        <section>
          <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Admin Dashboard
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Welcome to your workspace
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Manage your GeekyAce Digital Hub workspace,
            team members, AI assistant, and website from
            one place.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Work Hub */}
            <Link
              href="/dashboard/team-work-hub"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Users size={24} />
                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Team Work Hub
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                Manage team members and their professional
                profiles.
              </p>
            </Link>

            {/* Add Team Member */}
            <Link
              href="/dashboard/team-work-hub/add"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Plus size={24} />
                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Add Team Member
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                Add a new team member to your Team Work Hub.
              </p>
            </Link>

            {/* GeekyAce AI */}
            <Link
              href="/#ai"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Bot size={24} />
                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                GeekyAce AI
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                Open the website AI assistant and test its
                visitor experience.
              </p>
            </Link>
          </div>
        </section>

        {/* Main Tools */}
        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Workspace
            </h2>

            <p className="mt-1 text-slate-500">
              Access the main areas of your GeekyAce
              workspace.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {dashboardItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                      <Icon size={27} />
                    </div>

                    <ArrowRight
                      size={21}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-600"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600">
                    {item.action}
                    <ArrowRight size={17} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Workspace Management */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Settings size={21} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Workspace Management
                </h2>
              </div>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Use the dashboard to manage your internal
                workspace while keeping the public GeekyAce
                Digital Hub website separate.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Go to Website
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Admin Footer */}
        <footer className="mt-12 border-t border-slate-200 py-8">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} GeekyAce Digital Hub.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/dashboard"
                className="transition hover:text-green-600"
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/team-work-hub"
                className="transition hover:text-green-600"
              >
                Team Work Hub
              </Link>

              <Link
                href="/"
                className="font-medium text-green-600 transition hover:text-green-700"
              >
                Back to Website
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}