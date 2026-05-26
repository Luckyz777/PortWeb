"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Page transition curtain. Next.js App Router re-mounts `template.tsx`
 * on every route change, so the wipe plays each time. On reduced-motion
 * preference we render children unwrapped.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <>
      <motion.div
        className="page-curtain"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 1.0,
          times: [0, 0.5, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}
