import clsx from "clsx";

export function Section({
  id,
  className,
  children,
  ariaLabel,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={clsx("py-16 sm:py-24", className)}>
      <div className="container-lab">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  heading: string;
  supporting?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-cobalt">{eyebrow}</p>
      )}
      <Heading className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {heading}
      </Heading>
      {supporting && <p className="mt-4 text-lg text-slate">{supporting}</p>}
    </div>
  );
}
