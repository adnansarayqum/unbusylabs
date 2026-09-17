import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/work";
import { Button } from "@/components/ui/Button";

const stripClasses: Record<string, string> = {
  cobalt: "bg-cobalt/10",
  lime: "bg-lime/25",
  coral: "bg-coral/15",
  ink: "bg-ink/[0.06]",
};

const barClasses: Record<string, string> = {
  cobalt: "bg-cobalt/40",
  lime: "bg-emerald-500/50",
  coral: "bg-coral/50",
  ink: "bg-ink/30",
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
              className="group overflow-hidden rounded-xl2 border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`relative p-6 ${stripClasses[project.accent]}`}>
                <p className="max-w-[220px] font-display text-lg font-bold leading-snug text-ink">
                  {project.tagline}
                </p>
                <MiniMockup accent={project.accent} />
              </div>

              <div className="p-6">
                <p className="text-[11px] font-semibold tracking-widest text-ink/50">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{project.name}</h3>
                <p className="mt-2 text-sm text-slate">{project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
                  View project
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniMockup({ accent }: { accent: string }) {
  const bar = barClasses[accent];
  return (
    <div
      aria-hidden
      className="absolute bottom-4 right-4 hidden w-24 rounded-lg border border-white/60 bg-white/80 p-2 shadow-sm sm:block"
    >
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-coral/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-lime/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-cobalt/70" />
      </div>
      <div className="mt-2 space-y-1">
        <span className={`block h-1.5 w-full rounded-full ${bar}`} />
        <span className={`block h-1.5 w-2/3 rounded-full ${bar}`} />
        <span className={`block h-1.5 w-4/5 rounded-full ${bar}`} />
      </div>
    </div>
  );
}
