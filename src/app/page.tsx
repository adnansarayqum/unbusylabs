import type { Metadata } from "next";
import { HeroMachineSection } from "@/components/home/HeroMachineSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Outcomes } from "@/components/home/Outcomes";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Founder } from "@/components/home/Founder";
import { Engagement } from "@/components/home/Engagement";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "UnbusyLabs | Bespoke Software, Automation, AI and Data",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroMachineSection />
      <WhatWeDo />
      <Outcomes />
      <SelectedWork />
      <Industries />
      <Process />
      <Founder />
      <Engagement />
      <FinalCta />
    </>
  );
}
