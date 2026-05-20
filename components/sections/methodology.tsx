"use client";

import { MotionReveal, RevealItem } from "@/components/ui/motion-reveal";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { copy, methodologySteps } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function MethodologySection() {
  const t = useT();

  return (
    <MotionSection id="methodology" aria-labelledby="methodology-heading">
      <div className="section-inner methodology-inner">
        <div>
          <SectionTag>{t(copy.methodology.tag)}</SectionTag>
          <h2 id="methodology-heading" className="section-heading">
            {t(copy.methodology.heading)}
          </h2>
          <p className="section-subheading">{t(copy.methodology.sub)}</p>
        </div>

        <MotionReveal className="methodology-grid" stagger={0.1}>
          {methodologySteps.map((step) => (
            <RevealItem as="article" className="method-card" key={step.label}>
              <span className="method-card__label">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </RevealItem>
          ))}
        </MotionReveal>
      </div>
    </MotionSection>
  );
}
