export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Understand the process, users, bottlenecks and commercial objective.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Map the workflow and create the experience before overbuilding.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop and demonstrate the solution in testable stages.",
  },
  {
    step: "04",
    title: "Automate",
    description:
      "Connect repetitive work and carefully defined intelligence.",
  },
  {
    step: "05",
    title: "Measure",
    description:
      "Track performance, learn from usage and prioritise improvements.",
  },
];

export interface EngagementOption {
  title: string;
  description: string;
}

export const engagementOptions: EngagementOption[] = [
  {
    title: "Website launch",
    description:
      "For businesses needing a credible digital presence and a stronger enquiry journey.",
  },
  {
    title: "Automation sprint",
    description:
      "For one clearly defined repetitive process that can be streamlined or connected.",
  },
  {
    title: "Bespoke MVP",
    description:
      "For a working application, client portal, internal platform or product concept.",
  },
  {
    title: "Product partnership",
    description:
      "For ongoing development, improvement, analytics and technical support.",
  },
];

export const engagementLine =
  "Scope and a fixed-price proposal are provided after discovery.";
