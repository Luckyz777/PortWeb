"use client";

import { useEffect } from "react";

/**
 * Legacy fallback: ensures any element with the `.reveal` class becomes visible
 * once it scrolls into view. Modern sections use Framer Motion's <MotionReveal>
 * / <RevealItem>, but legacy markup that still uses `.reveal` keeps working
 * via this observer. Also honors prefers-reduced-motion: skips animation
 * and marks everything visible immediately.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
