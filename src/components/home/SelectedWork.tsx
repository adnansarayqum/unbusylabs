import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/work";
import { Button } from "@/components/ui/Button";

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
              <div className="relative aspect-[280/130] w-full overflow-hidden bg-ivory">
                <Image
                  src={`/images/work/${project.slug}.png`}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-[11px] font-semibold tracking-widest text-ink/50">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{project.name}</h3>
                <p className="mt-2 text-sm text-slate">{project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
                  {project.tagline}
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
