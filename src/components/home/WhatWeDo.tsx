import Link from "next/link";
import { Globe, Code2, Workflow, Sparkles, PlaySquare, BarChart3, ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { serviceColors } from "@/content/service-colors";
import { Section, SectionHeading } from "@/components/ui/Section";
import { MachineOutputsMobile } from "@/components/home/MachineOutputsMobile";

const icons = {
  globe: Globe,
  code: Code2,
  workflow: Workflow,
  sparkles: Sparkles,
  play: PlaySquare,
  "bar-chart": BarChart3,
};

export function WhatWeDo() {
  return (
    <Section id="what-we-do">
      <SectionHeading
        eyebrow="What we do"
        heading="Useful technology. No theatre."
        supporting="We start with the business problem, not the tool. Then we design the smallest useful system that can create a measurable improvement."
      />

      <div className="mt-10">
        <MachineOutputsMobile />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          const color = serviceColors[service.slug];
          return (
            <Link
              key={service.slug}
              id={service.slug}
              href={`/services#${service.slug}`}
              className="group flex flex-col rounded-xl2 border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${color.bg}`}
              >
                <Icon size={22} className={color.fg} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate">{service.benefit}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
                Learn more
                <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
