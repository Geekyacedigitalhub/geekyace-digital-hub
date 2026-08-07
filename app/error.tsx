"use client";

import { useEffect } from "react";

import Button from "@/app/components/Button";
import Container from "@/app/components/ui/Container";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-red-200 bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
            Something Went Wrong
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
            Unexpected Error
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Sorry, an unexpected error occurred while loading this page.
            You can try again or return to the homepage.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Try Again
            </button>

            <Button
              href="/"
              variant="secondary"
            >
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}