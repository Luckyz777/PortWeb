import type { Metadata } from "next";

import { PrintButton } from "@/components/print-button";
import {
  education,
  educationProjects,
  experience,
  profile,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume | Anirut Butnongwa — Mechanical Engineer",
  description:
    "Resume of Anirut Butnongwa: Mechanical Engineering graduate (SUT, May 2026) with internship experience at Global-Thaixon Precision Industry. Process improvement and AI-assisted industrial software development.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Anirut Butnongwa",
    description:
      "Mechanical Engineer · Process Improvement · AI-Assisted Development. Available May 2026.",
    type: "profile",
    url: "/resume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Anirut Butnongwa",
    description:
      "Mechanical Engineer · Process Improvement · AI-Assisted Development.",
  },
};

export default function ResumePage() {
  return (
    <main className="resume">
      <div className="resume__toolbar">
        <a href="/" className="btn-secondary">&larr; Back to Portfolio</a>
        <PrintButton />
      </div>

      <article className="resume__page">
        <header className="resume__header">
          <h1>{profile.name}</h1>
          <p className="resume__tagline">Mechanical Engineer &middot; Process Improvement &middot; AI-Assisted Development</p>
          <ul className="resume__contact">
            <li>{profile.email}</li>
            <li>{profile.phoneIntl}</li>
            <li>{profile.location}</li>
            <li><a href={profile.github}>{profile.github.replace("https://", "")}</a></li>
            <li><a href={profile.linkedin}>{profile.linkedin.replace("https://www.", "")}</a></li>
          </ul>
        </header>

        <section className="resume__section">
          <h2>Summary</h2>
          <p>
            Mechanical Engineering graduate (SUT, May 2026) with hands-on internship experience
            at Global-Thaixon Precision Industry. Identified process gaps on the shop floor and
            designed three production-tested tools for G-code validation, toolpath inspection,
            and fixture management using AI-assisted development with Python, PySide6, React,
            and FastAPI. Available for entry-level roles starting May 2026.
          </p>
        </section>

        <section className="resume__section">
          <h2>Work Experience</h2>
          {experience.map((job) => (
            <div className="resume__entry" key={`${job.company}-${job.period}`}>
              <div className="resume__entry-head">
                <strong>{job.role}</strong>
                <span>{job.period}</span>
              </div>
              <div className="resume__entry-sub">
                {job.company} &middot; {job.location}
              </div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Education</h2>
          <div className="resume__entry">
            <div className="resume__entry-head">
              <strong>{education.degree}</strong>
              <span>{education.period}</span>
            </div>
            <div className="resume__entry-sub">
              {education.university} &middot; {education.location}
            </div>
            <div className="resume__entry-sub">
              GPAX {education.GPA} &middot; Major GPA {education.majorGPA}
            </div>
            <div className="resume__entry-sub">
              Relevant Coursework: {education.coursework.join(", ")}
            </div>
          </div>
        </section>

        <section className="resume__section">
          <h2>School Projects</h2>
          {educationProjects.map((p) => (
            <div className="resume__entry" key={p.meta}>
              <div className="resume__entry-head">
                <strong>{p.title}</strong>
                <span>{p.meta}</span>
              </div>
              <p>{p.copy}</p>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Skills</h2>
          <div className="resume__skill-row">
            <strong>Engineering:</strong>{" "}
            CNC process, Fixture design, CAD (SOLIDWORKS, CATIA), FEA (ANSYS), Manufacturing processes, Machining &amp; Workshop
          </div>
          <div className="resume__skill-row">
            <strong>Process &amp; Design:</strong>{" "}
            Process improvement, Requirements analysis, Workflow design, UI/UX prototyping, Shop-floor validation
          </div>
          <div className="resume__skill-row">
            <strong>Tools &amp; Technologies (working knowledge):</strong>{" "}
            Python, React, FastAPI, PySide6, Git, SQL, AI-assisted development (ChatGPT, Cursor)
          </div>
          <div className="resume__skill-row">
            <strong>Software:</strong>{" "}
            SOLIDWORKS, CATIA, ANSYS, MATLAB, Google Colab, AutoCAD, Arduino IDE, Microsoft Office Suites
          </div>
          <div className="resume__skill-row">
            <strong>Languages:</strong> Thai (Native), English (Communicative)
          </div>
        </section>

        <footer className="resume__footer">References available upon request.</footer>
      </article>
    </main>
  );
}
