"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Magnetic } from "@/components/ui/magnetic-button";
import { MotionReveal, RevealItem } from "@/components/ui/motion-reveal";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { WordReveal } from "@/components/ui/word-reveal";
import { copy, education, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

const calloutAccents = ["green", "teal", "amber"] as const;

export function AboutSection() {
  const t = useT();
  const reduce = useReducedMotion();

  return (
    <MotionSection id="profile" aria-labelledby="profile-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.about.tag)}</SectionTag>
        <h2 id="profile-heading" className="section-heading">
          <WordReveal text={t(copy.about.heading)} />
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p><WordReveal text={t(copy.about.p1)} stagger={0.012} delay={0.1} /></p>
            <div className="about-highlight">&ldquo;{t(copy.about.pull)}&rdquo;</div>
            <p>{t(copy.about.p2)}</p>

            <div className="education-detail">
              <div className="education-detail__period">{t(copy.education.label)} &middot; {education.period}</div>
              <div className="education-detail__degree">{education.degree}</div>
              <div className="education-detail__uni">{education.university} &middot; {education.location}</div>
              <div className="education-detail__gpa">GPAX {education.GPA} &middot; Major GPA {education.majorGPA}</div>
              <div className="profile-facts" aria-label="Application facts">
                <span>{profile.status}</span>
                <span>{t(profile.militaryStatus)}</span>
                <span>Automotive / Precision Manufacturing / Tool Room</span>
              </div>
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

            <MotionReveal className="about-callouts" style={{ marginTop: "20px" }} stagger={0.12}>
              {[
                {
                  title: t(copy.about.callout1Title),
                  desc: t(copy.about.callout1Desc),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  ),
                },
                {
                  title: t(copy.about.callout2Title),
                  desc: t(copy.about.callout2Desc),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  ),
                },
                {
                  title: t(copy.about.callout3Title),
                  desc: t(copy.about.callout3Desc),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  ),
                },
              ].map((c, i) => (
                <RevealItem key={c.title} as="div">
                  <motion.div
                    className="callout-card"
                    data-accent={calloutAccents[i]}
                    whileHover={reduce ? undefined : { y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="callout-icon" aria-hidden="true">{c.icon}</div>
                    <div>
                      <div className="callout-title">{c.title}</div>
                      <div className="callout-desc">{c.desc}</div>
                    </div>
                  </motion.div>
                </RevealItem>
              ))}
            </MotionReveal>
          </div>
        </div>

        <div className="about-cta-row">
          <Magnetic as="a" href="/resume" className="big-circle-cta" strength={0.5} radius={140}>
            <span className="big-circle-cta__label">{t(copy.hero.ctaResume)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
              <path d="M7 7l10 10M17 17V7M17 17H7"/>
            </svg>
          </Magnetic>
        </div>
      </div>
    </MotionSection>
  );
}
