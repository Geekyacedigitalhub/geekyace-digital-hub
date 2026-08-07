"use client";

import Button from "../Button";
import PageHero from "../ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      badge="GET IN TOUCH"
      title="Let's Build Something Amazing Together"
      description="Whether you're launching a new business, improving an existing product, or exploring AI and automation, our team is ready to help you turn your ideas into reality."
    >
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button
          href="mailto:hello@geekyacedigitalhub.com"
          size="lg"
        >
          Email Us
        </Button>

        <Button
          href="/showcase"
          variant="secondary"
          size="lg"
        >
          View Our Work
        </Button>
      </div>
    </PageHero>
  );
}