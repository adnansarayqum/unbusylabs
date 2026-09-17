export type ProjectStatus =
  | "Live production product"
  | "MVP"
  | "Prototype / concept";

export type ProjectKind = "Client project" | "Self-initiated product";

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  kind: ProjectKind;
  summary: string;
  tagline: string;
  accent: "cobalt" | "lime" | "coral" | "ink";
  overview: string;
  problem: string;
  users: string;
  approach: string;
  solution: string;
  capabilities: string[];
  decisions: string[];
  quality: string;
  currentStatus: string;
  proofPoint?: string;
  gallery: { label: string; placeholder: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sitesnap",
    name: "SiteSnap",
    category: "FIELD WORKFLOW · AI-ASSISTED REPORTING",
    status: "MVP",
    kind: "Self-initiated product",
    accent: "cobalt",
    tagline: "From idea to live site, faster.",
    summary:
      "A mobile-first property inspection platform that organises photos, voice notes, readings and issue evidence into a structured reporting workflow.",
    overview:
      "SiteSnap helps field surveyors and inspectors capture evidence on site and turn it into a structured, shareable report without manual write-up afterwards.",
    problem:
      "Property inspections generate scattered evidence — photos on a phone, voice memos, handwritten readings — that then has to be manually assembled into a report, often hours after leaving site.",
    users:
      "Property surveyors, facilities inspectors and field engineers who need to capture evidence on site and produce a consistent, structured report.",
    approach:
      "We mapped the on-site capture process end to end, then designed a mobile-first flow that keeps data entry to seconds per item, with structure applied automatically rather than left to write-up time.",
    solution:
      "A responsive web application for capturing photos, voice notes and readings against a structured checklist, with AI-assisted drafting turning raw evidence into report-ready text for review before it is finalised.",
    capabilities: [
      "Responsive web application",
      "Image and evidence handling",
      "Voice-note capture workflow",
      "AI-assisted drafting of report text",
      "Offline capture with synchronisation considerations",
      "User accounts and structured reports",
    ],
    decisions: [
      "Prioritised a capture flow that works one-handed on site over a feature-dense dashboard.",
      "Kept AI drafting as a suggestion the inspector reviews and edits, never an auto-published output.",
      "Designed the data model around structured checklist items so reports stay consistent across inspectors.",
    ],
    quality:
      "Core capture flows are covered by component tests, with manual device testing across common phone sizes to confirm the one-handed workflow holds up in the field.",
    currentStatus:
      "MVP. Core capture-to-report flow is functional; used to validate the workflow ahead of further field testing.",
    gallery: [
      { label: "Product interface preview", placeholder: "Capture flow" },
      { label: "Product interface preview", placeholder: "Structured report view" },
    ],
  },
  {
    slug: "accountingops",
    name: "AccountingOps",
    category: "OPERATIONS SOFTWARE · AUTOMATION",
    status: "MVP",
    kind: "Self-initiated product",
    accent: "lime",
    tagline: "Less manual work. More clarity.",
    summary:
      "An operations command centre helping accountancy practices manage clients, VAT, CT600 and Corporation Tax deadlines, missing documents and automated reminders.",
    overview:
      "AccountingOps gives an accountancy practice a single place to see every client's compliance status, instead of tracking deadlines across spreadsheets and inboxes.",
    problem:
      "Practices juggle VAT, CT600 and Corporation Tax deadlines for many clients at once, often tracked in spreadsheets, with document chasing done manually by email.",
    users:
      "Practice managers and accountants who need a clear view of client deadlines, outstanding documents and team workload.",
    approach:
      "We started from the compliance calendar rather than the software: what has to happen, by when, and what blocks it — then built the dashboard and automation around that.",
    solution:
      "An operations dashboard showing client status, upcoming deadlines and missing documents at a glance, with automated reminder sequences that chase clients without manual follow-up.",
    capabilities: [
      "Operational dashboard",
      "Deadline and status tracking",
      "Client records",
      "Document-chasing automation",
      "Workload visibility across the team",
      "Business process automation",
    ],
    decisions: [
      "Modelled deadlines as a first-class object so reminders and dashboards share one source of truth.",
      "Made missing-document status visible practice-wide rather than only to the assigned accountant.",
      "Kept the reminder cadence configurable per client rather than hard-coded.",
    ],
    quality:
      "Deadline calculation logic and reminder scheduling are covered by unit tests; the dashboard was validated against real compliance calendars supplied during discovery.",
    currentStatus:
      "MVP. Core dashboard, deadline tracking and reminder automation are built and in use for evaluation.",
    gallery: [
      { label: "Product interface preview", placeholder: "Client status dashboard" },
      { label: "Product interface preview", placeholder: "Deadline tracker" },
    ],
  },
  {
    slug: "archiflow",
    name: "Archiflow",
    category: "LEAD MANAGEMENT · AI · BOOKING",
    status: "MVP",
    kind: "Client project",
    accent: "ink",
    tagline: "Smarter project workflows.",
    summary:
      "An AI lead and booking automation MVP for architecture practices, covering enquiry capture, qualification, follow-up, pipeline management and consultation booking.",
    overview:
      "Archiflow was built for an architecture practice that was losing time and enquiries to manual lead handling, with no consistent way to qualify or follow up.",
    problem:
      "Enquiries arrived through several channels with no consistent qualification step, follow-up depended on individual memory, and booking a consultation took several back-and-forth emails.",
    users:
      "Architecture practice principals and office managers handling inbound enquiries and consultation bookings.",
    approach:
      "We scoped a fixed-price MVP focused on the highest-friction part of the journey: turning a raw enquiry into a qualified, bookable lead with minimal manual handling.",
    solution:
      "An enquiry capture and qualification flow with AI-assisted lead scoring, automated follow-up sequences, a simple pipeline view, and direct consultation booking.",
    capabilities: [
      "Enquiry capture and qualification",
      "Automated follow-up sequences",
      "Pipeline management view",
      "Consultation booking",
      "AI-assisted lead qualification",
    ],
    decisions: [
      "Scoped the MVP around the qualify-and-book journey rather than a full CRM replacement.",
      "Used AI qualification as an assistive score for the team to review, not an automatic accept/reject.",
      "Built the pipeline view to match the practice's existing follow-up stages instead of a generic CRM model.",
    ],
    quality:
      "Delivered in testable stages with client review at each milestone; booking and qualification flows were validated against real enquiry scenarios before sign-off.",
    currentStatus:
      "Fixed-price MVP completed and approved by the client. Contract value is not published.",
    proofPoint: "Fixed-price MVP completed and approved by the client.",
    gallery: [
      { label: "Product interface preview", placeholder: "Enquiry pipeline" },
      { label: "Product interface preview", placeholder: "Booking flow" },
    ],
  },
  {
    slug: "mr-appeal",
    name: "Mr Appeal",
    category: "CUSTOMER JOURNEY · CASE INTAKE",
    status: "Prototype / concept",
    kind: "Self-initiated product",
    accent: "coral",
    tagline: "A clearer path forward.",
    summary:
      "A guided digital journey for parking-ticket enquiries, evidence collection, customer intake, WhatsApp handoff and appeal tracking.",
    overview:
      "Mr Appeal explores a guided, low-friction journey for people dealing with a parking ticket who don't know whether or how to appeal.",
    problem:
      "People receiving a parking ticket are often confused about their options, and existing services offer little more than a static contact form with no structured evidence collection.",
    users:
      "Members of the public who have received a parking ticket and are assessing whether to appeal.",
    approach:
      "We designed a short guided assessment that collects the details and evidence needed to judge an appeal's merit, then hands off to a human conversation at the right moment.",
    solution:
      "A conversion-focused service website with a multi-step assessment, evidence upload, structured case intake, and handoff to WhatsApp for ongoing communication and appeal tracking.",
    capabilities: [
      "Conversion-focused service website",
      "Multi-step assessment",
      "Evidence collection",
      "Case workflow",
      "Customer communication via WhatsApp handoff",
    ],
    decisions: [
      "Kept the assessment short and conversational rather than a long legal-style form.",
      "Used WhatsApp handoff instead of building a full messaging system, since it matched how the target users already communicate.",
      "Avoided presenting any success-rate figures, since none have been measured yet.",
    ],
    quality:
      "Manually tested across mobile viewports given the mobile-first audience; no production usage data exists yet.",
    currentStatus:
      "Prototype / concept. Built to validate the journey; not yet in live customer use.",
    gallery: [
      { label: "Product interface preview", placeholder: "Guided assessment" },
      { label: "Product interface preview", placeholder: "Evidence upload" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((project) => project.slug === slug);
