"use client";

import { MotionReveal, RevealItem } from "@/components/ui/motion-reveal";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { TiltCard } from "@/components/ui/tilt-card";
import { copy, projects, profile } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useT();
  const isPrivate = project.repositoryPrivate || !project.repository;

  return (
    <RevealItem as="div" style={{ height: "100%" }}>
      <TiltCard className="project-card tilt-card" maxTilt={5} scale={1.012}>
        <div>
          <div className="project-id">{project.name} &nbsp;/&nbsp; {project.role}</div>
          <h3 className="project-name">
            <span className="accent">{project.name}</span> &mdash; {project.title}
          </h3>
          <p className="project-subtitle">{project.strapline}</p>
          <p className="project-desc">{project.built}</p>

          {project.impact && (
            <div className="project-impact" role="note">
              <span className="project-impact__label">Impact</span>
              <span className="project-impact__text">{project.impact}</span>
            </div>
          )}

          <div className="project-tags">
            {project.stack.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>

          {isPrivate ? (
            <div className="project-source-note">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>{t(profile.sourcePolicy)}</span>
            </div>
          ) : (
            <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
              {t(copy.projects.viewRepo)}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          )}
        </div>
        <div className="project-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
      </TiltCard>
    </RevealItem>
  );
}

export function ProjectsSection() {
  const t = useT();
  return (
    <MotionSection id="projects" aria-labelledby="projects-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.projects.tag)}</SectionTag>
        <h2 id="projects-heading" className="section-heading">{t(copy.projects.heading)}</h2>
        <p className="section-subheading">{t(copy.projects.sub)}</p>
        <MotionReveal className="projects-grid" stagger={0.12}>
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </MotionReveal>
      </div>
    </MotionSection>
  );
}
