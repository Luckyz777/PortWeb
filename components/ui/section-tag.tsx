"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Section tag (eyebrow label) with animated accent bar that scales from 0→1
 * when the tag enters the viewport.
 *
 * Replaces the static `.section-tag::before` pseudo-element. Wrapper still
 * carries the `.section-tag` class so existing CSS spacing / typography apply.
 */
export function SectionTag({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <div className="section-tag section-tag--motion">
      <motion.span
        aria-hidden="true"
        className="section-tag__bar"
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left center" }}
      />
      <span>{children}</span>
    </div>
  );
}
