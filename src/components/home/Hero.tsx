import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-8 sm:pt-20">
      <div className="container-lab">
        <div className="relative mx-auto max-w-3xl text-center">
          <p
            aria-hidden
            className="absolute -left-4 top-4 hidden -rotate-6 text-xs font-medium text-slate sm:block lg:-left-24 lg:top-10"
          >
            SPREADSHEETS,
            <br />
            INBOXES, NOTES...
            <br />
            BUSYWORK.
          </p>
          <p
            aria-hidden
            className="absolute -right-4 top-4 hidden rotate-6 text-right text-xs font-medium text-slate sm:block lg:-right-32 lg:top-10"
          >
            WEBSITES, AUTOMATIONS,
            <br />
            AI AGENTS, CONTENT,
            <br />
            INSIGHTS...
            <br />
            REAL PROGRESS.
          </p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Messy process in.
            <br />
            <span className="text-cobalt">Better business out.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate sm:text-xl">
            We build useful websites, software, automations, AI agents and data systems that turn
            busywork into momentum.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Feed us the busywork
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
