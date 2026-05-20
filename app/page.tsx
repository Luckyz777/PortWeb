import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Header,
  Hero,
  ProjectsSection,
  PrototypeSection,
  ExperienceSection,
  MethodologySection,
  AboutSection,
  SkillsSection,
  EngineeringSection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { education, profile } from "@/data/portfolio";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.GITHUB_PAGES === "true"
    ? "https://luckyz777.github.io/PortWeb"
    : "https://industrial-portfolio-ten.vercel.app");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneIntl,
  image: `${siteUrl}/headshot.jpg`,
  jobTitle: "Mechanical Engineering Graduate",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nakhon Ratchasima",
    addressCountry: "TH",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.university,
  },
  worksFor: {
    "@type": "Organization",
    name: "Global-Thaixon Precision Industry",
    description: "Process Engineering Internship (2024)",
  },
  knowsAbout: [
    "CNC",
    "G-code",
    "Python",
    "PySide6",
    "React",
    "FastAPI",
    "NC revision comparison",
    "Automotive",
    "Precision Manufacturing",
    "Fixture Management",
    "Setup Sheet Automation",
    "Mechanical Engineering",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Thai", alternateName: "th" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <Hero />
        <ProjectsSection />
        <PrototypeSection />
        <ExperienceSection />
        <MethodologySection />
        <AboutSection />
        <SkillsSection />
        <EngineeringSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollReveal />
    </div>
  );
}
