import type { Studio } from "./studios";

export type ServiceBuyerGuide = {
  studioId: Studio["id"];
  outcome: string;
  idealFor: string[];
  questions: string[];
  deliverables: string[];
  engagements: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const serviceBuyerGuides: Record<string, ServiceBuyerGuide> = {
  "website-development": {
    studioId: "technology",
    outcome: "A fast, credible digital presence with a clear path from visitor interest to buyer action.",
    idealFor: ["Businesses replacing an outdated website", "New offers that need a conversion-focused launch", "Organizations needing booking, commerce, portal, or integration features"],
    questions: ["What should the visitor understand or do?", "Which content, systems, and integrations already exist?", "Who will update and operate the website after launch?"],
    deliverables: ["Discovery and content structure", "Responsive interface design", "Development and integrations", "SEO foundations and analytics readiness", "Testing, deployment, and handover"],
    engagements: [
      { title: "Website Clarity Sprint", description: "Architecture, requirements, content priorities, and a build recommendation." },
      { title: "Conversion Website Build", description: "A defined website delivered from design through deployment and handover." },
      { title: "Website Growth Support", description: "Ongoing landing pages, content improvements, maintenance, and optimization." },
    ],
    faqs: [
      { question: "Will the website work on mobile?", answer: "Yes. Responsive behavior and priority device testing are part of the agreed quality checks." },
      { question: "Can you use our existing content and brand?", answer: "Yes. We can work from existing assets, identify gaps, and avoid replacing materials that still serve the goal." },
      { question: "Is hosting included?", answer: "Hosting, domain, third-party services, and ongoing costs are listed separately in the scope so ownership remains clear." },
    ],
  },
  "ai-solutions": {
    studioId: "technology",
    outcome: "A practical AI experience with a defined use case, responsible oversight, and measurable operating value.",
    idealFor: ["Support or knowledge workflows with repeated questions", "Teams processing large volumes of text or information", "Businesses exploring useful AI without a clear implementation path"],
    questions: ["Which decision or task should AI assist?", "What information can it use safely and reliably?", "Where must a human review or take over?"],
    deliverables: ["Use-case and risk discovery", "Conversation or workflow design", "AI integration and guardrails", "Testing with realistic scenarios", "Documentation and human oversight plan"],
    engagements: [
      { title: "AI Opportunity Sprint", description: "Prioritize feasible use cases, information requirements, risks, and expected value." },
      { title: "Focused AI Implementation", description: "Design, build, test, and integrate one defined AI-assisted workflow." },
      { title: "AI Improvement Partnership", description: "Review usage, strengthen knowledge, improve prompts, and monitor quality." },
    ],
    faqs: [
      { question: "Can AI be completely accurate?", answer: "No. AI output can be wrong, so the solution must define acceptable use, source boundaries, and human review where accuracy matters." },
      { question: "Will our private information be used?", answer: "Data sources, access, retention, and third-party processing are reviewed before implementation and documented in the scope." },
      { question: "Can the AI connect to our existing systems?", answer: "Potentially. We first confirm whether those systems provide the required access, APIs, permissions, and reliable data." },
    ],
  },
  "business-automation": {
    studioId: "technology",
    outcome: "A more reliable workflow with fewer manual handoffs, clearer ownership, and better operational visibility.",
    idealFor: ["Teams repeating the same administrative steps", "Processes that move information between disconnected tools", "Operations affected by missed follow-ups or inconsistent data"],
    questions: ["Where does the process begin and end?", "Which exceptions require human judgment?", "Who owns the workflow when something fails?"],
    deliverables: ["Current-state workflow map", "Automation opportunity and exception plan", "Integrations and workflow build", "Testing and monitoring setup", "Documentation and team handover"],
    engagements: [
      { title: "Workflow Diagnosis", description: "Map the process, quantify friction, and prioritize safe automation opportunities." },
      { title: "Automation Build", description: "Implement and test a defined workflow with clear exception handling." },
      { title: "Operations Optimization", description: "Maintain, monitor, and improve connected business workflows." },
    ],
    faqs: [
      { question: "Can every task be automated?", answer: "No. We separate predictable rules from work that needs judgment, approval, or human communication." },
      { question: "Will automation replace our current tools?", answer: "Not necessarily. The first option is often to connect or improve the tools you already use." },
      { question: "What happens when an automation fails?", answer: "The design should include logging, alerts, ownership, and a practical manual fallback for important processes." },
    ],
  },
  "mobile-app-development": {
    studioId: "technology",
    outcome: "A focused mobile product with a clear user need, realistic first release, and maintainable delivery plan.",
    idealFor: ["Customer or member experiences that benefit from mobile access", "Field or staff workflows", "Digital product ideas that require device capabilities or frequent use"],
    questions: ["Why does this need to be an app rather than a responsive website?", "Which actions belong in the first useful release?", "How will accounts, content, support, and updates be managed?"],
    deliverables: ["Product discovery and release plan", "User flows and interface design", "Cross-platform or native development", "Backend and third-party integrations", "Testing, publishing support, and handover"],
    engagements: [
      { title: "App Product Sprint", description: "Validate the need, users, features, risks, and first-release roadmap." },
      { title: "Focused App Build", description: "Design and develop an agreed mobile release with testing and launch support." },
      { title: "Product Evolution", description: "Improve the app through prioritized releases, maintenance, and user feedback." },
    ],
    faqs: [
      { question: "Do you build for Android and iOS?", answer: "Yes. The recommended native or cross-platform approach depends on features, budget, performance, and long-term maintenance." },
      { question: "Are app-store fees included?", answer: "Developer accounts, store fees, and third-party services are identified separately because they remain under the buyer’s ownership." },
      { question: "Can we start with a prototype?", answer: "Yes. A prototype can reduce uncertainty before full development when the user journey or feature set is still evolving." },
    ],
  },
  "graphic-design": {
    studioId: "creative",
    outcome: "A consistent visual system that improves recognition and makes key buyer materials easier to trust and use.",
    idealFor: ["Brands preparing to launch or reposition", "Teams with inconsistent marketing assets", "Offers that need stronger presentation, campaign, or digital design"],
    questions: ["Which audience and decision should the design support?", "What brand assets already exist?", "Which formats, platforms, and editable files are required?"],
    deliverables: ["Visual audit and creative direction", "Core identity or campaign assets", "Digital, print, or presentation formats", "Reusable templates", "Organized source and export handover"],
    engagements: [
      { title: "Creative Direction Sprint", description: "Define the visual route and priority asset system before full production." },
      { title: "Design System Build", description: "Create an agreed brand, campaign, presentation, or interface asset set." },
      { title: "Creative Desk", description: "Provide recurring design capacity within an established visual system." },
    ],
    faqs: [
      { question: "How are revisions handled?", answer: "Revision rounds, decision owners, and feedback timing are agreed in the scope before design begins." },
      { question: "Will we receive editable files?", answer: "The exact source and export file list is documented for the engagement, including editable files where agreed." },
      { question: "Can you match our existing brand?", answer: "Yes. We can extend a working visual system while improving consistency and usability." },
    ],
  },
  "cad-drafting": {
    studioId: "support",
    outcome: "Organized CAD deliverables produced against defined references, standards, review points, and intended use.",
    idealFor: ["Teams converting sketches or references into organized drawings", "Projects requiring drawing updates or documentation support", "Defined 2D, 3D, architectural, or engineering drafting tasks"],
    questions: ["What is the drawing’s intended use and required standard?", "Which reference files and dimensions are authoritative?", "Who is qualified to review and approve the final technical output?"],
    deliverables: ["Reference and requirement review", "2D drawings or 3D models", "Defined annotation and layer standards", "Review revisions", "Agreed source and export files"],
    engagements: [
      { title: "Drafting Scope Review", description: "Confirm references, standards, risks, outputs, and review responsibilities." },
      { title: "Defined Drawing Package", description: "Produce a specified drawing or modeling package through agreed review points." },
      { title: "Ongoing Drafting Support", description: "Provide recurring drawing updates and documentation support." },
    ],
    faqs: [
      { question: "Do drawings replace professional approval?", answer: "No. Where licensed engineering, architectural, code, or regulatory approval is required, the buyer must engage the appropriate qualified professional." },
      { question: "Which reference formats can you use?", answer: "The usable inputs depend on quality and scope. We review sketches, PDFs, CAD files, dimensions, and other references before confirming delivery." },
      { question: "Are revisions included?", answer: "The scope defines review rounds and distinguishes correction of agreed work from new or changed requirements." },
    ],
  },
};

export function getServiceBuyerGuide(slug: string) {
  return serviceBuyerGuides[slug];
}
