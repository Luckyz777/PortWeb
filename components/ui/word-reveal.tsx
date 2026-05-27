"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type WordRevealProps = {
  text: string;
  /** Substring whose individual words receive the `.accent` class. */
  accent?: string;
  /** Per-word stagger in seconds. */
  stagger?: number;
  /** Delay before the first word reveals (seconds). */
  delay?: number;
  className?: string;
  /** Re-trigger on every viewport entry. Defaults to once. */
  triggerOnce?: boolean;
};

const wordVariants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      delay: i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

/**
 * Splits `text` into individual words and reveals them with a vertical mask
 * (y: 110% → 0%) as the element enters the viewport. Honors `\n` as a hard
 * line break. Words appearing in `accent` get the `.accent` class.
 *
 * Render this inside whatever block element you need (e.g. h1, p). The
 * outer wrapper here is a span — the parent controls semantics & sizing.
 */
export function WordReveal({
  text,
  accent,
  stagger = 0.04,
  delay = 0,
  className,
  triggerOnce = true,
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: triggerOnce, margin: "-12% 0px -12% 0px" });
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  const accentWords = accent
    ? accent.split(/\s+/).filter(Boolean)
    : [];
  const lines = text.split("\n");

  let wordCounter = 0;

  return (
    <span ref={ref} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="word-reveal__line">
          {line
            .split(/\s+/)
            .filter(Boolean)
            .map((word, wi) => {
              const isAccent = accentWords.includes(word);
              const i = wordCounter++;
              return (
                <span key={`${li}-${wi}`} className="word-reveal__mask">
                  <motion.span
                    className={
                      isAccent ? "word-reveal__word accent" : "word-reveal__word"
                    }
                    variants={wordVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    custom={delay + i * stagger}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
        </span>
      ))}
    </span>
  );
}
