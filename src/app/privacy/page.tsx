import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How UnbusyLabs collects, uses and protects information submitted through this site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="Legal" heading="Privacy policy" />

      <div className="prose prose-slate mt-8 max-w-3xl space-y-6 text-slate">
        <p className="rounded-lg border border-coral/30 bg-coral/5 p-4 text-sm text-ink">
          <strong>Note for the site owner:</strong> this policy is a concise starting point for the
          initial enquiry workflow. Have it reviewed against current UK GDPR/PECR guidance (and any
          analytics or email provider you connect) before publishing.
        </p>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">What we collect</h2>
          <p>
            When you submit the project enquiry form, we collect the details you provide: your
            name, work email, business name, website, a description of what you&apos;d like to
            improve, your current tools, who will use the solution, your area of interest,
            timescale, indicative budget and preferred contact method.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">How we use it</h2>
          <p>
            We use this information solely to respond to your enquiry and, if you choose to
            proceed, to scope and deliver a project. We do not sell or share your information with
            third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Analytics</h2>
          <p>
            We track a small number of anonymous conversion events (such as which page or button
            led to an enquiry) to understand how the site is used. We do not collect the content of
            your enquiry in analytics, and we do not use invasive tracking by default.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Data retention</h2>
          <p>
            Enquiry information is retained only as long as needed to respond to you and, where a
            project proceeds, for the duration of that engagement and any legal retention
            requirement.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Your rights</h2>
          <p>
            You can ask us to access, correct or delete the information we hold about you at any
            time by contacting {siteConfig.contactEmail}.
          </p>
        </div>
      </div>
    </Section>
  );
}
