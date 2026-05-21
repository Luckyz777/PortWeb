"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Bilingual } from "@/data/portfolio";

export type Lang = "en" | "th";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (b: Bilingual) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "th") return stored;
  // Default to English. The user must explicitly toggle to Thai.
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on first render so server and client markup match.
  // The client effect below will swap to the user's preferred language after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const initial = detectInitialLang();
    if (initial !== "en") setLangState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dataset.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "th" : "en");
  }, [lang, setLang]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (b: Bilingual) => b[lang],
    }),
    [lang, setLang, toggle]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}

/**
 * Convenience shorthand: returns just the translator function.
 */
export function useT() {
  return useI18n().t;
}
