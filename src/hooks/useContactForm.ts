"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "@/i18n/types";

export interface ContactValues {
  name: string;
  email: string;
  business: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY: ContactValues = { name: "", email: "", business: "", message: "" };

/**
 * Encapsulates all contact-form behaviour: controlled values, field-level
 * validation, and submit lifecycle. The actual network call is intentionally
 * a stub (the backend will be wired up later) — it simulates an async send so
 * the UI states are fully exercised.
 */
export function useContactForm(t: Dictionary["contact"]["form"]) {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const setField = useCallback(
    (field: keyof ContactValues, value: string) => {
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    },
    [],
  );

  const validate = useCallback(
    (v: ContactValues): ContactErrors => {
      const next: ContactErrors = {};
      if (!v.name.trim()) next.name = t.required;
      if (!v.email.trim()) next.email = t.required;
      else if (!EMAIL_RE.test(v.email.trim())) next.email = t.invalidEmail;
      if (!v.message.trim()) next.message = t.required;
      return next;
    },
    [t],
  );

  const submit = useCallback(async () => {
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      // Placeholder for the real endpoint — replace with a fetch/POST later.
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  }, [validate, values]);

  const reset = useCallback(() => {
    setValues(EMPTY);
    setErrors({});
    setStatus("idle");
  }, []);

  return { values, errors, status, setField, submit, reset };
}
