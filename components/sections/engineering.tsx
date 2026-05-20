"use client";

import { copy, educationProjects } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function EngineeringSection() {
  const t = useT();
  return (
    <section id="engineering" aria-labelledby="engineering-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.engineering.tag)}</div>
        <h2 id="engineering-heading" className="section-heading">{t(copy.engineering.heading)}</h2>
        <p className="section-subheading">{t(copy.engineering.sub)}</p>
        <div className="edu-grid">
          {educationProjects.map((project) => (
            <article className="edu-card" key={project.title}>
              <div className="edu-meta">{project.meta}</div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
