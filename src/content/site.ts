export const siteConfig = {
  name: "UnbusyLabs",
  wordmark: "unbusylabs",
  tagline: "Messy process in. Better business out.",
  promise: "Make work less work.",
  supportingPhrase: "Less busy. More possible.",
  description:
    "UnbusyLabs builds websites, bespoke software, intelligent automation, AI agents and data dashboards that help growing businesses work smarter.",
  // Production origin used for canonical URLs, sitemap and structured data.
  // Update once unbusylabs.com is registered and connected to the deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://unbusylabs.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@unbusylabs.com",
  founder: {
    name: "Adnan Sarayqum",
    role: "Founder, UnbusyLabs",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  },
} as const;

export const navLinks = [
  { label: "What we do", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "How it works", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  services: [
    { label: "Websites", href: "/services#websites" },
    { label: "Software", href: "/services#software" },
    { label: "Automation", href: "/services#automation" },
    { label: "AI agents", href: "/services#ai-agents" },
    { label: "Content systems", href: "/services#content" },
    { label: "Analytics & Power BI", href: "/services#data" },
  ],
  work: [
    { label: "SiteSnap", href: "/work/sitesnap" },
    { label: "AccountingOps", href: "/work/accountingops" },
    { label: "Archiflow", href: "/work/archiflow" },
    { label: "Mr Appeal", href: "/work/mr-appeal" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
