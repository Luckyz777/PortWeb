# Product Requirements Document: Anirut Industrial Portfolio

## 1. Overview

Anirut Industrial Portfolio is a bilingual personal portfolio website for Anirut Butnongwa, a Mechanical Engineering graduate from Suranaree University of Technology, targeting entry-level roles in process engineering, manufacturing software, CNC automation, and industrial application development.

The product presents Anirut as a hybrid mechanical engineer and software builder who can identify shop-floor constraints, translate them into usable software workflows, and communicate technical value to both HR recruiters and engineering hiring managers.

## 2. Problem Statement

Recruiters and hiring managers often need quick evidence that an entry-level candidate can contribute beyond coursework. A normal resume is not enough to show:

- Real manufacturing context from CNC, fixture, setup sheet, and tool-room workflows.
- Hands-on software ability through working applications.
- Source code quality and project structure.
- Communication ability in both English and Thai.
- Practical job readiness for Thai manufacturing companies.

This portfolio solves that by giving a structured, public, recruiter-friendly presentation of four industrial software projects with screenshots, case studies, source code links, resume access, and contact information.

## 3. Goals

- Communicate Anirut's positioning clearly: Mechanical Engineer + Industrial Software Developer.
- Help recruiters understand fit within 30-60 seconds.
- Help technical reviewers inspect real project evidence through case studies, screenshots, workflow explanations, and public GitHub links.
- Support both English and Thai users.
- Maintain a premium, professional visual identity suitable for manufacturing, automotive, precision metal fabrication, and industrial software roles.
- Deploy as a public portfolio on Vercel with reliable performance and SEO.

## 4. Non-Goals

- The site is not a full SaaS product.
- The site does not need authentication or user accounts.
- The site does not collect applicant tracking data by default.
- The site does not host complete production datasets from internship work.
- The site should not expose confidential company data, credentials, or private operational files.

## 5. Target Users

### Primary Users

- HR recruiters at manufacturing and automotive companies in Thailand.
- Engineering hiring managers for process, manufacturing, CNC, and tooling roles.
- Software or automation leads evaluating industrial software potential.

### Secondary Users

- University supervisors or internship evaluators.
- Professional contacts viewing the portfolio from LinkedIn or GitHub.
- Interviewers preparing technical questions before an interview.

## 6. User Needs

| User | Need | Product Response |
| --- | --- | --- |
| HR recruiter | Understand candidate fit quickly | Hero, role target, education, availability, military status, resume link |
| Engineering manager | See real manufacturing relevance | Project case studies, workflow descriptions, impact notes |
| Technical reviewer | Inspect source code | Public GitHub repository links per project |
| Thai company reviewer | Read Thai context and local job details | TH/EN language toggle, Thai contact details, military status |
| Mobile viewer | Review quickly from phone | Responsive layout, readable sections, touch-friendly links |

## 7. Product Positioning

### Core Message

Building software for manufacturing from real shop-floor constraints.

### Supporting Message

Anirut combines mechanical engineering fundamentals with practical software development, using Python, PySide6, React, FastAPI, G-code parsing, Excel/PDF export workflows, and UI design to solve real production problems.

## 8. Current Project Scope

### Included Sections

- Header navigation with language and theme controls.
- Hero section with role positioning, portrait, CTAs, and key stats.
- Selected projects section with four industrial software projects.
- Interactive project console / prototype section.
- Experience section.
- Engineering method section.
- About section.
- Skills section.
- Engineering background section.
- Contact section with resume, presentation, LinkedIn, GitHub, and source code links.
- Resume print route.
- Dynamic project detail pages.

### Included Projects

