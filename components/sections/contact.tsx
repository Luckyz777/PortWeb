"use client";

import { Magnetic } from "@/components/ui/magnetic-button";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { copy, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function ContactSection() {
  const t = useT();
  return (
    <MotionSection id="contact" aria-labelledby="contact-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.contact.tag)}</SectionTag>
        <h2 id="contact-heading" className="section-heading">{t(copy.contact.heading)}</h2>
        <p className="section-subheading">{t(copy.contact.sub)}</p>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>{t(copy.contact.directTitle)}</h3>
            <div className="contact-list">
              <div>
                <span>{t(copy.contact.labelEmail)}</span>
                <Magnetic as="a" href={t(copy.cta.mailto)} strength={0.25} radius={70}>
                  {profile.email}
                </Magnetic>
              </div>
              <div>
                <span>{t(copy.contact.labelPhone)}</span>
                <Magnetic as="a" href="tel:+66981186694" strength={0.25} radius={70}>
                  {profile.phoneIntl}
                </Magnetic>
              </div>
              <div>
                <span>{t(copy.contact.labelLocation)}</span>
                <p>{profile.location}</p>
              </div>
              <div>
                <span>{t(copy.contact.labelStatus)}</span>
                <p>{t(copy.contact.statusValue)}</p>
              </div>
              <div>
                <span>{t(copy.contact.labelMilitary)}</span>
                <p>{t(profile.militaryStatus)}</p>
              </div>
            </div>
          </div>
          <div className="contact-panel">
            <h3>{t(copy.contact.portfolioTitle)}</h3>
            <div className="contact-list">
              <div>
                <span>{t(copy.contact.labelGithub)}</span>
                <Magnetic as="a" href={profile.github} target="_blank" rel="noreferrer" strength={0.25} radius={70}>
                  github.com/Luckyz777
                </Magnetic>
              </div>
              <div>
                <span>{t(copy.contact.labelLinkedin)}</span>
                <Magnetic as="a" href={profile.linkedin} target="_blank" rel="noreferrer" strength={0.25} radius={70}>
                  linkedin.com/in/anirut-butnongwa
                </Magnetic>
              </div>
              <div>
                <span>{t(copy.contact.labelResume)}</span>
                <Magnetic as="a" href={profile.cv} target="_blank" rel="noreferrer" strength={0.25} radius={70}>
                  View on Canva
                </Magnetic>
              </div>
              <div>
                <span>{t(copy.contact.labelDownload)}</span>
                <a href="/anirut-resume.pdf" download>Resume PDF</a>
                <a href="/resume">Print View</a>
              </div>
              <div>
                <span>{t(copy.contact.labelPresentation)}</span>
                <Magnetic as="a" href="/Internship_Presentation.pptx" download strength={0.25} radius={70}>
                  {t(copy.contact.presentationCta)}
                </Magnetic>
              </div>
              <div>
                <span>{t(copy.contact.labelSource)}</span>
                <p>{t(copy.contact.sourcePrivateShort)}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="references-note">{t(copy.contact.references)}</p>
      </div>
    </MotionSection>
  );
}
