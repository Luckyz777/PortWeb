"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { copy } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function Header() {
  const t = useT();
  return (
    <header className="site-header">
      <nav className="nav-frame" aria-label="Primary">
        <a className="nav-logo" href="#top" aria-label="Home">
          Anirut<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#projects">{t(copy.nav.projects)}</a>
          <a href="#prototype">{t(copy.nav.prototype)}</a>
          <a href="#experience">{t(copy.nav.experience)}</a>
          <a href="#methodology">{t(copy.nav.methodology)}</a>
          <a href="#profile">{t(copy.nav.about)}</a>
          <a href="#skills">{t(copy.nav.skills)}</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle compact />
          <LanguageToggle compact />
          <a className="nav-cta" href="#contact">{t(copy.nav.contact)}</a>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
