import type { Metadata } from "next";
import { getCaseStudy } from "@/content/work";
import { CaseStudyTemplate } from "@/components/work/CaseStudyTemplate";

const project = getCaseStudy("mr-appeal")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.summary,
  alternates: { canonical: "/work/mr-appeal" },
};

export default function MrAppealPage() {
  return <CaseStudyTemplate project={project} />;
}
