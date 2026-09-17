"use client";

import { Globe, Code2, Workflow, Sparkles, PlaySquare, BarChart3 } from "lucide-react";
import { services } from "@/content/services";
import { serviceColors } from "@/content/service-colors";
import { MachineBox } from "@/components/machine/MachineBox";
import { SquiggleArrow } from "@/components/ui/Squiggle";
import { useInView } from "@/lib/use-in-view";

const icons = {
  globe: Globe,
  code: Code2,
  workflow: Workflow,
  sparkles: Sparkles,
  play: PlaySquare,
  "bar-chart": BarChart3,
};

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
          const Icon = icons[service.icon];
          const color = serviceColors[service.slug];
          return (
            <div
              key={service.slug}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-white px-2 py-3 text-center shadow-sm"
            >
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${color.bg}`}>
                <Icon size={16} className={color.fg} />
              </span>
              <span className="text-[11px] font-semibold text-ink">{service.shortLabel}</span>
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
