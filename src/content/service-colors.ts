import type { ServiceSlug } from "@/content/services";

export const serviceColors: Record<ServiceSlug, { bg: string; fg: string }> = {
  websites: { bg: "bg-cobalt", fg: "text-white" },
  software: { bg: "bg-emerald-600", fg: "text-white" },
  automation: { bg: "bg-coral", fg: "text-white" },
  "ai-agents": { bg: "bg-violet-500", fg: "text-white" },
  content: { bg: "bg-red-500", fg: "text-white" },
  data: { bg: "bg-sky-500", fg: "text-white" },
};
