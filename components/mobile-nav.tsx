"use client";

import { useCallback, useEffect, useState } from "react";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { copy } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function MobileNav() {
  const t = useT();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        className="mobile-menu-btn"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger ${open ? "open" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="mobile-overlay" onClick={close}>
          <nav
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <a href="#projects" onClick={close}>{t(copy.nav.projects)}</a>
            <a href="#prototype" onClick={close}>{t(copy.nav.prototype)}</a>
            <a href="#experience" onClick={close}>{t(copy.nav.experience)}</a>
            <a href="#profile" onClick={close}>{t(copy.nav.about)}</a>
            <a href="#skills" onClick={close}>{t(copy.nav.skills)}</a>
            <a href="#contact" className="mobile-cta" onClick={close}>{t(copy.nav.contact)}</a>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
