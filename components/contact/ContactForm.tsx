"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import { copy, profile } from "@/data/portfolio";
import { CONTACT_LIMITS } from "@/lib/contact/constants";
import { validateContactPayload } from "@/lib/contact/validation";
import { useT } from "@/lib/i18n";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FieldKey = keyof FormFields;

const FIELD_ERROR_MAP: Record<string, keyof typeof copy.contact> = {
  required: "formErrorRequired",
  name_length: "formErrorNameLength",
  email_invalid: "formErrorEmail",
  message_length: "formErrorMessageLength",
};

function resolveApiBasePath(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return base.replace(/\/$/, "");
}

function buildGmailDraftUrl(fields: FormFields): string {
  const subject = encodeURIComponent(`Portfolio inquiry from ${fields.name}`);
  const body = encodeURIComponent(
    [`Name: ${fields.name}`, `Email: ${fields.email}`, "", fields.message].join("\n"),
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email,
  )}&su=${subject}&body=${body}`;
}

export function ContactForm() {
  const t = useT();
  const formId = useId();
  const statusId = `${formId}-status`;
  const loadedAtRef = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>(
    {},
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [mailFallbackHref, setMailFallbackHref] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  const mapServerFieldError = useCallback(
    (code: string): string => {
      const key = FIELD_ERROR_MAP[code];
      if (key) {
        return t(copy.contact[key]);
      }
      return t(copy.contact.formErrorGeneric);
    },
    [t],
  );

  const validateClient = useCallback((): boolean => {
    const result = validateContactPayload(
      {
        ...fields,
        website: honeypotRef.current?.value ?? "",
        formLoadedAt: loadedAtRef.current,
      },
      { checkTiming: false },
    );

    if (result.ok) {
      setFieldErrors({});
      return true;
    }

    const next: Partial<Record<FieldKey, string>> = {};
    if (result.fieldErrors?.name) {
      next.name = mapServerFieldError(result.fieldErrors.name);
    }
    if (result.fieldErrors?.email) {
      next.email = mapServerFieldError(result.fieldErrors.email);
    }
    if (result.fieldErrors?.message) {
      next.message = mapServerFieldError(result.fieldErrors.message);
    }
    setFieldErrors(next);
    return false;
  }, [fields, mapServerFieldError]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setMailFallbackHref(null);
    setSuccess(false);

    if (!validateClient()) return;

    const gmailDraftUrl = buildGmailDraftUrl(fields);

    setSubmitting(true);

    try {
      const response = await fetch(`${resolveApiBasePath()}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          website: honeypotRef.current?.value ?? "",
          formLoadedAt: loadedAtRef.current,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        fieldErrors?: Partial<Record<FieldKey, string>>;
        error?: string;
      };

      if (!response.ok) {
        if (data.fieldErrors) {
          const next: Partial<Record<FieldKey, string>> = {};
          for (const key of ["name", "email", "message"] as const) {
            const code = data.fieldErrors[key];
            if (code) next[key] = mapServerFieldError(code);
          }
          setFieldErrors(next);
        }
        if (data.error === "email_not_configured") {
          setMailFallbackHref(gmailDraftUrl);
          setFormError(t(copy.contact.formEmailUnavailable));
          return;
        }
        setFormError(t(copy.contact.formErrorGeneric));
        return;
      }

      setSuccess(true);
      setFields({ name: "", email: "", message: "" });
      loadedAtRef.current = Date.now();
    } catch {
      setFormError(t(copy.contact.formErrorGeneric));
    } finally {
      setSubmitting(false);
    }
  };

  const onFieldChange =
    (key: FieldKey) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: event.target.value }));
      if (fieldErrors[key]) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
      }
    };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={formError || success ? statusId : undefined}
    >
      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>{t(copy.contact.formHoneypotLabel)}</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          ref={honeypotRef}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-name`}>{t(copy.contact.formName)}</label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={CONTACT_LIMITS.nameMax}
          value={fields.name}
          onChange={onFieldChange("name")}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? `${formId}-name-error` : undefined}
        />
        {fieldErrors.name && (
          <p className="contact-form__error" id={`${formId}-name-error`} role="alert">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-email`}>{t(copy.contact.formEmail)}</label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={CONTACT_LIMITS.emailMax}
          value={fields.email}
          onChange={onFieldChange("email")}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
        />
        {fieldErrors.email && (
          <p className="contact-form__error" id={`${formId}-email-error`} role="alert">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-message`}>{t(copy.contact.formMessage)}</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          maxLength={CONTACT_LIMITS.messageMax}
          value={fields.message}
          onChange={onFieldChange("message")}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? `${formId}-message-error` : undefined}
        />
        {fieldErrors.message && (
          <p className="contact-form__error" id={`${formId}-message-error`} role="alert">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <button className="btn-primary contact-form__submit" type="submit" disabled={submitting}>
        {submitting ? t(copy.contact.formSending) : t(copy.contact.formSubmit)}
      </button>

      <div
        id={statusId}
        className="contact-form__status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {success && (
          <p className="contact-form__success">
            {t(copy.contact.formSuccess)}
            {mailFallbackHref && (
              <>
                {" "}
                <a
                  className="contact-form__fallback"
                  href={mailFallbackHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(copy.contact.formEmailFallbackCta)}
                </a>
              </>
            )}
          </p>
        )}
        {formError && (
          <div className="contact-form__error contact-form__error--global" role="alert">
            <p>{formError}</p>
            {mailFallbackHref && (
              <a
                className="contact-form__fallback"
                href={mailFallbackHref}
                target="_blank"
                rel="noreferrer"
              >
                {t(copy.contact.formEmailFallbackCta)}
              </a>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
