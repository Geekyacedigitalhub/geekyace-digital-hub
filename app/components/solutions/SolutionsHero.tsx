"use client";

import Button from "../Button";
import PageHero from "../ui/PageHero";

export default function SolutionsHero() {
  return (
    <PageHero
      title="Digital Solutions Built for Business Growth"
      description="From websites and mobile applications to AI, automation, branding, and custom digital systems, Geekyace Digital Hub builds practical technology solutions designed to help businesses work smarter and grow faster."
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          href="/contact"
          variant="primary"
          size="lg"
        >
          Start Your Project
        </Button>

        <Button
          href="/showcase"
          variant="secondary"
          size="lg"
        >
          Explore Our Work
        </Button>
      </div>
    </PageHero>
  );
}