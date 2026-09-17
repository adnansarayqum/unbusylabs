"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  contactFormDefaults,
  interestOptions,
  budgetOptions,
  contactMethodOptions,
  type ContactFormValues,
} from "@/lib/validation";
import { track } from "@/lib/analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [startedTracked, setStartedTracked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults as ContactFormValues,
  });

  const onFieldFocus = () => {
    if (!startedTracked) {
      track({ name: "contact_form_started" });
      setStartedTracked(true);
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("submitting");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setServerError(data.message ?? "Something went wrong. Please try again.");
        setSubmitState("error");
        return;
      }

      track({ name: "contact_form_submitted" });
      setSubmitState("success");
      reset();
    } catch {
      setServerError("We couldn't reach the server. Please check your connection and try again.");
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="rounded-xl2 border border-cobalt/30 bg-cobalt/5 p-8 text-center"
      >
        <h2 className="font-display text-xl font-bold text-ink">Thanks — that&apos;s with us.</h2>
        <p className="mt-2 text-slate">
          We&apos;ll review what you&apos;ve shared and come back to you within one working day
          with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate onFocus={onFieldFocus} className="space-y-6">
      {serverError && (
        <div role="alert" className="rounded-lg border border-coral/40 bg-coral/5 p-4 text-sm text-ink">
          {serverError}
        </div>
      )}

      {/* Honeypot — hidden from real users and assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" {...register("name")} className={inputClass} />
        </Field>
        <Field label="Work email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            {...register("email")}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Business name" htmlFor="businessName" error={errors.businessName?.message}>
          <input id="businessName" type="text" {...register("businessName")} className={inputClass} />
        </Field>
        <Field label="Website (optional)" htmlFor="website" error={errors.website?.message}>
          <input
            id="website"
            type="text"
            inputMode="url"
            placeholder="yourbusiness.com"
            {...register("website")}
            className={inputClass}
          />
        </Field>
      </div>

      <Field
        label="What would you like to improve?"
        htmlFor="improve"
        error={errors.improve?.message}
      >
        <textarea id="improve" rows={3} {...register("improve")} className={inputClass} />
      </Field>

      <Field
        label="What are you currently using?"
        htmlFor="currentTools"
        error={errors.currentTools?.message}
        optional
      >
        <input id="currentTools" type="text" {...register("currentTools")} className={inputClass} />
      </Field>

      <Field label="Who will use the solution?" htmlFor="users" error={errors.users?.message}>
        <input id="users" type="text" {...register("users")} className={inputClass} />
      </Field>

      <Field label="Interested in" htmlFor="interest" error={errors.interest?.message}>
        <select id="interest" {...register("interest")} className={inputClass} defaultValue="">
          <option value="" disabled>
            Choose the closest option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Desired timescale" htmlFor="timescale" error={errors.timescale?.message}>
          <input id="timescale" type="text" placeholder="e.g. 6-8 weeks" {...register("timescale")} className={inputClass} />
        </Field>

        <Field label="Indicative budget" htmlFor="budget" error={errors.budget?.message}>
          <select id="budget" {...register("budget")} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-ink">Preferred contact method</legend>
        <div className="flex flex-wrap gap-4">
          {contactMethodOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-slate">
              <input type="radio" value={option} {...register("contactMethod")} className="h-4 w-4" />
              {option}
            </label>
          ))}
        </div>
        {errors.contactMethod && (
          <p className="mt-1 text-sm text-coral">{errors.contactMethod.message}</p>
        )}
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4" />
        <span>
          I agree to the{" "}
          <a href="/privacy" className="font-semibold text-cobalt">
            privacy policy
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="text-sm text-coral">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting || submitState === "submitting"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting || submitState === "submitting" ? "Sending…" : "Feed us the busywork"}
      </button>
    </form>
  );
}

const inputClass =
  "block w-full min-h-[44px] rounded-lg border border-border bg-white px-3 py-2 text-ink placeholder:text-slate/60 focus-visible:outline-2 focus-visible:outline-cobalt";

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {optional && <span className="ml-1 font-normal text-slate">(optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm text-coral">
          {error}
        </p>
      )}
    </div>
  );
}
