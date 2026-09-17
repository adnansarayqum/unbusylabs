import { Button } from "@/components/ui/Button";
import { SquiggleArrow } from "@/components/ui/Squiggle";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-8 sm:pt-20">
      <div className="container-lab">
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            aria-hidden
            className="absolute -left-6 top-0 hidden -rotate-6 text-left sm:block lg:-left-28 lg:top-6"
          >
            <p className="font-hand text-xl leading-tight text-slate/80 lg:text-2xl">
              Spreadsheets,
              <br />
              inboxes, notes...
              <br />
              busywork.
            </p>
            <SquiggleArrow className="mt-1 rotate-[100deg] text-slate/60" />
          </div>
          <div
            aria-hidden
            className="absolute -right-6 top-0 hidden rotate-6 text-right sm:block lg:-right-32 lg:top-6"
          >
            <p className="font-hand text-xl leading-tight text-cobalt/80 lg:text-2xl">
              Websites, automations,
              <br />
              AI agents, content,
              <br />
              insights... real progress.
            </p>
            <SquiggleArrow className="ml-auto mt-1 rotate-[75deg] scale-x-[-1] text-cobalt/60" />
          </div>

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
