import { Section } from "@/components/ui/Section";

export function Founder() {
  return (
    <Section className="bg-white" ariaLabel="About the founder">
      <div className="mx-auto max-w-3xl rounded-xl2 border border-border p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-cobalt">About</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Product thinking. Quality-engineered delivery.
        </h2>
        <p className="mt-6 text-lg text-slate">
          UnbusyLabs is led by Adnan Sarayqum, a Chartered Engineer and Quality Engineering
          Manager with experience turning complex operational problems into clear, testable
          systems. Every project combines product thinking, practical development and disciplined
          quality—not just rapid code generation.
        </p>
        <p className="mt-4 text-lg font-medium text-ink">
          You work directly with the person responsible for understanding the problem, shaping the
          solution and delivering the product.
        </p>
      </div>
    </Section>
  );
}
