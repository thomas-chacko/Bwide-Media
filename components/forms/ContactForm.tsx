"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Digital Marketing",
  "Social Media",
  "Meta Ads",
  "Creative & Content",
  "Branding & Design",
  "Video Production",
  "Other",
] as const;

const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "Above ₹3,00,000",
  "Not sure yet",
] as const;

const contactMethods = ["Phone", "WhatsApp", "Email"] as const;

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  message: z
    .string()
    .min(10, "Please tell us a bit more about your project")
    .max(2000, "Message too long"),
  budget: z.string().optional(),
  contactMethod: z.enum(contactMethods).default("Phone"),
  /** Honeypot — should remain empty */
  website: z.string().max(0).optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      services: [],
      contactMethod: "Phone",
    },
  });

  const onSubmit = async (data: any) => {
    // Honeypot check
    if (data.website && data.website.length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-emerald-400" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-text">
          Enquiry Sent Successfully
        </h3>
        <p className="mt-2 text-sm text-text-muted">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 cursor-pointer text-sm font-medium text-primary-soft transition-colors hover:text-primary"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-[var(--glass-border)] bg-glass px-4 py-3 text-sm text-text placeholder:text-text-dim transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30";
  const labelClasses = "mb-1.5 block text-sm font-medium text-text-muted";
  const errorClasses = "mt-1 text-xs text-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-[var(--glass-border)] bg-glass p-6 backdrop-blur-xl md:p-8"
      noValidate
    >
      {/* Honeypot (visually hidden) */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className={cn(inputClasses, errors.name && "border-red-400/50")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className={errorClasses}>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClasses}>
          Company / Brand
        </label>
        <input
          id="company"
          type="text"
          placeholder="Your company or brand name"
          className={inputClasses}
          {...register("company")}
        />
      </div>

      {/* Phone + Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 9446010489"
            className={cn(inputClasses, errors.phone && "border-red-400/50")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClasses}>
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={cn(inputClasses, errors.email && "border-red-400/50")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Services multi-select */}
      <fieldset>
        <legend className={cn(labelClasses, "mb-3")}>
          What do you need help with? <span className="text-primary">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => (
            <label key={service} className="cursor-pointer">
              <input
                type="checkbox"
                value={service}
                className="peer sr-only"
                {...register("services")}
              />
              <span className="inline-flex rounded-full border border-[var(--glass-border)] bg-bg px-4 py-2 text-xs font-medium text-text-muted transition-all duration-200 peer-checked:border-primary/30 peer-checked:bg-primary/10 peer-checked:text-primary-soft peer-focus-visible:ring-2 peer-focus-visible:ring-primary/50">
                {service}
              </span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className={errorClasses}>{errors.services.message}</p>
        )}
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about your project <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe your project, goals and any specific requirements..."
          className={cn(inputClasses, "resize-none", errors.message && "border-red-400/50")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className={labelClasses}>
          Estimated Budget
        </label>
        <select
          id="budget"
          className={cn(inputClasses, "appearance-none")}
          {...register("budget")}
        >
          <option value="" className="bg-[#0f0b1d] text-text">Select a range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range} className="bg-[#0f0b1d] text-text">
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Contact method */}
      <fieldset>
        <legend className={cn(labelClasses, "mb-3")}>
          Preferred Contact Method
        </legend>
        <div className="flex gap-4">
          {contactMethods.map((method) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                value={method}
                className="h-4 w-4 accent-primary"
                {...register("contactMethod")}
              />
              <span className="text-sm text-text-muted">{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Error state */}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_24px_var(--primary-glow)] disabled:pointer-events-none disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            SEND ENQUIRY
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
