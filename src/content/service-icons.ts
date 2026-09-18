import type { ServiceSlug } from "@/content/services";

/**
 * Real icon tiles cropped from the approved reference artwork (not a
 * generic icon library) so the service iconography matches the brand
 * everywhere it appears, not just in the hero machine image.
 */
export const serviceIconImages: Record<ServiceSlug, { src: string; width: number; height: number }> = {
  websites: { src: "/images/icons/websites.png", width: 102, height: 159 },
  software: { src: "/images/icons/software.png", width: 94, height: 152 },
  automation: { src: "/images/icons/automation.png", width: 98, height: 141 },
  "ai-agents": { src: "/images/icons/ai-agents.png", width: 86, height: 147 },
  content: { src: "/images/icons/content.png", width: 92, height: 147 },
  data: { src: "/images/icons/data.png", width: 72, height: 132 },
};
