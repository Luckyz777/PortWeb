"use client";

import { copy, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">Anirut<span>.</span></div>
        <ul className="footer-links">
          <li><a href="#top">{t(copy.footer.top)}</a></li>
          <li><a href="#projects">{t(copy.nav.projects)}</a></li>
          <li><a href="#profile">{t(copy.nav.about)}</a></li>
          <li><a href="#contact">{t(copy.nav.contact)}</a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
        <p className="footer-copy">&copy; 2026 Anirut Butnongwa &mdash; {t(copy.footer.copy)}</p>
      </div>
    </footer>
  );
}
