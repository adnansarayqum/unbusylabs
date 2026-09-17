"use client";

import { ChevronsDown } from "lucide-react";
import { messyInputs } from "@/content/machine-items";
import { SquiggleArrow } from "@/components/ui/Squiggle";

/**
 * Mobile-only teaser: the messy inputs "pouring" into a funnel, with a
 * hand-drawn callout above and a scroll cue below. The machine itself and
 * its outputs appear further down the page (see MachineOutputsMobile),
 * under the "Useful technology" heading — mirroring the two-beat reveal
 * from the approved mobile mockup.
 */
export function HeroFunnelMobile() {
  return (
    <div className="mt-10 flex flex-col items-center lg:hidden" aria-hidden="true">
      <p className="font-hand text-xl leading-tight text-slate/80">
        Spreadsheets, inboxes, notes...
        <br />
        busywork.
      </p>
      <SquiggleArrow className="mt-1 rotate-[90deg] text-slate/60" />

      <div className="relative mt-4 flex w-full max-w-xs flex-wrap items-end justify-center gap-2">
        {messyInputs.map((item) => (
          <div
            key={item.label}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-md ${item.bg} ${item.rotate}`}
          >
            <item.icon size={18} className={item.fg} />
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div
        className="mt-2 h-10 w-40"
        style={{
          background: "#e3e0d8",
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 40% 100%)",
        }}
      />
      <div className="h-6 w-2 rounded-full bg-ink/10" />

      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate/60">
        Scroll to see the transformation
      </p>
      <ChevronsDown size={20} className="mt-1 animate-bounce text-slate/50" />
    </div>
  );
}
