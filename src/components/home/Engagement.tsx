import { Section, SectionHeading } from "@/components/ui/Section";
import { engagementOptions, engagementLine } from "@/content/process";

export function Engagement() {
  return (
    <Section>
      <SectionHeading eyebrow="Ways to work together" heading="Engagement options" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {engagementOptions.map((option) => (
          <div key={option.title} className="rounded-xl2 border border-border bg-white p-6">
            <h3 className="font-display text-lg font-bold text-ink">{option.title}</h3>
            <p className="mt-2 text-sm text-slate">{option.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm font-medium text-slate">{engagementLine}</p>
    </Section>
  );
}
