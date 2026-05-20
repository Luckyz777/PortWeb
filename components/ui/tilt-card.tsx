"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";

type TiltCardProps = Omit<ComponentPropsWithoutRef<typeof motion.article>, "children"> & {
  children: ReactNode;
  maxTilt?: number;
  scale?: number;
};

/**
 * 3D-tilt card that rotates with cursor position.
 * Adds gentle elevation + scale on hover.
 * No tilt for reduced-motion users.
 */
export function TiltCard({
  children,
  maxTilt = 6,
  scale = 1.015,
  className,
  style,
  ...rest
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const x = useSpring(xRaw, { stiffness: 220, damping: 22, mass: 0.5 });
  const y = useSpring(yRaw, { stiffness: 220, damping: 22, mass: 0.5 });

  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    xRaw.set(px);
    yRaw.set(py);
  }

  function handleLeave() {
    xRaw.set(0);
    yRaw.set(0);
  }

  if (reduce) {
    return (
      <article
        className={className}
        style={style as React.CSSProperties | undefined}
        {...(rest as ComponentPropsWithoutRef<"article">)}
      >
        {children}
      </article>
    );
  }

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
        ...style,
      }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.25, ease: "easeOut" } }}
      {...rest}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.article>
  );
}
