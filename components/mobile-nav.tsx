"use client";

import { useCallback, useEffect, useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        className="mobile-menu-btn"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger ${open ? "open" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="mobile-overlay" onClick={close}>
          <nav
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#prototype" onClick={close}>Prototype</a>
            <a href="#profile" onClick={close}>About</a>
            <a href="#skills" onClick={close}>Skills</a>
            <a href="#contact" className="mobile-cta" onClick={close}>Get In Touch</a>
          </nav>
        </div>
      )}
    </>
  );
}
