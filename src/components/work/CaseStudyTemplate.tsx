import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/work";
import { caseStudies } from "@/content/work";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CaseStudyTemplate({ project }: { project: CaseStudy }) {
  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length] ?? caseStudies[0]!;

  return (
    <>
      <Section className="pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cobalt">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <StatusBadge label={project.status} />
          <StatusBadge label={project.kind} muted />
        </div>

        {project.proofPoint && (
          <p className="mt-4 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-ink">
            {project.proofPoint}
          </p>
        )}
      </Section>

      <Section className="bg-white pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <Field title="Overview" body={project.overview} />
          <Field title="The problem" body={project.problem} />
          <Field title="Who uses it" body={project.users} />
          <Field title="Our approach" body={project.approach} />
        </div>
      </Section>

      <Section>
        <Field title="The solution" body={project.solution} wide />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl2 border border-border bg-white p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              Key capabilities
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {project.capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl2 border border-border bg-white p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              Design & product decisions
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {project.decisions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Field title="Quality and testing approach" body={project.quality} />
          <Field title="Current status" body={project.currentStatus} />
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-xl font-bold text-ink">Gallery</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="flex aspect-video items-center justify-center rounded-xl2 border border-dashed border-border bg-white text-center text-sm text-slate"
            >
              <div>
                <p className="font-semibold text-ink">{image.label}</p>
                <p className="mt-1">{image.placeholder}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-white/60">Next project</p>
            <h2 className="mt-1 font-display text-2xl font-bold">{nextProject.name}</h2>
          </div>
          <Button href={`/work/${nextProject.slug}`} variant="secondary">
            View project
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </Section>
    </>
  );
}

function Field({ title, body, wide }: { title: string; body: string; wide?: boolean }) {
  return (
    <div className={wide ? "max-w-3xl" : undefined}>
      <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink">{title}</h2>
      <p className="mt-3 text-slate">{body}</p>
    </div>
  );
}

function StatusBadge({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
        muted ? "border-border bg-white text-slate" : "border-cobalt/30 bg-cobalt/10 text-cobalt"
      }`}
    >
      {label}
    </span>
  );
}
