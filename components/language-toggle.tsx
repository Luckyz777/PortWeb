"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, toggle } = useI18n();
  const next = lang === "en" ? "TH" : "EN";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${next}`}
      className={compact ? "lang-toggle lang-toggle--compact" : "lang-toggle"}
    >
      <span className="lang-toggle__current">{lang.toUpperCase()}</span>
      <span className="lang-toggle__sep" aria-hidden="true">/</span>
      <span className="lang-toggle__next">{next}</span>
    </button>
  );
}
