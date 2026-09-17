import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/work";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Work",
  description: "Real problems, useful solutions. UnbusyLabs project index.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="Selected work" heading="Built in the lab" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {caseStudies.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group rounded-xl2 border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-[11px] font-semibold tracking-widest text-ink/60">
              {project.category}
            </p>
            <h2 className="mt-3 font-display text-xl font-bold text-ink">{project.name}</h2>
            <p className="mt-2 text-sm text-slate">{project.summary}</p>
            <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-semibold text-slate">
              {project.status}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
