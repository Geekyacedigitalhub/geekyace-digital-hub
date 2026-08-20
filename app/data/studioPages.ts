import type { Studio } from "./studios";

export type StudioPageData = {
  id: Studio["id"];
  headline: string;
  subheadline: string;
  idealFor: string[];
  problems: string[];
  deliverables: string[];
  outcomes: string[];
  roles: string[];
  phases: { title: string; description: string }[];
  packages: { name: string; bestFor: string; includes: string[]; timing: string }[];
  faqs: { question: string; answer: string }[];
};

export const studioPages: StudioPageData[] = [
  {
    id: "technology",
    headline: "Digital products and systems built around the business—not the trend.",
    subheadline: "From conversion websites to AI workflows and custom platforms, our product studio connects strategy, experience design, engineering, and launch support.",
    idealFor: ["New product launches", "Website modernization", "AI and automation initiatives", "Customer or staff portals"],
    problems: ["An outdated website is weakening buyer confidence", "Manual work is slowing the team down", "A product idea lacks a practical technical plan", "Disconnected tools are creating avoidable friction"],
    deliverables: ["Product and technical discovery", "User journeys and requirements", "UI/UX direction", "Responsive development", "Integrations and automation", "Testing, deployment, and handover"],
    outcomes: ["A clearer route from idea to launch", "A maintainable product your team can operate", "Technology selected for the real constraint"],
    roles: ["Product strategist", "UI/UX designer", "Frontend developer", "Backend / integration developer", "QA and launch support"],
    phases: [
      { title: "Discover", description: "Clarify users, goals, constraints, data, integrations, and the smallest valuable first release." },
      { title: "Design", description: "Turn requirements into journeys, interfaces, workflow logic, and a build-ready plan." },
      { title: "Build", description: "Develop, integrate, and review the product through visible milestones." },
      { title: "Launch", description: "Test, deploy, document, hand over, and plan the next improvement cycle." },
    ],
    packages: [
      { name: "Product Clarity Sprint", bestFor: "Ideas that need a build-ready direction", includes: ["Discovery workshop", "Prioritized requirements", "Roadmap and technical recommendation"], timing: "1–2 weeks" },
      { name: "Focused Product Build", bestFor: "A defined website, portal, app, or automation", includes: ["Experience design", "Core development", "Testing and launch"], timing: "Scope-led" },
      { name: "Product Partnership", bestFor: "Products that need continuous delivery", includes: ["Prioritized backlog", "Delivery cycles", "Optimization and technical support"], timing: "Monthly" },
    ],
    faqs: [
      { question: "Can you improve an existing product?", answer: "Yes. We can begin with an audit, identify the highest-impact improvements, and create a phased modernization plan." },
      { question: "Do you work with an existing technical team?", answer: "Yes. GeekyAce can own a defined workstream or collaborate with your internal developers, designers, and product owners." },
      { question: "Will we receive the source and handover materials?", answer: "The agreed source files, access, documentation, and ownership expectations are listed in the project scope before work begins." },
    ],
  },
  {
    id: "creative",
    headline: "A brand system that makes every buyer touchpoint feel intentional.",
    subheadline: "Our creative studio brings brand direction, graphic design, UI, presentations, and campaign assets into one recognizable system.",
    idealFor: ["New brands and offers", "Visual rebrands", "Campaign launches", "Presentation and sales assets"],
    problems: ["The brand looks inconsistent across channels", "Design assets do not feel credible or premium", "The offer is difficult to understand visually", "Internal teams lack reusable brand guidance"],
    deliverables: ["Brand and visual audit", "Creative direction", "Identity or campaign system", "UI and digital assets", "Presentation or sales collateral", "Reusable templates and handover"],
    outcomes: ["A more recognizable visual presence", "Faster creation through reusable assets", "Stronger confidence at key buyer touchpoints"],
    roles: ["Brand strategist", "Art director", "Graphic designer", "UI/UX designer", "Presentation designer"],
    phases: [
      { title: "Audit", description: "Review the audience, offer, current assets, competitors, and the moments where the brand must perform." },
      { title: "Direction", description: "Develop a focused visual territory and obtain alignment before production expands." },
      { title: "Design", description: "Create the agreed identity, interfaces, collateral, or campaign system." },
      { title: "Equip", description: "Prepare files, templates, and practical guidance so the system stays consistent." },
    ],
    packages: [
      { name: "Creative Direction Sprint", bestFor: "A launch that needs a clear visual route", includes: ["Visual audit", "Mood and direction", "Priority asset plan"], timing: "1–2 weeks" },
      { name: "Brand System Build", bestFor: "A complete identity or campaign system", includes: ["Core visual system", "Priority digital assets", "Usage and handover guidance"], timing: "Scope-led" },
      { name: "Creative Desk", bestFor: "Teams with recurring design needs", includes: ["Prioritized request queue", "Consistent production", "Monthly quality review"], timing: "Monthly" },
    ],
    faqs: [
      { question: "How many design concepts will we receive?", answer: "The concept and revision structure is agreed before work begins so quality, timing, and decision ownership remain clear." },
      { question: "Can you work with our existing brand guidelines?", answer: "Yes. We can extend an existing system without replacing what already works." },
      { question: "Which source files are included?", answer: "The handover list depends on the deliverables and is documented in the scope, including editable files where agreed." },
    ],
  },
  {
    id: "growth",
    headline: "Turn scattered marketing activity into a clearer path to enquiry and sale.",
    subheadline: "Our growth studio aligns audience research, search, content, campaigns, conversion design, and measurement around one commercial goal.",
    idealFor: ["Offer launches", "Lead generation", "Search and content growth", "Conversion improvement"],
    problems: ["Marketing activity lacks a shared target", "Traffic is not becoming qualified enquiries", "Content is inconsistent or difficult to sustain", "The team cannot see which channels are helping"],
    deliverables: ["Audience and funnel diagnosis", "Positioning and message direction", "Channel and content plan", "Campaign creative", "Landing and conversion journeys", "Measurement and optimization plan"],
    outcomes: ["A more focused acquisition plan", "A clearer message from channel to landing page", "Better visibility into buyer actions"],
    roles: ["Growth strategist", "SEO / content specialist", "Campaign manager", "Conversion designer", "Marketing analyst"],
    phases: [
      { title: "Diagnose", description: "Review the offer, audience, journey, existing channels, evidence, and measurement gaps." },
      { title: "Prioritize", description: "Choose the most useful channels, messages, content, and conversion improvements." },
      { title: "Launch", description: "Produce and activate the agreed campaign, content, and landing experience." },
      { title: "Improve", description: "Review signals, learn from buyer behavior, and prioritize the next experiment." },
    ],
    packages: [
      { name: "Growth Diagnosis", bestFor: "Teams unsure where growth is breaking", includes: ["Funnel review", "Audience and message findings", "90-day priority plan"], timing: "1–2 weeks" },
      { name: "Campaign Launch", bestFor: "A defined offer or acquisition goal", includes: ["Campaign strategy", "Creative and landing journey", "Measurement setup"], timing: "Scope-led" },
      { name: "Growth Partnership", bestFor: "Continuous campaigns and optimization", includes: ["Monthly priorities", "Content or campaign delivery", "Performance review"], timing: "Monthly" },
    ],
    faqs: [
      { question: "Do you guarantee rankings, leads, or sales?", answer: "No responsible agency can guarantee buyer behavior or search rankings. We agree controllable deliverables, measurement, and improvement priorities." },
      { question: "Can you work with our current marketing tools?", answer: "Yes. We review the current stack before recommending any new platform or migration." },
      { question: "Do you handle both creative and landing pages?", answer: "Yes. The squad can combine growth, creative, and technology specialists when the journey requires them." },
    ],
  },
  {
    id: "video",
    headline: "Video and motion designed to explain faster, hold attention, and travel well.",
    subheadline: "Our motion studio combines format strategy, scripting, editing, motion design, and channel-ready delivery without losing the core message.",
    idealFor: ["Product explainers", "Social content systems", "Campaign launches", "Editing and repurposing"],
    problems: ["The offer takes too long to explain", "Raw footage lacks structure and pace", "Content is not adapted for each channel", "The visual style changes from video to video"],
    deliverables: ["Format and story direction", "Script or edit plan", "Video editing", "Motion graphics", "Captions and sound finishing", "Channel-ready versions and source handover"],
    outcomes: ["A clearer story in less time", "Consistent visual treatment across formats", "More value from each recording or campaign"],
    roles: ["Creative producer", "Scriptwriter", "Video editor", "Motion designer", "Sound and finishing support"],
    phases: [
      { title: "Frame", description: "Define the audience, message, format, platform requirements, and available source material." },
      { title: "Prepare", description: "Create the script, storyboard, edit map, or production plan needed for alignment." },
      { title: "Produce", description: "Edit, animate, review, and refine through agreed checkpoints." },
      { title: "Deliver", description: "Export platform-ready versions and prepare the agreed source and asset handover." },
    ],
    packages: [
      { name: "Story & Format Sprint", bestFor: "A video idea that needs direction", includes: ["Message workshop", "Format recommendation", "Script or storyboard outline"], timing: "1 week" },
      { name: "Hero Video Build", bestFor: "An explainer, campaign, or launch asset", includes: ["Pre-production direction", "Edit and motion", "Agreed channel versions"], timing: "Scope-led" },
      { name: "Content Engine", bestFor: "Recurring editing and repurposing", includes: ["Monthly content queue", "Editing and adaptations", "Style consistency review"], timing: "Monthly" },
    ],
    faqs: [
      { question: "Can you work with footage we already have?", answer: "Yes. We first review its quality, coverage, permissions, and suitability for the intended formats." },
      { question: "Are revisions included?", answer: "The review stages and revision rounds are defined in the scope to keep feedback consolidated and delivery predictable." },
      { question: "Can one video be adapted for several platforms?", answer: "Yes. We can plan horizontal, vertical, square, short, and captioned versions when included in the deliverable list." },
    ],
  },
  {
    id: "support",
    headline: "Operational support that creates capacity without creating more management work.",
    subheadline: "Our business support studio combines research, documentation, data workflows, virtual assistance, and quality control around clearly owned outcomes.",
    idealFor: ["Research-heavy projects", "Documentation backlogs", "Recurring administrative workflows", "Data organization and quality checks"],
    problems: ["Specialists are losing time to repeatable support work", "Important processes live only in people’s heads", "Research and data arrive in inconsistent formats", "Delegated tasks lack clear quality standards"],
    deliverables: ["Workflow and responsibility mapping", "Research and structured findings", "Documentation and SOPs", "Data entry or organization", "Virtual project support", "Quality checklist and operating rhythm"],
    outcomes: ["More focus for the core team", "Better visibility and repeatability", "A support workflow that is easier to manage"],
    roles: ["Operations lead", "Research specialist", "Documentation specialist", "Data support specialist", "Virtual assistant"],
    phases: [
      { title: "Define", description: "Clarify the output, sources, standards, ownership, security needs, and approval process." },
      { title: "Set up", description: "Create templates, checklists, access boundaries, and a manageable operating rhythm." },
      { title: "Deliver", description: "Complete the work in visible batches with quality review and clear escalation." },
      { title: "Improve", description: "Document lessons, reduce friction, and refine the recurring workflow." },
    ],
    packages: [
      { name: "Operations Setup Sprint", bestFor: "A process that needs structure before delegation", includes: ["Workflow map", "Templates and checklist", "Delegation plan"], timing: "1–2 weeks" },
      { name: "Defined Support Project", bestFor: "A research, documentation, or data outcome", includes: ["Agreed output batches", "Quality control", "Final organized handover"], timing: "Scope-led" },
      { name: "Embedded Support", bestFor: "Recurring operational capacity", includes: ["Prioritized work queue", "Regular delivery rhythm", "Monthly process review"], timing: "Monthly" },
    ],
    faqs: [
      { question: "How do you protect sensitive business information?", answer: "We define access boundaries, use only the information required for the work, and agree the appropriate tools and confidentiality expectations." },
      { question: "Can you follow an existing SOP?", answer: "Yes. We can work from your procedure or help improve it when steps and quality criteria are unclear." },
      { question: "How is support quality checked?", answer: "The scope identifies examples, acceptance criteria, review frequency, and the person responsible for final approval." },
    ],
  },
];

export function getStudioPage(id: Studio["id"]) {
  return studioPages.find((page) => page.id === id);
}
