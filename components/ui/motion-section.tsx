"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type MotionSectionProps = Omit<ComponentPropsWithoutRef<typeof motion.section>, "children"> & {
  children: ReactNode;
  delay?: number;
};

/**
 * Section wrapper that fades + slides up into view.
 * Use as a drop-in replacement for <section>.
 */
export function MotionSection({ children, delay = 0, ...rest }: MotionSectionProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <section {...(rest as ComponentPropsWithoutRef<"section">)}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
