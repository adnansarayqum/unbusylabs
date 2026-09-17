import Link from "next/link";
import clsx from "clsx";
import { Globe, Code2, Workflow, Sparkles, PlaySquare, BarChart3 } from "lucide-react";
import { services } from "@/content/services";
import { serviceColors } from "@/content/service-colors";

const icons = {
  globe: Globe,
  code: Code2,
  workflow: Workflow,
  sparkles: Sparkles,
  play: PlaySquare,
  "bar-chart": BarChart3,
};

export function ServicePills() {
  return (
    <nav aria-label="Services" className="pb-4">
      <ul className="flex flex-wrap justify-center gap-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          const color = serviceColors[service.slug];
          return (
            <li key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-white pl-2 pr-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-cobalt"
              >
                <span
                  className={clsx(
                    "inline-flex h-7 w-7 items-center justify-center rounded-full",
                    color.bg
                  )}
                >
                  <Icon size={15} className={color.fg} aria-hidden />
                </span>
                {service.shortLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
