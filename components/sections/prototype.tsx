"use client";

import { ProjectConsole } from "@/components/project-console";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { copy, projects } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function PrototypeSection() {
  const t = useT();
  return (
    <MotionSection id="prototype" aria-labelledby="prototype-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.prototype.tag)}</SectionTag>
        <h2 id="prototype-heading" className="section-heading">{t(copy.prototype.heading)}</h2>
        <p className="section-subheading">{t(copy.prototype.sub)}</p>
        <ProjectConsole projects={projects} />
      </div>
    </MotionSection>
  );
}
