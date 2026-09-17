import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what's slowing your business down. Get a short guided project brief in front of the person who'll deliver it.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Start a project"
        heading="Feed us the busywork"
        supporting="A few quick questions so we understand your process before we talk. No technical spec required."
      />

      <div className="mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </Section>
  );
}
