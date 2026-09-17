import type { Metadata } from "next";
import { getCaseStudy } from "@/content/work";
import { CaseStudyTemplate } from "@/components/work/CaseStudyTemplate";

const project = getCaseStudy("sitesnap")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.summary,
  alternates: { canonical: "/work/sitesnap" },
};

export default function SiteSnapPage() {
  return <CaseStudyTemplate project={project} />;
}
