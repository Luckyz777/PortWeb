"use client";

import { motion, useReducedMotion } from "framer-motion";

import { MotionSection } from "@/components/ui/motion-section";
import { SectionTag } from "@/components/ui/section-tag";
import { copy, skillGroups } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

function SkillPanel({
  name,
  items,
}: {
  name: string;
  items: ReadonlyArray<readonly [string, string]>;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="skill-panel" aria-labelledby={`skill-${name}`}>
      <h3 id={`skill-${name}`}>{name}</h3>
      <motion.ul
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-15%" }}
        variants={groupVariants}
      >
        {items.map(([itemName, tool]) => (
          <motion.li key={itemName} variants={reduce ? undefined : itemVariants}>
            <span>{itemName}</span>
            <code>{tool}</code>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export function SkillsSection() {
  const t = useT();
  return (
    <MotionSection id="skills" aria-labelledby="skills-heading">
      <div className="section-inner">
        <SectionTag>{t(copy.skills.tag)}</SectionTag>
        <h2 id="skills-heading" className="section-heading">{t(copy.skills.heading)}</h2>
        <p className="section-subheading">{t(copy.skills.sub)}</p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillPanel key={group.name} name={group.name} items={group.items} />
          ))}

          <SkillPanel
            name={t(copy.skills.languages)}
            items={[
              [t(copy.skills.langThai), t(copy.skills.langThaiLevel)],
              [t(copy.skills.langEng), t(copy.skills.langEngLevel)],
            ]}
          />
        </div>
      </div>
    </MotionSection>
  );
}
