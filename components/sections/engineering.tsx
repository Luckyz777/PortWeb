"use client";

import { MotionReveal, RevealItem } from "@/components/ui/motion-reveal";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { copy, educationProjects } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function EngineeringSection() {
  const t = useT();
  return (
    <MotionSection id="engineering" aria-labelledby="engineering-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.engineering.tag)}</SectionTag>
        <h2 id="engineering-heading" className="section-heading">{t(copy.engineering.heading)}</h2>
        <p className="section-subheading">{t(copy.engineering.sub)}</p>
        <MotionReveal className="edu-grid" stagger={0.1}>
          {educationProjects.map((project) => (
            <RevealItem as="article" className="edu-card" key={project.title}>
              <div className="edu-meta">{project.meta}</div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
            </RevealItem>
          ))}
        </MotionReveal>
      </div>
    </MotionSection>
  );
}
