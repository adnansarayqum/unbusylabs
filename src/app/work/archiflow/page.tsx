import type { Metadata } from "next";
import { getCaseStudy } from "@/content/work";
import { CaseStudyTemplate } from "@/components/work/CaseStudyTemplate";

const project = getCaseStudy("archiflow")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.summary,
  alternates: { canonical: "/work/archiflow" },
};

export default function ArchiflowPage() {
  return <CaseStudyTemplate project={project} />;
}
