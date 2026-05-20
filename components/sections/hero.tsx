"use client";

import { useState } from "react";

import { copy, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

const HEADSHOT_SRC = "/headshot.jpg";

function Portrait() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="hero-portrait" aria-hidden="true">
        <span className="hero-portrait__initials">AB</span>
      </div>
    );
  }

  return (
    <div className="hero-portrait">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HEADSHOT_SRC}
        alt={`${profile.name} portrait`}
        onError={() => setErrored(true)}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export function Hero() {
  const t = useT();

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg-text" aria-hidden="true">ENGINEER</div>
      <div className="hero-frame">
        <div className="hero-text">
          <div className="hero-eyebrow">{t(copy.hero.eyebrow)}</div>

          <h1 id="hero-title" className="hero-name">
            {t(copy.hero.headlineL1)}{" "}
            {t(copy.hero.headlineL2)}{" "}
            <span className="accent">{t(copy.hero.headlineAccent)}</span>
          </h1>

          <p className="hero-title">{t(copy.hero.subhead)}</p>

          <p className="hero-desc">{t(copy.hero.desc)}</p>

          <div className="hero-ctas">
            <a className="btn-primary" href="#projects">
              {t(copy.hero.ctaWork)}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn-secondary" href={profile.cv} target="_blank" rel="noreferrer">
              {t(copy.hero.ctaResume)}
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <span className="stat-num">3</span>
              <span className="stat-label">{t(copy.hero.stat1)}</span>
            </div>
            <div>
              <span className="stat-num">2026</span>
              <span className="stat-label">{t(copy.hero.stat2)}</span>
            </div>
            <div>
              <span className="stat-num">May</span>
              <span className="stat-label">{t(copy.hero.stat3)}</span>
            </div>
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