| Project | Purpose | Source |
| --- | --- | --- |
| GT-ACT | Cycle time analysis and setup sheet automation | `https://github.com/Luckyz777/GT-ACT` |
| GT-PATH | Offline NC and G-code path viewer | `https://github.com/Luckyz777/GT-PATH` |
| GT-FIXSYS | Fixture requisition and monitoring system | `https://github.com/Luckyz777/GT-FIXSYS` |
| NC Compare | NC file revision comparison and change tracking | `https://github.com/Luckyz777/NC-Compare` |

## 9. Functional Requirements

### 9.1 Navigation

- Users must be able to jump to Projects, Prototype, Experience, Method, About, Skills, and Contact.
- Navigation must work on desktop and mobile.
- Mobile navigation must use a clear open/close menu.
- Active links do not need route-level state for v1.

### 9.2 Language Toggle

- The site must support English and Thai.
- The default language should be English.
- Users must be able to switch language without leaving the page.
- Technical terms such as CNC, G-code, Python, React, and FastAPI may remain in English.

### 9.3 Theme Toggle

- The site must support light and dark mode.
- The default mode should be light.
- Theme selection should not create hydration errors.
- Visual contrast must remain readable in both modes.

### 9.4 Hero

- Hero must communicate the role blend within the first viewport.
- Primary CTA must scroll to projects.
- Secondary CTA must open resume/CV.
- Hero must show practical stats such as production tools, degree, and availability.
- Portrait image must load reliably and be responsive.

### 9.5 Project Cards

- Project cards must show project name, role, title, strapline, summary, impact, stack tags, screenshots, case study link, and source code link.
- All four projects must be visible.
- Public GitHub repository links must open in a new tab.
- Cards must remain readable and usable on mobile.

### 9.6 Project Detail Pages

- Each project must have a detail route under `/projects/[id]`.
- Each page must include Problem, Approach, Result, Lessons, Evidence, and Source Code.
- Screenshots must be displayed with descriptive alt text.
- The source code link must point to the matching public GitHub repository.

### 9.7 Contact

- Contact section must show email, phone, location, availability, military status, LinkedIn, GitHub, resume, presentation download, and source code links.
- Email link must use a `mailto:` URL with a relevant subject.
- Phone link must use `tel:`.
- Download links must serve existing public assets.

### 9.8 Resume

- `/resume` must render a printable resume page.
- Resume route must include Anirut's name, experience, projects, and key qualifications.
- PDF resume must be downloadable from `/anirut-resume.pdf`.

### 9.9 SEO and Social Preview

- Site must include title, description, Open Graph, Twitter card, icon, robots, and sitemap.
- Project detail pages must have project-specific metadata.
- Social preview must reflect the professional portfolio positioning.

## 10. Content Requirements

### Required Profile Content

- Name: Anirut Butnongwa.
- Location: Nakhon Ratchasima, Thailand.
- Email and phone.
- LinkedIn and GitHub links.
- Education: B.Eng. Mechanical Engineering, Suranaree University of Technology.
- Availability: May 2026.
- Military status: Completed Reserve Officer Training Corps.

### Required Project Content

Each project must include:

- Project name.
- Role.
- Problem.
- Built solution.
- Proof points.
- Workflow steps.
- Stack.
- Screenshots.
- Conservative impact statement.
- Case study details.
- Public GitHub link.

## 11. UX Requirements

- The first viewport must make the candidate's identity and target role obvious.
- Recruiter-critical information must be easy to scan.
- Project evidence must be visual, not only text.
- Motion should add polish but not block reading.
- Users with reduced motion preference should receive a low-motion experience.
- Buttons and links must be keyboard accessible.
- Text must not overlap or overflow on mobile.
- All core information must remain available without hover-only interaction.

## 12. Visual Design Requirements

- Style direction: premium, minimal, professional, editorial-industrial.
- Existing warm paper aesthetic and green accent may remain unless a future redesign replaces tokens.
- Typography should support both English and Thai clearly.
- Cards should be restrained and functional rather than decorative.
- Project imagery should show real product state, screenshots, or application identity.
- Dark mode must preserve hierarchy and contrast.

