import Link from "next/link";
import { Globe, Code2, Workflow, Sparkles, PlaySquare, BarChart3 } from "lucide-react";
import { services } from "@/content/services";

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
          return (
            <li key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-cobalt hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
              >
                <Icon size={18} aria-hidden />
                {service.shortLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
