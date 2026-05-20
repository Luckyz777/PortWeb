"use client";

import { copy, education } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function AboutSection() {
  const t = useT();
  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.about.tag)}</div>
        <h2 id="profile-heading" className="section-heading">{t(copy.about.heading)}</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{t(copy.about.p1)}</p>
            <div className="about-highlight">&ldquo;{t(copy.about.pull)}&rdquo;</div>
            <p>{t(copy.about.p2)}</p>

            <div className="education-detail">
              <div className="education-detail__period">{t(copy.education.label)} &middot; {education.period}</div>
              <div className="education-detail__degree">{education.degree}</div>
              <div className="education-detail__uni">{education.university} &middot; {education.location}</div>
              <div className="education-detail__gpa">GPAX {education.GPA} &middot; Major GPA {education.majorGPA}</div>
              <div className="education-detail__courseLabel">{t(copy.education.coursework)}</div>
              <ul className="education-detail__courseList">
                {education.coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="timeline-panel">
              <div className="timeline-item">
                <div className="time">2026</div>
                <h3>{t(copy.about.timeline1Title)}</h3>
                <p>{t(copy.about.timeline1Desc)}</p>
              </div>
              <div className="timeline-item">
                <div className="time">2024</div>
                <h3>{t(copy.about.timeline2Title)}</h3>
                <p>{t(copy.about.timeline2Desc)}</p>
              </div>
              <div className="timeline-item">
                <div className="time">May 2026</div>
                <h3>{t(copy.about.timeline3Title)}</h3>
                <p>{t(copy.about.timeline3Desc)}</p>
              </div>
            </div>

            <div className="about-callouts" style={{ marginTop: "20px" }}>
              <div className="callout-card">
                <div className="callout-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                </div>
                <div>
                  <div className="callout-title">{t(copy.about.callout1Title)}</div>
                  <div className="callout-desc">{t(copy.about.callout1Desc)}</div>
                </div>
              </div>
              <div className="callout-card">
                <div className="callout-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div>
                  <div className="callout-title">{t(copy.about.callout2Title)}</div>
                  <div className="callout-desc">{t(copy.about.callout2Desc)}</div>
                </div>
              </div>
              <div className="callout-card">
                <div className="callout-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <div className="callout-title">{t(copy.about.callout3Title)}</div>
                  <div className="callout-desc">{t(copy.about.callout3Desc)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
