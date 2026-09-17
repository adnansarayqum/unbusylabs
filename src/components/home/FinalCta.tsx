import { Button } from "@/components/ui/Button";
import { SquiggleArrow } from "@/components/ui/Squiggle";

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-ink py-16 text-white sm:py-20"
      aria-label="Get in touch"
    >
      {/* Corner blobs */}
      <span
        aria-hidden
        className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cobalt/50"
      />
      <span
        aria-hidden
        className="absolute -bottom-12 -right-8 h-28 w-28 rounded-full bg-lime/30"
      />
      <svg
        aria-hidden
        viewBox="0 0 40 20"
        className="absolute bottom-10 left-24 hidden h-6 w-12 text-lime sm:block"
      >
        <path
          d="M2 10c4-8 8-8 12 0s8 8 12 0 8-8 12 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="container-lab relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Got a process held together by spreadsheets and hope?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Show us what is slowing you down. We&apos;ll help determine whether it needs a
            website, automation, dashboard or bespoke application.
          </p>
        </div>

        <div className="relative flex shrink-0 items-center gap-3">
          <Button href="/contact" size="lg">
            Feed us the busywork
          </Button>
          <div className="hidden flex-col items-start lg:flex">
            <SquiggleArrow className="text-lime" />
            <p className="-mt-1 max-w-[10rem] rotate-[-4deg] font-hand text-lg leading-tight text-lime">
              Same busywork. Brighter outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
