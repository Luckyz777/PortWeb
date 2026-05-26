"use client";

import { motion, useReducedMotion } from "framer-motion";

import { projects } from "@/data/portfolio";

type Frame = { src: string; alt: string };

function buildRows(): { row1: Frame[]; row2: Frame[] } {
  const all: Frame[] = projects.flatMap((p) =>
    p.screenshots.map((src, i) => ({
      src,
      alt: `${p.name} ${i + 1}`,
    }))
  );
  const row1 = all.filter((_, i) => i % 2 === 0);
  const row2 = all.filter((_, i) => i % 2 === 1);
  return { row1, row2 };
}

function StripRow({
  frames,
  direction,
  duration,
}: {
  frames: Frame[];
  direction: "left" | "right";
  duration: number;
}) {
  const reduce = useReducedMotion();
  // Duplicate frames so the loop is seamless.
  const loopFrames = [...frames, ...frames];

  if (reduce) {
    return (
      <div className="sliding-strip__row">
        <div className="sliding-strip__static">
          {frames.map((f, i) => (
            <span className="sliding-strip__frame" key={`${f.src}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.src} alt={f.alt} loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    );
  }

  const xKeyframes = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="sliding-strip__row">
      <motion.div
        className="sliding-strip__track"
        animate={{ x: xKeyframes }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loopFrames.map((f, i) => (
          <span className="sliding-strip__frame" key={`${f.src}-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={f.src} alt={f.alt} loading="lazy" decoding="async" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SlidingStrip() {
  const { row1, row2 } = buildRows();

  return (
    <section className="sliding-strip" aria-hidden="true">
      <StripRow frames={row1} direction="left" duration={42} />
      <StripRow frames={row2} direction="right" duration={50} />
    </section>
  );
}
