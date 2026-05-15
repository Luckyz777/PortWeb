"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectConsoleProps = {
  projects: Project[];
};

export function ProjectConsole({ projects }: ProjectConsoleProps) {
  const [activeId, setActiveId] = useState<Project["id"]>(projects[0].id);
  const reduceMotion = useReducedMotion();
  const active = useMemo(
    () => projects.find((project) => project.id === activeId) ?? projects[0],
    [activeId, projects]
  );

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.28 }
      };

  return (
    <div className="console" aria-label="Interactive project workflow explorer">
      <div className="console-tabs" role="tablist" aria-label="Select a project">
        {projects.map((project) => (
          <button
            key={project.id}
            id={`${project.id}-tab`}
            className="console-tab"
            type="button"
            role="tab"
            aria-controls={`${project.id}-panel`}
            aria-selected={project.id === active.id}
            onClick={() => setActiveId(project.id)}
          >
            <span>{project.name}</span>
            <small>{project.strapline}</small>
          </button>
        ))}
      </div>

      <section
        id={`${active.id}-panel`}
        className="console-panel"
        role="tabpanel"
        aria-labelledby={`${active.id}-tab`}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.div key={active.id} className="console-grid" {...motionProps}>
            <div>
              <div className="case-kicker">{active.role}</div>
              <h3>{active.title}</h3>
              <p>{active.problem}</p>
              <p>{active.built}</p>
              <a className="text-link" style={{ marginTop: "1.2rem" }} href={active.repository} target="_blank" rel="noreferrer">
                Open repository
              </a>
            </div>

            <div className="console-stack">
              <div className="console-metric">
                <strong>{active.consoleMetric}</strong>
                <span>{active.consoleDetail}</span>
              </div>
              <ol className="flow-list" aria-label={`${active.name} workflow`}>
                {active.workflow.map((step, index) => (
                  <li key={step}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
