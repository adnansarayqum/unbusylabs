import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use for the UnbusyLabs website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="Legal" heading="Terms of use" />

      <div className="mt-8 max-w-3xl space-y-6 text-slate">
        <p className="rounded-lg border border-coral/30 bg-coral/5 p-4 text-sm text-ink">
          <strong>Note for the site owner:</strong> these are general starting terms. Have them
          reviewed before publishing, and replace with formal engagement terms once a client
          contract template exists.
        </p>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Use of this website</h2>
          <p>
            This website is provided for information about UnbusyLabs&apos; services. Content is
            provided in good faith but without warranty of completeness or fitness for a particular
            purpose.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Project work</h2>
          <p>
            Any engagement for websites, software, automation, AI or data work is governed by a
            separate written proposal and agreement, not by this page.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Intellectual property</h2>
          <p>
            Unless otherwise agreed in writing, the content, design and code of this website belong
            to UnbusyLabs and may not be reproduced without permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Contact</h2>
          <p>Questions about these terms can be sent through the contact page.</p>
        </div>
      </div>
    </Section>
  );
}
