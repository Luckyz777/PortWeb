"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { Magnetic } from "@/components/ui/magnetic-button";

/**
 * Floating "Scroll" hint anchored to the bottom-right.
 * Hides as soon as the user scrolls past the top of the page.
 */
export function ScrollIndicator({
  target = "#projects",
  label = "Scroll",
}: {
  target?: string;
  label?: string;
}) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY <= 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const el = document.querySelector(target);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="scroll-indicator"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic as="a" href={target} className="scroll-indicator__link" onClick={handleClick}>
            <span>{label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path d="M7 7l10 10M17 17V7M17 17H7" />
            </svg>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
