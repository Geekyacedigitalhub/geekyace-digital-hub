"use client";

import Button from "../Button";
import PageHero from "../ui/PageHero";

export default function SolutionsHero() {
  return (
    <PageHero
      badge="INDUSTRY SOLUTIONS"
      title="Digital Solutions Built Around Your Industry"
      description="Every industry has unique challenges. We create websites, mobile applications, AI solutions, business automation, and digital experiences tailored to your organization's goals."
    >
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button href="/contact" size="lg">
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