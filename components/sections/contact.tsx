"use client";

import { copy, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function ContactSection() {
  const t = useT();
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.contact.tag)}</div>
        <h2 id="contact-heading" className="section-heading">{t(copy.contact.heading)}</h2>
        <p className="section-subheading">{t(copy.contact.sub)}</p>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>{t(copy.contact.directTitle)}</h3>
            <div className="contact-list">
              <div>
                <span>{t(copy.contact.labelEmail)}</span>
                <a href={t(copy.cta.mailto)}>{profile.email}</a>
              </div>
              <div>
                <span>{t(copy.contact.labelPhone)}</span>
                <a href="tel:+66981186694">{profile.phoneIntl}</a>
              </div>
              <div>
                <span>{t(copy.contact.labelLocation)}</span>
                <p>{profile.location}</p>
              </div>
              <div>
                <span>{t(copy.contact.labelStatus)}</span>
                <p>{t(copy.contact.statusValue)}</p>
              </div>
            </div>
          </div>
          <div className="contact-panel">
            <h3>{t(copy.contact.portfolioTitle)}</h3>
            <div className="contact-list">
              <div>
                <span>{t(copy.contact.labelGithub)}</span>
                <a href={profile.github} target="_blank" rel="noreferrer">github.com/Luckyz777</a>
              </div>
              <div>
                <span>{t(copy.contact.labelLinkedin)}</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/anirut-butnongwa</a>
              </div>
              <div>
                <span>{t(copy.contact.labelResume)}</span>
                <a href={profile.cv} target="_blank" rel="noreferrer">View on Canva</a>
              </div>
              <div>
                <span>{t(copy.contact.labelDownload)}</span>
                <a href="/anirut-resume.pdf" download>Resume PDF</a>
                <a href="/resume">Print View</a>
              </div>
              <div>
                <span>{t(copy.contact.labelRepos)}</span>
                <a href="https://github.com/Luckyz777/GT-ACT" target="_blank" rel="noreferrer">GT-ACT</a>
                <a href="https://github.com/Luckyz777/GT-PATH" target="_blank" rel="noreferrer">GT-PATH</a>
                <a href="https://github.com/Luckyz777/GT-FIXSYS" target="_blank" rel="noreferrer">GT-FIXSYS</a>
              </div>
            </div>
          </div>
        </div>
        <p className="references-note">{t(copy.contact.references)}</p>
      </div>
    </section>
  );
}
