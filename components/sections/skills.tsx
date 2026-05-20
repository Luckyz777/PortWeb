"use client";

import { copy, skillGroups } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function SkillsSection() {
  const t = useT();
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.skills.tag)}</div>
        <h2 id="skills-heading" className="section-heading">{t(copy.skills.heading)}</h2>
        <p className="section-subheading">{t(copy.skills.sub)}</p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section className="skill-panel" key={group.name} aria-labelledby={`skill-${group.name}`}>
              <h3 id={`skill-${group.name}`}>{group.name}</h3>
              <ul>
                {group.items.map(([name, tool]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <code>{tool}</code>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Language Proficiency */}
          <section className="skill-panel" aria-labelledby="skill-Languages">
            <h3 id="skill-Languages">{t(copy.skills.languages)}</h3>
            <ul>
              <li><span>{t(copy.skills.langThai)}</span><code>{t(copy.skills.langThaiLevel)}</code></li>
              <li><span>{t(copy.skills.langEng)}</span><code>{t(copy.skills.langEngLevel)}</code></li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
