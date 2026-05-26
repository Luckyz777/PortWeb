import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, Header } from "@/components/sections";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { profile, projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Anirut Butnongwa",
    };
  }

  return {
    title: `${project.name} Case Study | Anirut Butnongwa`,
    description: `${project.title}. ${project.impact ?? project.strapline}`,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.name} Case Study`,
      description: project.impact ?? project.strapline,
      url: `/projects/${project.id}`,
      images: [project.screenshots[0] ?? project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study`,
      description: project.impact ?? project.strapline,
      images: [project.screenshots[0] ?? project.image],
    },
  };
}

const ruleLight = { borderColor: "var(--border-strong)" };
const ruleDarkOnLight = ruleLight;
const ruleLightOnDark = { borderColor: "rgba(255, 255, 255, 0.45)" };
const ruleLightOnBrand = { borderColor: "rgba(255, 255, 255, 0.55)" };

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <FlowArt aria-label={`${project.name} case study`}>
          {/* ─── Panel 01 — Problem ─────────────────────────────── */}
          <FlowSection
            aria-label={`${project.name} — the problem`}
            style={{
              background: "var(--bg-page)",
              color: "var(--ink)",
            }}
          >
            <div className="case-panel__top">
              <Link href="/#projects" className="case-panel__back">
                ← Back to projects
              </Link>
              <p className="case-panel__kicker">01 — The Problem</p>
            </div>

            <hr className="case-panel__rule" style={ruleDarkOnLight} />

            <div>
              <p className="case-panel__role">{project.role}</p>
              <h1 className="case-panel__heading">
                {project.name}
                <span className="case-panel__heading-sub">{project.title}</span>
              </h1>
            </div>

            <hr className="case-panel__rule" style={ruleDarkOnLight} />

            <p className="case-panel__lead">{project.problem}</p>
            <div className="case-panel__columns">
              <div>
                <p className="case-panel__label">Context</p>
                <p className="case-panel__body">{project.caseStudy.context}</p>
              </div>
              <div>
                <p className="case-panel__label">Challenge</p>
                <p className="case-panel__body">
                  {project.caseStudy.challenge}
                </p>
              </div>
            </div>
          </FlowSection>

          {/* ─── Panel 02 — Approach ────────────────────────────── */}
          <FlowSection
            aria-label={`${project.name} — approach`}
            style={{
              background: "var(--ink)",
              color: "var(--bg-page)",
            }}
          >
            <p className="case-panel__kicker">02 — Approach</p>
            <hr className="case-panel__rule" style={ruleLightOnDark} />

            <div>
              <h2 className="case-panel__heading">
                Built
                <br />
                Like
                <br />
                This.
              </h2>
            </div>

            <hr className="case-panel__rule" style={ruleLightOnDark} />

            <p className="case-panel__lead">{project.built}</p>
            <p className="case-panel__body case-panel__body--muted">
              {project.caseStudy.approach}
            </p>

            <hr className="case-panel__rule" style={ruleLightOnDark} />

            <div className="case-panel__workflow">
              {project.workflow.map((step, i) => (
                <div className="case-panel__step" key={step}>
                  <span className="case-panel__step-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="case-panel__step-label">{step}</span>
                </div>
              ))}
            </div>

            <hr className="case-panel__rule" style={ruleLightOnDark} />

            <div>
              <p className="case-panel__label case-panel__label--light">
                Stack
              </p>
              <ul className="case-panel__stack">
                {project.stack.map((item) => (
                  <li className="case-panel__stack-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FlowSection>

          {/* ─── Panel 03 — Result ──────────────────────────────── */}
          <FlowSection
            aria-label={`${project.name} — result`}
            style={{
              background: "var(--brand)",
              color: "#FFFFFF",
            }}
          >
            <p className="case-panel__kicker">03 — Result</p>
            <hr className="case-panel__rule" style={ruleLightOnBrand} />

            <div>
              <h2 className="case-panel__heading">
                What
                <br />
                Changed.
              </h2>
            </div>

            <hr className="case-panel__rule" style={ruleLightOnBrand} />

            {project.impact && (
              <p className="case-panel__lead">{project.impact}</p>
            )}
            <p className="case-panel__body case-panel__body--muted">
              {project.caseStudy.result}
            </p>

            <hr className="case-panel__rule" style={ruleLightOnBrand} />

            <ul className="case-panel__proof">
              {project.proof.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <hr className="case-panel__rule" style={ruleLightOnBrand} />

            <blockquote className="case-panel__quote">
              &ldquo;{project.consoleMetric}&rdquo;
              <span className="case-panel__quote-source">
                {project.consoleDetail}
              </span>
            </blockquote>
          </FlowSection>

          {/* ─── Panel 04 — Lessons + Evidence ──────────────────── */}
          <FlowSection
            aria-label={`${project.name} — lessons`}
            style={{
              background: "var(--bg-page)",
              color: "var(--ink)",
            }}
          >
            <p className="case-panel__kicker">04 — Lessons</p>
            <hr className="case-panel__rule" style={ruleDarkOnLight} />

            <div>
              <h2 className="case-panel__heading">
                What
                <br />
                I&nbsp;Learned.
              </h2>
            </div>

            <hr className="case-panel__rule" style={ruleDarkOnLight} />

            <p className="case-panel__lead">{project.caseStudy.lessons}</p>

            {project.screenshots.length > 0 && (
              <>
                <hr className="case-panel__rule" style={ruleDarkOnLight} />
                <div>
                  <p className="case-panel__label">Evidence</p>
                  <div className="case-panel__gallery">
                    {project.screenshots.map((src, i) => (
                      <figure className="case-panel__shot" key={src}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${project.name} screenshot ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption>
                          {project.name} evidence{" "}
                          {String(i + 1).padStart(2, "0")}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </>
            )}

            <hr className="case-panel__rule" style={ruleDarkOnLight} />

            <div className="case-panel__footer">
              <div className="case-panel__source">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
                {project.repository && !project.repositoryPrivate ? (
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    View source code on GitHub
                  </a>
                ) : (
                  <span>{profile.sourcePolicy.en}</span>
                )}
              </div>
              <Link href="/#projects" className="case-panel__cta">
                View all projects →
              </Link>
            </div>
          </FlowSection>
        </FlowArt>
      </main>

      <Footer />
    </div>
  );
}
