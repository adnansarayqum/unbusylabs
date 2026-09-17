import type { ContactFormValues } from "./validation";

export type EnquiryPayload = Omit<ContactFormValues, "company">;

export interface EmailProvider {
  sendEnquiry(payload: EnquiryPayload): Promise<{ ok: true } | { ok: false; error: string }>;
}

/**
 * Development-mode fallback: logs the enquiry instead of sending an email.
 * Used automatically whenever RESEND_API_KEY (or an equivalent provider key)
 * is not configured, so local development and preview deploys never fail
 * silently and never require real credentials.
 */
class ConsoleEmailProvider implements EmailProvider {
  async sendEnquiry(payload: EnquiryPayload) {
    console.info("[contact] New enquiry received (dev-mode handler):", {
      name: payload.name,
      email: payload.email,
      businessName: payload.businessName,
      interest: payload.interest,
    });
    return { ok: true as const };
  }
}

/**
 * Resend-backed provider. To enable in production:
 * 1. `npm install resend`
 * 2. Set RESEND_API_KEY and CONTACT_NOTIFY_EMAIL in your environment.
 * 3. Replace the body below with a call to the Resend SDK/API.
 */
class ResendEmailProvider implements EmailProvider {
  constructor(private apiKey: string) {}

  async sendEnquiry(payload: EnquiryPayload) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "UnbusyLabs <enquiries@unbusylabs.com>",
          to: process.env.CONTACT_NOTIFY_EMAIL ?? "hello@unbusylabs.com",
          subject: `New enquiry: ${payload.businessName}`,
          text: JSON.stringify(payload, null, 2),
        }),
      });

      if (!response.ok) {
        return { ok: false as const, error: `Provider responded with ${response.status}` };
      }
      return { ok: true as const };
    } catch (error) {
      return { ok: false as const, error: error instanceof Error ? error.message : "Unknown error" };
    }
  }
}

export function getEmailProvider(): EmailProvider {
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    return new ResendEmailProvider(apiKey);
  }
  return new ConsoleEmailProvider();
}
