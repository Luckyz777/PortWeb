"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { CountUp } from "@/components/ui/count-up";
import { Magnetic } from "@/components/ui/magnetic-button";
import { WordReveal } from "@/components/ui/word-reveal";
import { copy, profile } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

const HEADSHOT_SRC = "/headshot.jpg";

function Portrait() {
  const [errored, setErrored] = useState(false);
  const reduce = useReducedMotion();

  const content = errored ? (
    <div className="hero-portrait" aria-hidden="true">
      <span className="hero-portrait__initials">AB</span>
    </div>
  ) : (
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

function StatBlock({ value, label, delay }: { value: React.ReactNode; label: string; delay: number }) {
  const reduce = useReducedMotion();
  const Wrapper = reduce ? "div" : motion.div;
  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
      };
  return (
    <Wrapper {...motionProps}>
      <span className="stat-num">{value}</span>
      <span className="stat-label">{label}</span>
    </Wrapper>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const t = useT();
  const reduce = useReducedMotion();

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
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg-text" aria-hidden="true">ENGINEER</div>
      <div className="hero-frame">
        <div className="hero-text">
          <motion.div className="hero-eyebrow" {...m(0.05)}>{t(copy.hero.eyebrow)}</motion.div>

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

          <motion.div className="hero-ctas" {...m(1.15)}>
            <Magnetic as="a" className="btn-primary" href="#projects">
              {t(copy.hero.ctaWork)}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Magnetic>
            <Magnetic as="a" className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </Magnetic>
            <Magnetic as="a" className="btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Magnetic>
            <Magnetic as="a" className="btn-secondary" href={profile.cv} target="_blank" rel="noreferrer">
              {t(copy.hero.ctaResume)}
            </Magnetic>
          </motion.div>

          <div className="hero-stats">
            <StatBlock
              delay={1.3}
              label={t(copy.hero.stat1)}
              value={<CountUp to={4} duration={1.4} />}
            />
            <StatBlock
              delay={1.45}
              label={t(copy.hero.stat2)}
              value={<CountUp to={2026} from={2020} duration={1.6} format={(n) => Math.round(n).toString()} />}
            />
            <StatBlock
              delay={1.6}
              label={t(copy.hero.stat3)}
              value="May"
            />
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
