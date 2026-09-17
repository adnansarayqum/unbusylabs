/**
 * Analytics abstraction. Swap the implementation of `track` to point at a
 * real provider (Plausible, PostHog, GA4, etc.) without touching call sites.
 * Only event names and coarse metadata are tracked — never form content.
 */
export type AnalyticsEvent =
  | { name: "cta_primary_selected"; props?: { location: string } }
  | { name: "project_viewed"; props: { slug: string } }
  | { name: "service_viewed"; props: { slug: string } }
  | { name: "contact_form_started" }
  | { name: "contact_form_submitted" }
  | { name: "outbound_link_selected"; props: { destination: "linkedin" | "github" } };

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event.name, "props" in event ? event.props : undefined);
    return;
  }

  // Intentionally a no-op until a provider is connected. Wiring point:
  // window.plausible?.(event.name, { props: event.props })
}
