import { Section, SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading eyebrow="How it works" heading="From messy to meaningful" />

      {/* Desktop connected workflow */}
      <ol className="mt-12 hidden lg:grid lg:grid-cols-5 lg:gap-4">
        {processSteps.map((step, index) => (
          <li key={step.step} className="relative">
            <div className="rounded-xl2 border border-border bg-white p-6">
              <span className="font-display text-3xl font-extrabold text-cobalt/30">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-slate">{step.description}</p>
            </div>
            {index < processSteps.length - 1 && (
              <span
                aria-hidden
                className="absolute right-[-18px] top-1/2 h-px w-9 -translate-y-1/2 bg-border"
              />
            )}
          </li>
        ))}
      </ol>

      {/* Mobile vertical progress path */}
      <ol className="mt-10 space-y-6 lg:hidden">
        {processSteps.map((step, index) => (
          <li key={step.step} className="relative flex gap-4 pl-2">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobalt text-sm font-bold text-white">
                {index + 1}
              </span>
              {index < processSteps.length - 1 && (
                <span aria-hidden className="mt-1 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-6">
              <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-slate">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
