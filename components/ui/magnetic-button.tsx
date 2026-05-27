"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useRef } from "react";

type MagneticProps = {
  children: ReactNode;
  as?: "a" | "button" | "div";
  strength?: number;
  radius?: number;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: ComponentPropsWithoutRef<"button">["onClick"];
  type?: ComponentPropsWithoutRef<"button">["type"];
  download?: boolean;
} & Record<string, unknown>;

/**
 * Wraps a link/button so it gently pulls toward the cursor when hovered.
 * Falls back to a normal element for reduced-motion users.
 */
export function Magnetic({
  children,
  as = "a",
  strength = 0.35,
  radius = 90,
  className,
  ...rest
}: MagneticProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Hooks must run unconditionally — keep them at the top.
  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const x = useSpring(xRaw, { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(yRaw, { stiffness: 200, damping: 18, mass: 0.4 });
  // Inner child springs faster — creates "drag" between wrapper and content.
  const innerX = useSpring(xRaw, { stiffness: 320, damping: 26, mass: 0.35 });
  const innerY = useSpring(yRaw, { stiffness: 320, damping: 26, mass: 0.35 });

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > radius) {
      xRaw.set(0);
      yRaw.set(0);
      return;
    }
    xRaw.set(dx * strength);
    yRaw.set(dy * strength);
  }

  function handleLeave() {
    xRaw.set(0);
    yRaw.set(0);
  }

  if (reduce) {
    const Tag = as as ElementType;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag =
    as === "button" ? motion.button : as === "div" ? motion.div : motion.a;

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...(rest as Record<string, never>)}
    >
      <motion.span style={{ x: innerX, y: innerY, display: "inline-flex", alignItems: "center", gap: "inherit" }}>
        {children}
      </motion.span>
    </MotionTag>
  );
}
