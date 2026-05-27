import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, Header } from "@/components/sections";
import { projects, profile } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <div>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main" className="project-detail">
        <section className="project-detail__hero" aria-labelledby="project-title">
          <div className="section-inner project-detail__hero-grid">
            <div>
              <Link className="text-link" href="/#projects">Back to Projects</Link>
              <p className="project-detail__kicker">{project.role}</p>
              <h1 id="project-title">{project.name}</h1>
              <p className="project-detail__title">{project.title}</p>
              <p className="project-detail__summary">{project.problem}</p>

              {project.impact && (
                <div className="project-impact project-impact--detail" role="note">
                  <span className="project-impact__label">Impact</span>
                  <span className="project-impact__text">{project.impact}</span>
                </div>
              )}
            </div>

            <div className="project-detail__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.screenshots[0] ?? project.image} alt={project.imageAlt} />
            </div>
          </div>
        </section>

        <section className="section-inner case-study-grid" aria-label={`${project.name} case study`}>
          <article>
            <span>Problem</span>
            <p>{project.caseStudy.context}</p>
          </article>
          <article>
            <span>Challenge</span>
            <p>{project.caseStudy.challenge}</p>
          </article>
          <article>
            <span>Approach</span>
            <p>{project.caseStudy.approach}</p>
          </article>
          <article>
            <span>Result</span>
            <p>{project.caseStudy.result}</p>
          </article>
        </section>

        <section className="section-inner project-gallery" aria-label={`${project.name} evidence gallery`}>
          <div>
            <p className="section-tag">Evidence</p>
            <h2 className="section-heading">Screenshots And Outputs.</h2>
            <p className="section-subheading">
              A compact view of the application screens, generated reports, or verification output used to explain the workflow.
            </p>
          </div>

          <div className="project-gallery__grid">
            {project.screenshots.map((src, index) => (
              <figure key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${project.name} screenshot ${index + 1}`} loading="lazy" decoding="async" />
                <figcaption>{project.name} evidence {String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section-inner project-detail__closing" aria-label="Source policy">
          <div className="project-source-note">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>{profile.sourcePolicy.en}</span>
          </div>
          <p>{project.caseStudy.lessons}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
