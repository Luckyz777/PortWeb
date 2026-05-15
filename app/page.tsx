import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Header,
  Hero,
  ProjectsSection,
  PrototypeSection,
  AboutSection,
  SkillsSection,
  EngineeringSection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { profile } from "@/data/portfolio";

export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://luckyz777.github.io",
  email: `mailto:${profile.email}`,
  jobTitle: "Mechanical Engineering Graduate",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Suranaree University of Technology",
  },
  knowsAbout: ["CNC", "G-code", "Python", "PySide6", "React", "FastAPI", "Fixture Management"],
  sameAs: [profile.github],
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
