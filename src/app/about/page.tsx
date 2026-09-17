import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "UnbusyLabs is a founder-led UK technology studio turning messy business processes into useful digital systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="About UnbusyLabs"
          heading="Product thinking. Quality-engineered delivery."
        />
      </Section>

      <Section className="bg-white pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 text-slate">
            <p>
              UnbusyLabs is led by {siteConfig.founder.name}, a Chartered Engineer and Quality
              Engineering Manager with experience turning complex operational problems into clear,
              testable systems.
            </p>
            <p>
              Every project combines product thinking, practical development and disciplined
              quality — not just rapid code generation. That means starting from the business
              problem, mapping the real workflow, and building the smallest useful system that
              creates a measurable improvement.
            </p>
            <p className="text-lg font-medium text-ink">
              You work directly with the person responsible for understanding the problem, shaping
              the solution and delivering the product.
            </p>
          </div>

          <div className="rounded-xl2 border border-border bg-ivory p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              How we work
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li>• Diagnose the process before proposing a tool.</li>
              <li>• Design the workflow before writing code.</li>
              <li>• Build and demonstrate in testable stages.</li>
              <li>• Automate what is repetitive and well-defined.</li>
              <li>• Measure what actually changed.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Got a process worth fixing?
          </h2>
          <Button href="/contact" variant="secondary">
            Start a project
          </Button>
        </div>
      </Section>
    </>
  );
}
