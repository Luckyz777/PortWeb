"use client";

import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  format?: (value: number) => string;
  className?: string;
  prefix?: string;
  suffix?: string;
};

/**
 * Animated number that counts from `from` to `to` once it enters the viewport.
 * Respects prefers-reduced-motion (shows final value immediately).
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  delay = 0,
  format,
  className,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();

  const motionValue = useMotionValue(reduce ? to : from);
  const rounded = useTransform(motionValue, (latest) =>
    format ? format(latest) : Math.round(latest).toLocaleString("en-US"),
  );

  useEffect(() => {
    if (!inView || reduce) {
      motionValue.set(to);
      return;
    }
    const controls = animate(motionValue, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration, delay, motionValue]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsubscribe = rounded.on("change", (latest) => {
      el.textContent = `${prefix}${latest}${suffix}`;
    });
    el.textContent = `${prefix}${reduce ? (format ? format(to) : Math.round(to).toLocaleString("en-US")) : (format ? format(from) : Math.round(from).toLocaleString("en-US"))}${suffix}`;
    return () => unsubscribe();
  }, [rounded, prefix, suffix, reduce, to, from, format]);

  return <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`} />;
}
