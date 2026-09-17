import { z } from "zod";

export const interestOptions = [
  "Website",
  "Software",
  "Automation",
  "AI",
  "Content system",
  "Data and Power BI",
  "Not sure",
] as const;

export const budgetOptions = [
  "Under £1,000",
  "£1,000–£3,000",
  "£3,000–£7,500",
  "£7,500+",
  "Not sure yet",
] as const;

export const contactMethodOptions = ["Email", "Phone", "Either"] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid work email."),
  businessName: z.string().trim().min(2, "Please enter your business name."),
  website: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || /^https?:\/\/.+/i.test(value) || /^[\w-]+(\.[\w-]+)+/.test(value),
      "Enter a valid website address."
    ),
  improve: z.string().trim().min(10, "Tell us a little more about what you'd like to improve."),
  currentTools: z.string().trim().optional().default(""),
  users: z.string().trim().min(2, "Let us know who will use the solution."),
  interest: z.enum(interestOptions, {
    errorMap: () => ({ message: "Please choose the closest option." }),
  }),
  timescale: z.string().trim().min(2, "Let us know your desired timescale."),
  budget: z.enum(budgetOptions, {
    errorMap: () => ({ message: "Please select a budget range." }),
  }),
  contactMethod: z.enum(contactMethodOptions, {
    errorMap: () => ({ message: "Please choose a preferred contact method." }),
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you agree to the privacy policy." }),
  }),
  // Honeypot: must stay empty. Real users never see or fill this field.
  company: z.string().max(0).optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: Partial<ContactFormValues> = {
  currentTools: "",
  company: "",
};
