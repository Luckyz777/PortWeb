"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MotionReveal, RevealItem } from "@/components/ui/motion-reveal";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { copy, experience } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function ExperienceSection() {
  const t = useT();
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 30%"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <MotionSection id="experience" aria-labelledby="experience-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.experience.tag)}</SectionTag>
        <h2 id="experience-heading" className="section-heading">
          {t(copy.experience.heading)}
        </h2>
        <p className="section-subheading">{t(copy.experience.sub)}</p>

        <div className="exp-timeline" ref={railRef}>
          <div className="exp-timeline__rail" aria-hidden="true">
            {!reduce && (
              <motion.div
                className="exp-timeline__progress"
                style={{ height: progressHeight }}
              />
            )}
            {reduce && <div className="exp-timeline__progress" style={{ height: "100%" }} />}
          </div>

          <MotionReveal className="exp-grid" stagger={0.15}>
            {experience.map((job, i) => (
              <RevealItem
                as="article"
                className="exp-card"
                key={`${job.company}-${job.period}`}
              >
                <motion.span
                  className="exp-timeline__dot exp-timeline__dot--lit"
                  aria-hidden="true"
                  style={{ top: `${i * 0}px` }}
                  initial={reduce ? undefined : { scale: 0 }}
                  whileInView={reduce ? undefined : { scale: 1 }}
                  viewport={{ once: true, margin: "-25%" }}
                  transition={{ duration: 0.4, ease: "backOut", delay: 0.2 }}
                />
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
              </RevealItem>
            ))}
          </MotionReveal>
        </div>
      </div>
    </MotionSection>
  );
}
