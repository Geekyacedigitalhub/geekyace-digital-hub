import { ArrowRight, Mail, MessageSquareText, Github, Sparkles } from "lucide-react";
import Button from "../Button";
import PageHero from "../ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      title="Tell Me What You Want to Build"
      description="Share the business problem, product idea, website, Shopify store, AI workflow, or custom system you want to create. We can start from the goal and work backward to the right solution."
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="#contact-form" size="lg">
          <MessageSquareText className="h-4 w-4" />
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href="/showcase" variant="secondary" size="lg">
          Inspect the Work
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-green-600" /> hello@geekyacedigitalhub.com</span>
        <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
        <a href="https://github.com/Geekyacedigitalhub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-green-700">
          <Github className="h-4 w-4 text-green-600" /> GitHub portfolio
        </a>
        <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
        <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-green-600" /> Clear project scope before development</span>
      </div>
    </PageHero>
  );
}