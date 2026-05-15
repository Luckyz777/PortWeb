import { educationProjects } from "@/data/portfolio";

export function EngineeringSection() {
  return (
    <section id="engineering" aria-labelledby="engineering-heading">
      <div className="section-inner">
        <div className="section-tag">Engineering Background</div>
        <h2 id="engineering-heading" className="section-heading">
          The Mechanical<br />Foundation.
        </h2>
        <p className="section-subheading">
          University projects that shaped how I approach constraints, testing, and practical design tradeoffs.
        </p>
        <div className="edu-grid">
          {educationProjects.map((project) => (
            <article className="edu-card" key={project.title}>
              <div className="edu-meta">{project.meta}</div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
