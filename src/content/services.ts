export type ServiceSlug =
  | "websites"
  | "software"
  | "automation"
  | "ai-agents"
  | "content"
  | "data";

export interface Service {
  slug: ServiceSlug;
  icon: "globe" | "code" | "workflow" | "sparkles" | "play" | "bar-chart";
  shortLabel: string;
  title: string;
  benefit: string;
  problem: string;
  build: string;
  deliverables: string[];
  exampleWorkflow: string;
  featuredWork: { title: string; href: string };
  color: "cobalt" | "lime" | "coral";
}

export const services: Service[] = [
  {
    slug: "websites",
    icon: "globe",
    shortLabel: "Websites",
    title: "Websites and digital experiences",
    benefit:
      "Conversion-focused business websites, landing pages, booking journeys, customer portals and payment experiences.",
    problem:
      "Your website looks dated, loads slowly, or simply doesn't turn visitors into enquiries. It describes the business instead of moving people to act.",
    build:
      "We design and build fast, credible marketing sites and customer-facing web applications: booking journeys, portals, payment flows and content that is structured to convert.",
    deliverables: [
      "Responsive marketing website or landing page",
      "Booking or enquiry journey",
      "Customer portal or account area",
      "Payment and checkout integration",
      "Content structure and on-page SEO",
    ],
    exampleWorkflow:
      "A visitor lands from search, understands the offer in seconds, completes a short guided enquiry form, and receives a same-day qualified response.",
    featuredWork: { title: "SiteSnap", href: "/work/sitesnap" },
    color: "cobalt",
  },
  {
    slug: "software",
    icon: "code",
    shortLabel: "Software",
    title: "Bespoke software",
    benefit:
      "Internal tools, client portals, workflow platforms and applications designed around how the organisation actually operates.",
    problem:
      "Off-the-shelf tools force your team to work around software instead of the other way round. Spreadsheets and email threads are holding critical processes together.",
    build:
      "We design and build purpose-fit internal tools and client-facing applications: dashboards, record management, approval workflows and multi-user platforms.",
    deliverables: [
      "Internal operations tool or dashboard",
      "Client or partner portal",
      "Structured data models and user accounts",
      "Role-based access and approval workflows",
      "Integration with existing systems",
    ],
    exampleWorkflow:
      "A team replaces a shared spreadsheet with a proper record system: structured entries, automatic status tracking, and a clear audit trail.",
    featuredWork: { title: "AccountingOps", href: "/work/accountingops" },
    color: "cobalt",
  },
  {
    slug: "automation",
    icon: "workflow",
    shortLabel: "Automation",
    title: "Automation and integrations",
    benefit:
      "Connected workflows that reduce repetitive administration, accelerate follow-up and keep information moving between systems.",
    problem:
      "The same information gets re-typed into three different tools. Follow-ups slip because nobody owns the next step. Deadlines are tracked from memory.",
    build:
      "We map the current process, then connect the systems you already use and automate the repetitive steps in between, with clear notifications and fallbacks.",
    deliverables: [
      "Process map and automation plan",
      "System-to-system integrations",
      "Automated reminders and escalation rules",
      "Deadline and status tracking",
      "Exception handling and human hand-off points",
    ],
    exampleWorkflow:
      "A new enquiry automatically creates a record, notifies the right person, chases missing documents on a schedule, and flags anything overdue.",
    featuredWork: { title: "Archiflow", href: "/work/archiflow" },
    color: "lime",
  },
  {
    slug: "ai-agents",
    icon: "sparkles",
    shortLabel: "AI agents",
    title: "AI assistants and agents",
    benefit:
      "Practical AI for answering questions, analysing documents, qualifying enquiries, preparing reports and completing defined tasks.",
    problem:
      "Enquiries need qualifying before a human should spend time on them. Documents need reading and summarising. Reports take hours to assemble by hand.",
    build:
      "We design narrowly scoped assistants for a defined task, with clear guardrails, human review where it matters, and measurable time saved.",
    deliverables: [
      "Enquiry qualification assistant",
      "Document analysis and summarisation",
      "Drafting support for reports or reports",
      "Task-specific agent with defined guardrails",
      "Human-in-the-loop review controls",
    ],
    exampleWorkflow:
      "An assistant reads inbound enquiries, extracts the key details, drafts a qualified summary, and routes it to the right person to action.",
    featuredWork: { title: "Archiflow", href: "/work/archiflow" },
    color: "lime",
  },
  {
    slug: "content",
    icon: "play",
    shortLabel: "Content",
    title: "Content systems",
    benefit:
      "Workflows that turn ideas, updates and long-form material into consistent social content with review and approval controls.",
    problem:
      "Social content is inconsistent because it depends on someone finding time to write it from scratch every week, with no repeatable process.",
    build:
      "We build lightweight content pipelines that turn source material into drafts for review, with a clear approval step before anything is published.",
    deliverables: [
      "Content pipeline from source material to draft",
      "Editorial review and approval workflow",
      "Templated formats for consistent output",
      "Scheduling and handover to publishing tools",
    ],
    exampleWorkflow:
      "A long-form update is turned into a set of social drafts, queued for review, and approved before scheduling.",
    featuredWork: { title: "Mr Appeal", href: "/work/mr-appeal" },
    color: "coral",
  },
  {
    slug: "data",
    icon: "bar-chart",
    shortLabel: "Data",
    title: "Analytics and Power BI",
    benefit:
      "Dashboards and reporting systems that convert disconnected data into clear decisions, trends and actions.",
    problem:
      "Data lives in separate systems and spreadsheets. Reporting is manual, inconsistent, and arrives too late to inform a decision.",
    build:
      "We connect your data sources and build clear, decision-focused dashboards in Power BI or a bespoke reporting layer.",
    deliverables: [
      "Connected data pipeline",
      "Power BI or bespoke dashboard",
      "Defined key metrics and trend views",
      "Scheduled reporting and alerts",
    ],
    exampleWorkflow:
      "Operational data from several systems is combined into a single dashboard that surfaces trends and flags issues automatically.",
    featuredWork: { title: "AccountingOps", href: "/work/accountingops" },
    color: "coral",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
