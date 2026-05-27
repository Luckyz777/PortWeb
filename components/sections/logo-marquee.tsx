"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

type LogoItem = {
  name: string;
  lightSrc: string;
  darkSrc?: string;
  darkInvert?: boolean;
  scale?: number;
};

const logos: LogoItem[] = [
  { name: "openpyxl", lightSrc: "/moving-logo/openpyxl.webp", scale: 1.08 },
  { name: "Playwright", lightSrc: "/moving-logo/Playwright_Logo.svg", darkSrc: "/moving-logo/playwright/playwright-original.svg", scale: 0.9 },
  { name: "PyInstaller", lightSrc: "/moving-logo/pyinstaller.svg", darkSrc: "/moving-logo/pyinstaller.svg", darkInvert: true, scale: 0.82 },
  { name: "PyQt", lightSrc: "/moving-logo/PyQt-Logo.wine.svg", darkSrc: "/moving-logo/PyQt-Logo.wine.svg", darkInvert: true, scale: 0.82 },
  { name: "PySide6", lightSrc: "/moving-logo/pyside6.png", scale: 0.86 },
  { name: "TypeScript", lightSrc: "/moving-logo/TypeScript-Logo.wine.svg", darkSrc: "/moving-logo/typescript/typescript-original.svg", scale: 0.84 },
  { name: "CSS3", lightSrc: "/moving-logo/css3/css3-original-wordmark.svg", darkSrc: "/moving-logo/css3/css3-plain-wordmark.svg", scale: 0.78 },
  { name: "FastAPI", lightSrc: "/moving-logo/fastapi/fastapi-original-wordmark.svg", darkSrc: "/moving-logo/fastapi/fastapi-plain-wordmark.svg", scale: 1.1 },
  { name: "Framer Motion", lightSrc: "/moving-logo/framermotion/framermotion-original-wordmark.svg", darkSrc: "/moving-logo/framermotion/framermotion-original-wordmark.svg", darkInvert: true, scale: 1.04 },
  { name: "Git", lightSrc: "/moving-logo/git/git-original-wordmark.svg", darkSrc: "/moving-logo/git/git-plain-wordmark.svg", scale: 0.92 },
  { name: "GitHub", lightSrc: "/moving-logo/github/github-original-wordmark.svg", darkSrc: "/moving-logo/github/github-original-wordmark.svg", darkInvert: true, scale: 0.76 },
  { name: "HTML5", lightSrc: "/moving-logo/html5/html5-original-wordmark.svg", darkSrc: "/moving-logo/html5/html5-plain-wordmark.svg", scale: 0.78 },
  { name: "JavaScript", lightSrc: "/moving-logo/javascript/javascript-original.svg", darkSrc: "/moving-logo/javascript/javascript-plain.svg", scale: 0.66 },
  { name: "Next.js", lightSrc: "/moving-logo/nextjs/nextjs-original.svg", darkSrc: "/moving-logo/nextjs/nextjs-original.svg", darkInvert: true, scale: 0.66 },
  { name: "pandas", lightSrc: "/moving-logo/pandas/pandas-original-wordmark.svg", darkSrc: "/moving-logo/pandas/pandas-plain-wordmark.svg", darkInvert: true, scale: 0.98 },
  { name: "Python", lightSrc: "/moving-logo/python/python-original-wordmark.svg", darkSrc: "/moving-logo/python/python-plain-wordmark.svg", scale: 0.92 },
  { name: "React", lightSrc: "/moving-logo/react/react-original-wordmark.svg", scale: 0.92 },
  { name: "Tailwind CSS", lightSrc: "/moving-logo/tailwindcss/tailwindcss-original-wordmark.svg", darkSrc: "/moving-logo/tailwindcss/tailwindcss-plain-wordmark.svg", scale: 1.02 },
];

const MARQUEE_DURATION_SECONDS = 60;

function LogoRail({ reverse = false }: { reverse?: boolean }) {
  const reduceMotion = useReducedMotion();
  const railItems = reduceMotion ? logos : [...logos, ...logos];

  if (reduceMotion) {
    return (
      <div className="logo-marquee__static">
        {logos.map((logo) => (
          <LogoTile logo={logo} key={logo.lightSrc} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="logo-marquee__track"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: MARQUEE_DURATION_SECONDS, ease: "linear", repeat: Infinity }}
      aria-hidden="true"
    >
      {railItems.map((logo, index) => (
        <LogoTile logo={logo} key={`${logo.name}-${index}`} />
      ))}
    </motion.div>
  );
}

function LogoTile({ logo }: { logo: LogoItem }) {
  const style = {
    "--logo-scale": String(logo.scale ?? 1),
  } as CSSProperties;

  return (
    <span
      className="logo-marquee__tile"
      aria-label={logo.name}
      role="img"
      data-has-dark={logo.darkSrc ? "true" : undefined}
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="logo-marquee__image logo-marquee__image--light"
        src={logo.lightSrc}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      {logo.darkSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="logo-marquee__image logo-marquee__image--dark"
          src={logo.darkSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          data-invert-dark={logo.darkInvert ? "true" : undefined}
        />
      ) : null}
    </span>
  );
}

export function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-label="Project technology logos">
      <div className="logo-marquee__viewport">
        <LogoRail />
      </div>
    </section>
  );
}
