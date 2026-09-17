import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/lib/validation";

const validPayload = {
  name: "Jane Smith",
  email: "jane@example.com",
  businessName: "Example Ltd",
  website: "example.com",
  improve: "We need to automate our client onboarding process.",
  currentTools: "Spreadsheets and email",
  users: "Our operations team",
  interest: "Automation",
  timescale: "6-8 weeks",
  budget: "£3,000–£7,500",
  contactMethod: "Email",
  consent: true,
  company: "",
} as const;

describe("contactFormSchema", () => {
  it("accepts a fully valid payload", () => {
    const result = contactFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a short improve description", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, improve: "fix it" });
    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects a filled-in honeypot field", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, company: "bot" });
    expect(result.success).toBe(false);
  });

  it("rejects an unrecognised budget option", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, budget: "£1" });
    expect(result.success).toBe(false);
  });
});
