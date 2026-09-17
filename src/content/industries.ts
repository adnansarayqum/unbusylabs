export interface Industry {
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    name: "Professional services",
    description:
      "Consultancies, agencies and practices managing client work, proposals and delivery across scattered tools.",
  },
  {
    name: "Property and field services",
    description:
      "Surveyors, inspectors and field teams capturing evidence on site and reporting back to the office.",
  },
  {
    name: "Accountancy and finance operations",
    description:
      "Practices managing compliance deadlines, client documents and recurring filing obligations.",
  },
  {
    name: "Automotive and fleet operations",
    description:
      "Fleet and vehicle service operations coordinating bookings, maintenance schedules and customer communication.",
  },
  {
    name: "Local service businesses",
    description:
      "Independent and multi-location businesses that need a stronger digital front door and less manual admin.",
  },
];

export const industriesSupportingLine =
  "Don't see your industry? The more useful question is whether your business has a repeatable process that is slow, manual or fragmented.";