## 13. Technical Requirements

### Stack

- Next.js 15 App Router.
- React 19.
- Tailwind CSS v4.
- Framer Motion 12.
- GSAP for advanced motion where already used.
- TypeScript.
- Playwright for e2e tests.

### Hosting

- Vercel production deployment.
- Public production URL: `https://anirut-portfolio.vercel.app`.
- Source repository: `https://github.com/Luckyz777/PortWeb`.

### Data Model

Portfolio content should remain centralized in `data/portfolio.ts` where practical, including:

- `profile`
- `education`
- `experience`
- `copy`
- `projects`
- `methodologySteps`
- `engineeringProjects`

### Quality Gates

- `npm run build` must pass before deploy.
- `npm run test:e2e` must pass before major release.
- Public production URL must return HTTP 200.
- Project source links must point to the intended GitHub repositories.

## 14. Accessibility Requirements

- Keyboard navigation must reach all important controls and links.
- Interactive elements must have accessible names.
- Images must include useful alt text.
- Color contrast should meet WCAG AA where practical.
- Motion components must respect `prefers-reduced-motion`.
- Page structure must use semantic headings and landmarks.

## 15. Performance Requirements

- Production build should complete without errors.
- First page load should remain suitable for portfolio use on mobile.
- Images should be optimized where possible.
- Motion should avoid heavy blocking work on page load.
- Project detail pages should remain statically generated when possible.

## 16. Analytics and Measurement

Recommended metrics:

- Portfolio visits.
- Clicks on resume/CV.
- Clicks on source code repositories.
- Clicks on email/contact.
- Project detail page visits.
- Language toggle usage.

Recommended tool:

- Vercel Web Analytics, if enabled later.

## 17. Acceptance Criteria

### Release Acceptance

- Homepage loads successfully on desktop and mobile.
- Hero communicates role and availability.
- All four projects are visible.
- Each project has a working case study page.
- Each project shows a public GitHub source link.
- Contact section includes email, phone, LinkedIn, GitHub, resume, and presentation links.
- English and Thai language toggle works.
- Light and dark mode work without hydration warnings.
- `npm run build` passes.
- `npm run test:e2e` passes.
- Production deployment is accessible without Vercel authentication.

### Content Acceptance

- No user-facing copy claims that project source code is private.
- No outdated "3 tools" copy remains where four projects are shown.
- Impact metrics use conservative wording such as "Estimated" or "Designed to".
- Company-sensitive data is not exposed in public content.

## 18. Roadmap

### Phase 1: Hiring-Ready Portfolio

- Keep all four projects visible.
- Maintain public source code links.
- Keep resume and presentation downloads working.
- Verify SEO and OG metadata.
- Keep Vercel production deployment public.

### Phase 2: Conversion Improvements

- Add short demo videos for each app.
- Add clearer source-code architecture notes per project.
- Add stronger project screenshots and captions.
- Add Vercel Analytics.
- Add contact form if needed.

### Phase 3: Differentiators

- Expand GT-ACT or GT-FIXSYS into a full case study.
- Add methodology section with more shop-floor validation detail.
- Add ATS-friendly resume variant.
- Add blog or technical notes about manufacturing software.

## 19. Risks

- Public repositories may accidentally expose sensitive data if not reviewed before publishing.
- Motion-heavy UI can reduce performance on low-end mobile devices.
- Bilingual content can drift if English and Thai copy are not updated together.
- Screenshots may become outdated as project apps evolve.
- Vercel deployment protection can accidentally make the public site require authentication.

## 20. Open Questions

- Should the production domain remain `anirut-portfolio.vercel.app` or move to a custom domain later?
- Should the public repositories contain full source code or curated showcase versions?
- Should project detail pages include architecture diagrams?
- Should demo videos be hosted on YouTube unlisted or inside `public/videos/`?
- Should Vercel Analytics be enabled before active job applications?

