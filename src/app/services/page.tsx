import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Code2, Workflow, Sparkles, PlaySquare, BarChart3, Check } from "lucide-react";
import { services } from "@/content/services";
import { serviceColors } from "@/content/service-colors";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const icons = {
  globe: Globe,
  code: Code2,
  workflow: Workflow,
  sparkles: Sparkles,
  play: PlaySquare,
  "bar-chart": BarChart3,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, bespoke software, automation, AI agents, content systems and analytics — built around the business problem, not the tool.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="What we do"
          heading="Every service, one job: less busywork."
          supporting="Each service below explains the business problem it solves, what we build, and which live project demonstrates it."
        />
      </Section>

      {services.map((service, index) => {
        const Icon = icons[service.icon];
        const color = serviceColors[service.slug];
        return (
          <Section
            key={service.slug}
            id={service.slug}
            className={index % 2 === 1 ? "bg-white" : undefined}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color.bg}`}
                >
                  <Icon size={24} className={color.fg} aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-slate">{service.problem}</p>
                <p className="mt-3 text-slate">{service.build}</p>
                <Button href="/contact" className="mt-6" size="sm">
                  Start a project
                </Button>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl2 border border-border bg-ivory p-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    Typical deliverables
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate">
                        <Check size={16} className="mt-0.5 shrink-0 text-cobalt" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl2 border border-border p-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    Example workflow
                  </h3>
                  <p className="mt-3 text-sm text-slate">{service.exampleWorkflow}</p>
                </div>

                <p className="text-sm text-slate">
                  See it in practice:{" "}
                  <Link href={service.featuredWork.href} className="font-semibold text-cobalt">
                    {service.featuredWork.title}
                  </Link>
                </p>
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="bg-white">
        <div className="mx-auto max-w-2xl rounded-xl2 border border-border p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Not sure what you need?</h2>
          <p className="mt-3 text-slate">
            Bring us the business problem, not a technical specification. We&apos;ll help work out
            whether it needs a website, automation, dashboard or bespoke application.
          </p>
          <Button href="/contact" className="mt-6">
            Feed us the busywork
          </Button>
        </div>
      </Section>
    </>
  );
}
