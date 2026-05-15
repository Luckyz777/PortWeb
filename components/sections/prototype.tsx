import { ProjectConsole } from "@/components/project-console";
import { projects } from "@/data/portfolio";

export function PrototypeSection() {
  return (
    <section id="prototype" aria-labelledby="prototype-heading">
      <div className="section-inner">
        <div className="section-tag">Working Prototype</div>
        <h2 id="prototype-heading" className="section-heading">
          Click Through<br />the Logic.
        </h2>
        <p className="section-subheading">
          Each tab shows how the application turns a manufacturing problem into
          a checkable workflow &mdash; not just a static feature list.
        </p>
        <ProjectConsole projects={projects} />
      </div>
    </section>
  );
}
