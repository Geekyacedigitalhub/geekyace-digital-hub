"use client";

import {
  ArrowRight,
  Mail,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import Button from "../Button";
import PageHero from "../ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      title="Let's Build Something Great Together"
      description="Have a project in mind, a business challenge to solve, or an idea you'd like to bring to life? Tell us what you're working on and let's discuss how Geekyace Digital Hub can help."
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="#contact-form" size="lg">
          <MessageSquareText className="h-4 w-4" />
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button href="/showcase" variant="secondary" size="lg">
          View Our Work
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4 text-green-600" />
          Email us anytime
        </span>

        <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-green-600" />
          Response within 24 hours
        </span>
      </div>
    </PageHero>
  );
}