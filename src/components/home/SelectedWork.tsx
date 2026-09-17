import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/work";
import { Button } from "@/components/ui/Button";

const accentClasses: Record<string, string> = {
  cobalt: "from-cobalt/15 to-cobalt/5",
  lime: "from-lime/25 to-lime/5",
  coral: "from-coral/20 to-coral/5",
  ink: "from-ink/15 to-ink/5",
};

export function SelectedWork() {
  return (
    <section className="py-16 sm:py-24" aria-label="Selected work">
      <div className="container-lab">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cobalt">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built in the lab
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate">
              Real problems. Useful solutions. A few things we&apos;re proud to ship.
            </p>
          </div>
          <Button href="/work" variant="secondary">
            See more work
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`group flex flex-col justify-between rounded-xl2 border border-border bg-gradient-to-br p-6 transition hover:-translate-y-1 hover:shadow-lg ${accentClasses[project.accent]}`}
            >
              <div>
                <p className="text-[11px] font-semibold tracking-widest text-ink/60">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{project.name}</h3>
                <p className="mt-2 text-sm text-slate">{project.summary}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                {project.tagline}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
