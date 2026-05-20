"use client";

import { copy, projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useT();
  return (
    <article className="project-card reveal">
      <div>
        <div className="project-id">{project.name} &nbsp;/&nbsp; {project.role}</div>
        <h3 className="project-name">
          <span className="accent">{project.name}</span> &mdash; {project.title}
        </h3>
        <p className="project-subtitle">{project.strapline}</p>
        <p className="project-desc">{project.built}</p>
        <div className="project-tags">
          {project.stack.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
        <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
          {t(copy.projects.viewRepo)}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>
      <div className="project-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
    </article>
  );
}

export function ProjectsSection() {
  const t = useT();
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-inner">
        <div className="section-tag">{t(copy.projects.tag)}</div>
        <h2 id="projects-heading" className="section-heading">{t(copy.projects.heading)}</h2>
        <p className="section-subheading">{t(copy.projects.sub)}</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
