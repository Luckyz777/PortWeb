"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

type MotionRevealProps = Omit<ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  children: ReactNode;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "section";
};

/**
 * Container that staggers its direct children as they enter the viewport.
 * Pair with <RevealItem> for each child.
 */
export function MotionReveal({
  children,
  stagger = 0.1,
  as = "div",
  ...rest
}: MotionRevealProps) {
  const reduce = useReducedMotion();
  const Tag =
    as === "ul" ? motion.ul : as === "ol" ? motion.ol : as === "section" ? motion.section : motion.div;

  if (reduce) {
    const PlainTag = as as keyof React.JSX.IntrinsicElements;
    return <PlainTag {...(rest as Record<string, never>)}>{children}</PlainTag>;
  }

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
      {...(rest as Record<string, never>)}
    >
      {children}
    </Tag>
  );
}

type RevealItemProps = Omit<ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  children: ReactNode;
  as?: "div" | "li" | "article" | "section" | "span";
};

export function RevealItem({ children, as = "div", ...rest }: RevealItemProps) {
  const reduce = useReducedMotion();
  const Tag =
    as === "li"
      ? motion.li
      : as === "article"
      ? motion.article
      : as === "section"
      ? motion.section
      : as === "span"
      ? motion.span
      : motion.div;

  if (reduce) {
    const PlainTag = as as keyof React.JSX.IntrinsicElements;
    return <PlainTag {...(rest as Record<string, never>)}>{children}</PlainTag>;
  }

  return (
    <Tag variants={itemVariants} {...(rest as Record<string, never>)}>
      {children}
    </Tag>
  );
}

export { containerVariants, itemVariants };
