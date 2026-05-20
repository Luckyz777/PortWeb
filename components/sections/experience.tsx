"use client";

import { copy, experience } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function ExperienceSection() {
  const t = useT();

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.experience.tag)}</div>
        <h2 id="experience-heading" className="section-heading">
          {t(copy.experience.heading)}
        </h2>
        <p className="section-subheading">{t(copy.experience.sub)}</p>

        <div className="exp-grid">
          {experience.map((job) => (
            <article className="exp-card reveal" key={`${job.company}-${job.period}`}>
              <div className="exp-meta">
                <div className="exp-period">{job.period}</div>
                <div className="exp-company">{job.company}</div>
                <div className="exp-location">{job.location}</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">{job.role}</div>
                <ul className="exp-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
