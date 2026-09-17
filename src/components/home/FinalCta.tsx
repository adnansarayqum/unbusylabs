import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-ink py-16 text-white sm:py-20" aria-label="Get in touch">
      <div className="container-lab flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Got a process held together by spreadsheets and hope?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Show us what is slowing you down. We&apos;ll help determine whether it needs a
            website, automation, dashboard or bespoke application.
          </p>
        </div>
        <Button href="/contact" size="lg" className="shrink-0">
          Feed us the busywork
        </Button>
      </div>
    </section>
  );
}
