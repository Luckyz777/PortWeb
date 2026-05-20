"use client";

import { ProjectConsole } from "@/components/project-console";
import { copy, projects } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function PrototypeSection() {
  const t = useT();
  return (
    <section id="prototype" aria-labelledby="prototype-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.prototype.tag)}</div>
        <h2 id="prototype-heading" className="section-heading">{t(copy.prototype.heading)}</h2>
        <p className="section-subheading">{t(copy.prototype.sub)}</p>
        <ProjectConsole projects={projects} />
      </div>
    </section>
  );
}
