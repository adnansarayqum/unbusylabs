import { Section, SectionHeading } from "@/components/ui/Section";
import { industries, industriesSupportingLine } from "@/content/industries";

export function Industries() {
  return (
    <Section id="industries" className="bg-white">
      <SectionHeading heading="Built for businesses with real operational complexity" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((industry) => (
          <div key={industry.name} className="rounded-xl border border-border p-5">
            <h3 className="font-display font-bold text-ink">{industry.name}</h3>
            <p className="mt-2 text-sm text-slate">{industry.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-slate">{industriesSupportingLine}</p>
    </Section>
  );
}
