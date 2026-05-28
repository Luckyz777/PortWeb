"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import { Magnetic } from "@/components/ui/magnetic-button";
import { WordReveal } from "@/components/ui/word-reveal";
import { copy, education, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

const HERO_IMAGE_SRC = "/Hero-section.jpg";

function Portrait() {
  const [errored, setErrored] = useState(false);
  const reduce = useReducedMotion();

  const content = errored ? (
    <div className="hero-portrait" aria-hidden="true">
      <span className="hero-portrait__initials">AB</span>
    </div>
  ) : (
    <div className="hero-portrait hero-portrait--wide">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE_SRC}
        alt={`${profile.name} hero portrait`}
        onError={() => setErrored(true)}
        loading="eager"
        decoding="async"
      />
    </div>
  );

  if (reduce) return content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const t = useT();
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "-28%"],
  );

  const m = (delay: number) =>
    reduce
      ? {}
      : {
          variants: fadeUp,
          initial: "hidden",
          animate: "show",
          custom: delay,
        };

  const headlineText = `${t(copy.hero.headlineL1)} ${t(copy.hero.headlineL2)} ${t(copy.hero.headlineAccent)}`;

  return (
    <section id="top" className="hero" aria-labelledby="hero-title" ref={heroRef}>
      <motion.div className="hero-bg-text" aria-hidden="true" style={{ y: bgY }}>
        ENGINEER
      </motion.div>

      <aside className="hero-masthead" aria-hidden="true">
        <span>VOL. I</span>
        <span>/</span>
        <span>MANUFACTURING SOFTWARE</span>
        <span>/</span>
        <span>TH</span>
      </aside>

      <div className="hero-frame">
        <div className="hero-text">
          <motion.div className="hero-eyebrow" {...m(0.05)}>
            {t(copy.hero.eyebrow)}
          </motion.div>

          <h1 id="hero-title" className="hero-name">
            <WordReveal
              text={headlineText}
              accent={t(copy.hero.headlineAccent)}
              stagger={0.05}
              delay={0.15}
            />
          </h1>

          <p className="hero-title">
            <WordReveal text={t(copy.hero.subhead)} stagger={0.025} delay={0.55} />
          </p>

          <p className="hero-desc">
            <WordReveal text={t(copy.hero.desc)} stagger={0.012} delay={0.85} />
          </p>

          <motion.div className="hero-issue" {...m(1.04)} aria-label="Portfolio issue metadata">
            <span>Process Engineering</span>
            <span>CNC / Tool Room / Automation</span>
            <span>Nakhon Ratchasima, TH</span>
          </motion.div>

          <motion.div className="hero-ctas" {...m(1.15)}>
            <Magnetic as="a" className="btn-primary" href="#projects">
              {t(copy.hero.ctaWork)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Magnetic>
            <Magnetic
              as="a"
              className="btn-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Magnetic>
            <Magnetic
              as="a"
              className="btn-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Magnetic>
            <Magnetic
              as="a"
              className="btn-secondary"
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
            >
              {t(copy.hero.ctaResume)}
            </Magnetic>
          </motion.div>
        </div>

        <motion.figure
          className="hero-specimen"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-specimen__media">
            <Portrait />
          </div>
          <figcaption className="hero-specimen__caption">
            <div className="hero-specimen__serial">No. 004</div>
            <dl className="hero-specimen__meta">
              <dt>Name</dt>
              <dd>ANIRUT.B</dd>
              <dt>Program</dt>
              <dd>B.Eng Mechanical</dd>
              <dt>Cohort</dt>
              <dd>SUT &apos;30</dd>
              <dt>Available</dt>
              <dd>July 2026</dd>
            </dl>
          </figcaption>
        </motion.figure>
      </div>

      <motion.div
        className="hero-ticker"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <blockquote className="hero-quote">
          &ldquo;{t(copy.about.pull)}&rdquo;
        </blockquote>
        <ul className="hero-stats-ticker" aria-label="Career highlights">
          <li className="hero-stats-ticker__metric">Structured NC review</li>
          <li className="hero-stats-ticker__sep" aria-hidden="true">/</li>
          <li className="hero-stats-ticker__metric">4 production tools</li>
          <li className="hero-stats-ticker__sep" aria-hidden="true">/</li>
          <li className="hero-stats-ticker__metric">3 daily users</li>
          <li className="hero-stats-ticker__sep" aria-hidden="true">/</li>
          <li>B.Eng SUT &middot; Major GPA {education.majorGPA}</li>
        </ul>
      </motion.div>
    </section>
  );
}
