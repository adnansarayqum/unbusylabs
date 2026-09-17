import type { Metadata } from "next";
import { getCaseStudy } from "@/content/work";
import { CaseStudyTemplate } from "@/components/work/CaseStudyTemplate";

const project = getCaseStudy("accountingops")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.summary,
  alternates: { canonical: "/work/accountingops" },
};

export default function AccountingOpsPage() {
  return <CaseStudyTemplate project={project} />;
}
