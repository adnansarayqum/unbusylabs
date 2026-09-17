import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SquiggleArrow } from "@/components/ui/Squiggle";

export function FinalCta() {
  return (
    <section aria-label="Get in touch">
      {/* Desktop / tablet: the exact reference banner artwork, with a real
          (invisible but focusable) link over the button so it stays
          clickable and keyboard-accessible rather than baked-in pixels. */}
      <div className="relative hidden lg:block">
        <h2 className="sr-only">Got a process held together by spreadsheets and hope?</h2>
        <Image
          src="/images/final-cta.png"
          alt=""
          width={1536}
          height={121}
          className="h-auto w-full"
        />
        <a
          href="/contact"
          className="absolute rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ left: "70.2%", top: "24.8%", width: "13.4%", height: "34.7%" }}
        >
          <span className="sr-only">Feed us the busywork</span>
        </a>
      </div>

      {/* Mobile: legible code-built equivalent (the reference banner's ~13:1
          aspect ratio would shrink its text below reading size on a phone). */}
      <div className="relative overflow-hidden bg-ink py-16 text-white lg:hidden">
        <span
          aria-hidden
          className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cobalt/50"
        />
        <span
          aria-hidden
          className="absolute -bottom-12 -right-8 h-28 w-28 rounded-full bg-lime/30"
        />

        <div className="container-lab relative flex flex-col items-start gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">
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
            <div className="hidden flex-col items-start sm:flex">
              <SquiggleArrow className="text-lime" />
              <p className="-mt-1 max-w-[10rem] rotate-[-4deg] font-hand text-lg leading-tight text-lime">
                Same busywork. Brighter outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
