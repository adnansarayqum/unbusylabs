import type { Metadata } from "next";
import { industries, industriesSupportingLine } from "@/content/industries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "UnbusyLabs works with professional services, property and field services, accountancy, automotive and local service businesses.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Industries"
        heading="Built for businesses with real operational complexity"
        supporting={industriesSupportingLine}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry.name} className="rounded-xl2 border border-border bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink">{industry.name}</h2>
            <p className="mt-2 text-sm text-slate">{industry.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Button href="/contact">Feed us the busywork</Button>
      </div>
    </Section>
  );
}
