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

        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex items-center gap-4 overflow-hidden rounded-xl2 border border-border bg-white p-3 transition hover:-translate-y-1 hover:shadow-lg sm:block sm:p-0"
            >
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-ivory sm:h-auto sm:w-full sm:rounded-none sm:aspect-[280/130]">
                <Image
                  src={`/images/work/${project.slug}.png`}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 112px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1 sm:p-6">
                <p className="hidden text-[11px] font-semibold tracking-widest text-ink/50 sm:block">
                  {project.category}
                </p>
                <h3 className="font-display text-lg font-bold text-ink sm:mt-2 sm:text-xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-slate sm:hidden">{project.tagline}</p>
                <p className="mt-2 hidden text-sm text-slate sm:block">{project.summary}</p>
                <span className="mt-1 hidden items-center gap-1 text-sm font-semibold text-cobalt sm:mt-5 sm:inline-flex">
                  {project.tagline}
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
                </span>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 self-center text-cobalt transition group-hover:translate-x-1 sm:hidden"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
