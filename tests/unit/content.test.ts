import { describe, expect, it } from "vitest";
import { services, getService } from "@/content/services";
import { caseStudies, getCaseStudy } from "@/content/work";

describe("content helpers", () => {
  it("exposes exactly the six required services", () => {
    expect(services).toHaveLength(6);
    const slugs = services.map((s) => s.slug).sort();
    expect(slugs).toEqual(
      ["ai-agents", "automation", "content", "data", "software", "websites"].sort()
    );
  });

  it("resolves a service by slug", () => {
    expect(getService("websites")?.title).toContain("Websites");
    expect(getService("does-not-exist")).toBeUndefined();
  });

  it("exposes exactly the four required case studies", () => {
    expect(caseStudies).toHaveLength(4);
    const slugs = caseStudies.map((c) => c.slug).sort();
    expect(slugs).toEqual(["accountingops", "archiflow", "mr-appeal", "sitesnap"].sort());
  });

  it("resolves a case study by slug", () => {
    expect(getCaseStudy("archiflow")?.name).toBe("Archiflow");
    expect(getCaseStudy("does-not-exist")).toBeUndefined();
  });

  it("never presents Mr Appeal as a live proven product", () => {
    const mrAppeal = getCaseStudy("mr-appeal");
    expect(mrAppeal?.status).toBe("Prototype / concept");
  });
});
