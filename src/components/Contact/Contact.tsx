"use client";

import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { useContactForm } from "@/hooks/useContactForm";
import { site, socialLinks } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import styles from "./Contact.module.scss";

interface ContactProps {
  dict: Dictionary;
}

export function Contact({ dict }: ContactProps) {
  const t = dict.contact;
  const f = t.form;
  const { values, errors, status, setField, submit } = useContactForm(f);

  const isSubmitting = status === "submitting";

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            subtitle={t.subtitle}
          />

          <div className={styles.direct}>
            <span className={styles.directLabel}>{t.directLabel}</span>
            <a className={styles.directLink} href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <a className={styles.directLink} href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
              {site.contact.phone}
            </a>
            <div className={styles.socials}>
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          {status === "success" ? (
            <div className={styles.success} role="status">
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <p>{f.success}</p>
            </div>
          ) : (
            <div className={styles.form}>
              <div className={styles.row}>
                <Field
                  id="name"
                  label={f.name}
                  placeholder={f.namePlaceholder}
                  value={values.name}
                  error={errors.name}
                  onChange={(v) => setField("name", v)}
                />
                <Field
                  id="email"
                  type="email"
                  label={f.email}
                  placeholder={f.emailPlaceholder}
                  value={values.email}
                  error={errors.email}
                  onChange={(v) => setField("email", v)}
                />
              </div>

              <Field
                id="business"
                label={f.business}
                placeholder={f.businessPlaceholder}
                value={values.business}
                error={errors.business}
                onChange={(v) => setField("business", v)}
              />

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  {f.message}
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  placeholder={f.messagePlaceholder}
                  rows={4}
                  value={values.message}
                  data-invalid={Boolean(errors.message)}
                  onChange={(e) => setField("message", e.target.value)}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>

              {status === "error" && (
                <p className={styles.formError} role="alert">
                  {f.error}
                </p>
              )}

              <button
                type="button"
                className={styles.submit}
                onClick={submit}
                disabled={isSubmitting}
              >
                {isSubmitting ? f.submitting : f.submit}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  type = "text",
  onChange,
}: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        data-invalid={Boolean(error)}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
