import { Section } from "@/components/ui/Section";

const outcomes = [
  {
    title: "Grow",
    description:
      "Create stronger customer journeys, credible digital experiences and better enquiry conversion.",
    color: "bg-cobalt",
  },
  {
    title: "Automate",
    description:
      "Remove repetitive work, speed up response times and connect fragmented processes.",
    color: "bg-ink",
  },
  {
    title: "Understand",
    description:
      "Turn operational data into dashboards, insights and clearer management decisions.",
    color: "bg-coral",
  },
];

export function Outcomes() {
  return (
    <Section className="bg-ink" ariaLabel="Outcomes">
      <div className="grid gap-6 lg:grid-cols-3">
        {outcomes.map((outcome) => (
          <div key={outcome.title} className="rounded-xl2 bg-white/5 p-8">
            <span className={`inline-block h-2 w-10 rounded-full ${outcome.color}`} />
            <h3 className="mt-5 font-display text-2xl font-bold text-white">{outcome.title}</h3>
            <p className="mt-3 text-white/70">{outcome.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
