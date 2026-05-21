"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useState } from "react";

import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { WordReveal } from "@/components/ui/word-reveal";
import { copy, projects } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function ProjectsList() {
  const t = useT();
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 320, damping: 30, mass: 0.35 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return;
    x.set(e.clientX);
    y.set(e.clientY);
  };

  const activeProject = hovered !== null ? projects[hovered] : null;

  return (
    <>
      <MotionSection id="projects" aria-labelledby="projects-heading">
        <div className="section-inner">
          <SectionTag>{t(copy.projects.tag)}</SectionTag>
          <h2 id="projects-heading" className="section-heading">
            <WordReveal text={t(copy.projects.heading)} />
          </h2>
          <p className="section-subheading">
            <WordReveal text={t(copy.projects.sub)} stagger={0.018} delay={0.05} />
          </p>

          <ul className="projects-list" onMouseMove={handleMove}>
            {projects.map((p, i) => (
              <li
                key={p.id}
                className="projects-list__row"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() =>
                  setHovered((h) => (h === i ? null : h))
                }
              >
                <a
                  className="projects-list__link"
                  href={`/projects/${p.id}`}
                  aria-label={`${p.name} — ${p.title}`}
                >
                  <span className="projects-list__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="projects-list__title-block">
                    <span className="projects-list__name">{p.name}</span>
                    <span className="projects-list__strap">{p.strapline}</span>
                  </span>
                  <span className="projects-list__meta">
                    <span className="projects-list__tag">{p.stack[0]}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="22"
                      height="22"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      {!reduce && (
        <motion.div
          className="projects-list__thumb-wrap"
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered !== null ? 1 : 0 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="projects-list__thumb">
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.span
                  key={activeProject.id}
                  className="projects-list__thumb-frame"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeProject.screenshots[0] ?? activeProject.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </>
  );
}
