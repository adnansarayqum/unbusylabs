"use client";

import Image from "next/image";
import { services } from "@/content/services";
import { serviceIconImages } from "@/content/service-icons";
import { MachineBox } from "@/components/machine/MachineBox";
import { SquiggleArrow } from "@/components/ui/Squiggle";
import { useInView } from "@/lib/use-in-view";

/**
 * Mobile-only counterpart to the desktop hero machine image: the machine
 * box, a beam fanning down into the six services, and the closing
 * hand-drawn callout — mirroring the "Useful technology" beat of the
 * approved mobile mockup.
 */
export function MachineOutputsMobile() {
  const { ref, isActive } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-12 flex flex-col items-center lg:hidden" aria-hidden="true">
      <MachineBox active={isActive} compact />

      <svg width="120" height="28" viewBox="0 0 120 28" fill="none" aria-hidden>
        <path d="M60 0v6M30 6 60 6 90 6M15 26 60 8 105 26" stroke="#3563FF" strokeOpacity="0.3" strokeWidth="2" />
      </svg>

      <div className="grid w-full max-w-xs grid-cols-3 gap-2">
        {services.map((service) => {
          const icon = serviceIconImages[service.slug];
          return (
            <div
              key={service.slug}
              className="flex items-center justify-center rounded-xl border border-border bg-white p-2 shadow-sm"
            >
              <div className="relative h-16 w-full">
                <Image src={icon.src} alt="" fill sizes="80px" className="object-contain" />
              </div>
            </div>
          );
        })}
      </div>

      <SquiggleArrow className="mt-4 rotate-[-90deg] text-cobalt/60" />
      <p className="mt-1 max-w-[14rem] text-center font-hand text-lg leading-tight text-cobalt/80">
        Websites, automations, AI agents, content, insights... real progress.
      </p>
    </div>
  );
}
