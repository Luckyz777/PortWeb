export type Project = {
  id: "gt-act" | "gt-path" | "gt-fixsys" | "nc-compare";
  name: string;
  title: string;
  role: string;
  image: string;
  imageAlt: string;
  imageMode: "logo" | "screenshot";
  screenshots: string[];
  videoUrl?: string;
  /** Public GitHub URL when available. */
  repository: string;
  /** Backward-compatible flag for legacy private projects. Public projects leave this unset. */
  repositoryPrivate?: boolean;
  strapline: string;
  problem: string;
  built: string;
  proof: string[];
  stack: string[];
  workflow: string[];
  consoleMetric: string;
  consoleDetail: string;
  /** Conservative impact statement framed without unsupported measured claims. */
  impact?: string;
  caseStudy: {
    context: string;
    challenge: string;
    approach: string;
    result: string;
    lessons: string;
  };
};

export type Bilingual = { en: string; th: string };

export const profile = {
  name: "Anirut Butnongwa",
  email: "anirut.choky46@gmail.com",
  phone: "098-118-6694",
  phoneIntl: "+66 98-118-6694",
  location: "Nakhon Ratchasima, Thailand",
  github: "https://github.com/Luckyz777",
  linkedin: "https://www.linkedin.com/in/anirut-butnongwa",
  cv: "/resume",
  target: "Mechanical, process, and industrial software roles",
  status: "Open to entry-level roles \u2014 starting May 2026",
  /** Thai military service status \u2014 important on Thai job applications. */
  militaryStatus: { en: "Completed (Reserve Officer Training Corps)", th: "\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e40\u0e01\u0e13\u0e11\u0e4c\u0e17\u0e2b\u0e32\u0e23 (\u0e23\u0e14.)" },
  /** Source-code policy shown near repository links. */
  sourcePolicy: {
    en: "Source code is public on GitHub. Case-study notes, screenshots, and design rationale are available on this portfolio.",
    th: "Source code \u0e40\u0e1b\u0e34\u0e14\u0e40\u0e1b\u0e47\u0e19 public \u0e1a\u0e19 GitHub \u0e1e\u0e23\u0e49\u0e2d\u0e21 case study, screenshot \u0e41\u0e25\u0e30 design rationale \u0e43\u0e19 portfolio \u0e19\u0e35\u0e49",
  },
};

export const education = {
  degree: "Bachelor of Engineering, Mechanical Engineering",
  GPA: "2.92",
  majorGPA: "3.26",
  university: "Suranaree University of Technology",
  location: "Nakhon Ratchasima, Thailand",
  period: "2022 \u2014 May 2026 (Expected)",
  coursework: [
    "Mechanics of Materials",
    "Manufacturing Processes",
    "CAD/CAM",
    "Finite Element Analysis",
    "Engineering Statistics",
  ],
};

export const experience = [
  {
    role: "Cooperative Education · Process Engineering Intern",
    company: "Global-Thaixon Precision Industry",
    location: "Chachoengsao, Thailand",
    period: "9 Feb.-29 May 2026",
    bullets: [
      "Identified process gaps in CNC tool setup and fixture management through shop-floor observation and operator interviews.",
      "Designed and delivered 4 internal tools (GT-ACT, GT-FIXSYS, GT-PATH, NC Compare) using Python, PySide6, React, and FastAPI.",
      "Automated NC program validation and standardized setup-sheet generation, reducing manual errors in tool-length verification.",
      "Validated UI logic and workflows with operators to ensure real-world usability in CNC handoff and tool-room processes.",
    ],
  },
] as const;

/**
 * Bilingual copy dictionary. Used by section components via useT().
 * Technical content (project descriptions, code, stack names) stays in `projects`
 * and remains English-only because it's domain-standard terminology.
 */
export const copy = {
  nav: {
    projects: { en: "Projects", th: "\u0e1c\u0e25\u0e07\u0e32\u0e19" },
    prototype: { en: "Prototype", th: "\u0e15\u0e49\u0e19\u0e41\u0e1a\u0e1a" },
    experience: { en: "Experience", th: "\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c" },
    methodology: { en: "Method", th: "\u0e27\u0e34\u0e18\u0e35\u0e17\u0e33\u0e07\u0e32\u0e19" },
    about: { en: "About", th: "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a" },
    skills: { en: "Skills", th: "\u0e17\u0e31\u0e01\u0e29\u0e30" },
    contact: { en: "Get In Touch", th: "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d" },
  },
  hero: {
    eyebrow: {
      en: "Mechanical Engineer \u00b7 Software Developer",
      th: "\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25 \u00b7 \u0e19\u0e31\u0e01\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c",
    },
    headlineL1: { en: "Building", th: "\u0e2a\u0e23\u0e49\u0e32\u0e07" },
    headlineL2: { en: "Software for", th: "\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a" },
    headlineAccent: { en: "Manufacturing.", th: "\u0e42\u0e23\u0e07\u0e07\u0e32\u0e19\u0e1c\u0e25\u0e34\u0e15." },
    subhead: {
      en: "Production tools shaped by real shop-floor handoffs.",
      th: "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d workflow \u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e15\u0e48\u0e2d\u0e07\u0e32\u0e19\u0e08\u0e23\u0e34\u0e07\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e32\u0e19.",
    },
    desc: {
      en: "Mechanical Engineering graduate from Suranaree University of Technology. During my process engineering internship at Global-Thaixon Precision Industry I built four production tools covering G-code review, NC revision comparison, toolpath verification, and fixture lifecycle management.",
      th: "\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25 \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e2a\u0e38\u0e23\u0e19\u0e32\u0e23\u0e35 \u0e0a\u0e48\u0e27\u0e07\u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07 process engineer \u0e17\u0e35\u0e48 Global-Thaixon Precision Industry \u0e44\u0e14\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d 4 \u0e15\u0e31\u0e27\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e15\u0e23\u0e27\u0e08 G-code, \u0e40\u0e1b\u0e23\u0e35\u0e22\u0e1a\u0e40\u0e17\u0e35\u0e22\u0e1a NC \u0e15\u0e48\u0e32\u0e07 revision, \u0e15\u0e23\u0e27\u0e08 toolpath \u0e41\u0e25\u0e30\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23 fixture.",
    },
    ctaWork: { en: "View My Work", th: "\u0e14\u0e39\u0e1c\u0e25\u0e07\u0e32\u0e19" },
    ctaResume: { en: "Resume / CV", th: "\u0e40\u0e23\u0e0b\u0e39\u0e40\u0e21\u0e48 / CV" },
    stat1: { en: "Production Tools", th: "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e08\u0e23\u0e34\u0e07" },
    stat2: { en: "B.Eng. Mechanical", th: "\u0e27\u0e28\u0e1a. \u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25" },
    stat3: { en: "Available May 2026", th: "\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e23\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19 \u0e1e.\u0e04. 2026" },
  },
  projects: {
    tag: { en: "Selected Work", th: "\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e04\u0e31\u0e14\u0e2a\u0e23\u0e23" },
    heading: { en: "Manufacturing Workflow Tools.", th: "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d workflow \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e07\u0e32\u0e19\u0e1c\u0e25\u0e34\u0e15." },
    sub: {
      en: "Each project started from a production constraint I saw during my process engineering internship.",
      th: "\u0e17\u0e38\u0e01\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e08\u0e33\u0e01\u0e31\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19 process engineer.",
    },
    viewRepo: { en: "View Repository", th: "\u0e14\u0e39 Repository" },
    viewCase: { en: "Open Case Study", th: "\u0e14\u0e39 Case Study" },
    evidence: { en: "Evidence", th: "\u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19" },
  },
  methodology: {
    tag: { en: "Engineering Method", th: "\u0e27\u0e34\u0e18\u0e35\u0e04\u0e34\u0e14\u0e41\u0e1a\u0e1a\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23" },
    heading: { en: "Built From Shop-Floor Constraints.", th: "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e08\u0e33\u0e01\u0e31\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e32\u0e19\u0e08\u0e23\u0e34\u0e07." },
    sub: {
      en: "My work starts with operators and process engineers, then turns repeated manual checks into verifiable software workflows.",
      th: "\u0e40\u0e23\u0e34\u0e48\u0e21\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e32\u0e19\u0e41\u0e25\u0e30\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e01\u0e23\u0e30\u0e1a\u0e27\u0e19\u0e01\u0e32\u0e23 \u0e01\u0e48\u0e2d\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e07\u0e32\u0e19\u0e0b\u0e49\u0e33\u0e46 \u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19 workflow \u0e17\u0e35\u0e48\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e44\u0e14\u0e49.",
    },
  },
  prototype: {
    tag: { en: "Working Prototype", th: "\u0e15\u0e49\u0e19\u0e41\u0e1a\u0e1a\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e08\u0e23\u0e34\u0e07" },
    heading: { en: "How Each Tool Works.", th: "\u0e01\u0e25\u0e44\u0e01\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d." },
    sub: {
      en: "Click through to see how each application translates a manufacturing constraint into a verifiable workflow.",
      th: "\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e39\u0e27\u0e34\u0e18\u0e35\u0e17\u0e35\u0e48\u0e41\u0e15\u0e48\u0e25\u0e30\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e02\u0e49\u0e2d\u0e08\u0e33\u0e01\u0e31\u0e14\u0e2d\u0e38\u0e15\u0e2a\u0e32\u0e2b\u0e01\u0e23\u0e23\u0e21\u0e40\u0e1b\u0e47\u0e19 workflow \u0e17\u0e35\u0e48\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e44\u0e14\u0e49.",
    },
  },
  experience: {
    tag: { en: "Experience", th: "\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e17\u0e33\u0e07\u0e32\u0e19" },
    heading: { en: "Where the Tools Were Built.", th: "\u0e17\u0e35\u0e48\u0e21\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d." },
    sub: {
      en: "Hands-on experience that informed every line of code in the projects above.",
      th: "\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e17\u0e35\u0e48\u0e1d\u0e31\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e17\u0e38\u0e01\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e02\u0e49\u0e32\u0e07\u0e1a\u0e19.",
    },
  },
  about: {
    tag: { en: "About", th: "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a" },
    heading: {
      en: "Engineering Background. Software Craft.",
      th: "\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21. \u0e17\u0e31\u0e01\u0e29\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c.",
    },
    p1: {
      en: "I studied Mechanical Engineering at Suranaree University of Technology (graduating May 2026). During my internship at Global-Thaixon Precision Industry I worked with CNC machines, setup sheets, fixture workflows, and cycle-time calculations \u2014 and saw firsthand where the right software could remove friction.",
      th: "\u0e40\u0e23\u0e35\u0e22\u0e19\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25 \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e2a\u0e38\u0e23\u0e19\u0e32\u0e23\u0e35 (\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32 \u0e1e.\u0e04. 2026). \u0e0a\u0e48\u0e27\u0e07\u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48 Global-Thaixon Precision Industry \u0e44\u0e14\u0e49\u0e17\u0e33\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a CNC, setup sheet, fixture workflow \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13 cycle time \u0e08\u0e36\u0e07\u0e40\u0e2b\u0e47\u0e19\u0e0a\u0e31\u0e14\u0e27\u0e48\u0e32\u0e2d\u0e30\u0e44\u0e23\u0e17\u0e35\u0e48\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0a\u0e48\u0e27\u0e22\u0e25\u0e14\u0e20\u0e32\u0e23\u0e30\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49.",
    },
    pull: {
      en: "I bridge mechanical domain knowledge with hands-on software engineering.",
      th: "\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e42\u0e22\u0e07\u0e2d\u0e07\u0e04\u0e4c\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e14\u0e49\u0e32\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25 \u0e40\u0e02\u0e49\u0e32\u0e01\u0e31\u0e1a\u0e07\u0e32\u0e19\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e08\u0e23\u0e34\u0e07.",
    },
    p2: {
      en: "Self-directed in software: I learned Python, PySide6, React, and FastAPI by building four working applications that solve problems I personally faced on the production floor. The result is software that respects the constraints engineers and operators already work with.",
      th: "\u0e28\u0e36\u0e01\u0e29\u0e32\u0e14\u0e49\u0e27\u0e22\u0e15\u0e19\u0e40\u0e2d\u0e07\u0e43\u0e19\u0e2a\u0e32\u0e22\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c \u2014 \u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49 Python, PySide6, React, \u0e41\u0e25\u0e30 FastAPI \u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19  4 \u0e15\u0e31\u0e27\u0e17\u0e35\u0e48\u0e41\u0e01\u0e49\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e08\u0e23\u0e34\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e07\u0e32\u0e19. \u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e04\u0e37\u0e2d\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e04\u0e32\u0e23\u0e1e\u0e02\u0e49\u0e2d\u0e08\u0e33\u0e01\u0e31\u0e14\u0e02\u0e2d\u0e07\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e07\u0e32\u0e19\u0e08\u0e23\u0e34\u0e07.",
    },
    callout1Title: { en: "Manufacturing Domain", th: "\u0e23\u0e39\u0e49\u0e2a\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1c\u0e25\u0e34\u0e15" },
    callout1Desc: {
      en: "CNC, G-code, jig & fixture, cycle time \u2014 I understand the work because I've done it.",
      th: "CNC, G-code, jig & fixture, cycle time \u2014 \u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e07\u0e32\u0e19\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e25\u0e07\u0e21\u0e37\u0e2d\u0e17\u0e33\u0e21\u0e32\u0e08\u0e23\u0e34\u0e07.",
    },
    callout2Title: { en: "Hands-on Software Builder", th: "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e08\u0e23\u0e34\u0e07" },
    callout2Desc: {
      en: "Python, PySide6, React, and FastAPI applied through internal tools and production-facing workflows.",
      th: "\u0e43\u0e0a\u0e49 Python, PySide6, React \u0e41\u0e25\u0e30 FastAPI \u0e01\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d internal \u0e41\u0e25\u0e30 workflow \u0e17\u0e35\u0e48\u0e2d\u0e34\u0e07\u0e01\u0e31\u0e1a\u0e07\u0e32\u0e19\u0e1c\u0e25\u0e34\u0e15.",
    },
    callout3Title: { en: "Ready to Contribute", th: "\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e23\u0e48\u0e27\u0e21\u0e07\u0e32\u0e19" },
    callout3Desc: {
      en: "Available May 2026 for entry-level roles in process engineering, industrial software, or manufacturing technology.",
      th: "\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e23\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19 \u0e1e.\u0e04. 2026 \u0e2a\u0e32\u0e22 process engineering, industrial software \u0e2b\u0e23\u0e37\u0e2d manufacturing technology.",
    },
    timeline1Title: { en: "Industrial software portfolio", th: "Portfolio \u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e2d\u0e38\u0e15\u0e2a\u0e32\u0e2b\u0e01\u0e23\u0e23\u0e21" },
    timeline1Desc: {
      en: "Published GT-ACT, GT-PATH, GT-FIXSYS, and NC Compare as public GitHub project case studies.",
      th: "\u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23\u0e48 GT-ACT, GT-PATH, GT-FIXSYS \u0e41\u0e25\u0e30 NC Compare \u0e40\u0e1b\u0e47\u0e19 public GitHub project case studies.",
    },
    timeline2Title: { en: "Global-Thaixon Precision Industry", th: "Global-Thaixon Precision Industry" },
    timeline2Desc: {
      en: "Built manufacturing workflow tools during a 2026 process engineering internship.",
      th: "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d workflow \u0e07\u0e32\u0e19\u0e1c\u0e25\u0e34\u0e15\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19 process engineering \u0e1b\u0e35 2026.",
    },
    timeline3Title: { en: "Bachelor of Engineering", th: "\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15" },
    timeline3Desc: {
      en: "Mechanical Engineering, Suranaree University of Technology.",
      th: "\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25 \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e2a\u0e38\u0e23\u0e19\u0e32\u0e23\u0e35.",
    },
  },
  skills: {
    tag: { en: "Skill Set", th: "\u0e17\u0e31\u0e01\u0e29\u0e30" },
    heading: { en: "Two Disciplines. One Stack.", th: "\u0e2a\u0e2d\u0e07\u0e2a\u0e32\u0e02\u0e32. \u0e2b\u0e19\u0e36\u0e48\u0e07\u0e0a\u0e38\u0e14\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d." },
    sub: {
      en: "Mechanical engineering fundamentals combined with practical software development.",
      th: "\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25 \u0e1c\u0e2a\u0e21\u0e1c\u0e2a\u0e32\u0e19\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e08\u0e23\u0e34\u0e07.",
    },
    languages: { en: "Languages", th: "\u0e20\u0e32\u0e29\u0e32" },
    langThai: { en: "Thai", th: "\u0e44\u0e17\u0e22" },
    langThaiLevel: { en: "Native", th: "\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e20\u0e32\u0e29\u0e32" },
    langEng: { en: "English", th: "\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29" },
    langEngLevel: { en: "Conversational (TOEIC scheduled)", th: "\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e32\u0e23\u0e44\u0e14\u0e49 (TOEIC \u0e23\u0e2d\u0e2a\u0e2d\u0e1a)" },
  },
  engineering: {
    tag: { en: "Engineering Background", th: "\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21" },
    heading: { en: "The Mechanical Foundation.", th: "\u0e23\u0e32\u0e01\u0e10\u0e32\u0e19\u0e07\u0e32\u0e19\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21." },
    sub: {
      en: "University projects that shaped how I approach constraints, testing, and practical design tradeoffs.",
      th: "\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e48\u0e2d\u0e2b\u0e25\u0e2d\u0e21\u0e27\u0e34\u0e18\u0e35\u0e04\u0e34\u0e14\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 constraint, testing \u0e41\u0e25\u0e30 design tradeoff \u0e43\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19.",
    },
  },
  contact: {
    tag: { en: "Get In Touch", th: "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d" },
    heading: { en: "Available From May 2026.", th: "\u0e40\u0e23\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19 \u0e1e.\u0e04. 2026." },
    sub: {
      en: "Open to entry-level roles in process engineering, manufacturing software, CNC automation, or industrial application development.",
      th: "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e23\u0e30\u0e14\u0e31\u0e1a entry-level \u0e2a\u0e32\u0e22 process engineering, manufacturing software, CNC automation \u0e2b\u0e23\u0e37\u0e2d industrial application development.",
    },
    directTitle: { en: "Direct Contact", th: "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07" },
    portfolioTitle: { en: "Portfolio Links", th: "\u0e25\u0e34\u0e07\u0e01\u0e4c Portfolio" },
    labelEmail: { en: "Email", th: "\u0e2d\u0e35\u0e40\u0e21\u0e25" },
    labelPhone: { en: "Phone", th: "\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c" },
    labelLocation: { en: "Location", th: "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48" },
    labelStatus: { en: "Status", th: "\u0e2a\u0e16\u0e32\u0e19\u0e30" },
    labelGithub: { en: "GitHub", th: "GitHub" },
    labelLinkedin: { en: "LinkedIn", th: "LinkedIn" },
    labelResume: { en: "Resume / CV", th: "\u0e40\u0e23\u0e0b\u0e39\u0e40\u0e21\u0e48 / CV" },
    labelDownload: { en: "Download PDF", th: "\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 PDF" },
    labelRepos: { en: "Repositories", th: "Repositories" },
    references: {
      en: "References available upon request.",
      th: "\u0e1c\u0e39\u0e49\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07\u0e21\u0e35\u0e43\u0e2b\u0e49\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e2d\u0e07\u0e02\u0e2d.",
    },
    labelPresentation: { en: "Internship Presentation", th: "Presentation \u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19" },
    presentationCta: { en: "Download (.pptx)", th: "\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 (.pptx)" },
    presentationPdfCta: { en: "Download PDF", th: "\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 PDF" },
    labelMilitary: { en: "Military Status", th: "\u0e2a\u0e16\u0e32\u0e19\u0e30\u0e17\u0e32\u0e07\u0e17\u0e2b\u0e32\u0e23" },
    labelSource: { en: "Source Code", th: "Source Code" },
    sourcePrivateShort: { en: "Public repositories available on GitHub", th: "Repository \u0e40\u0e1b\u0e34\u0e14\u0e40\u0e1b\u0e47\u0e19 public \u0e1a\u0e19 GitHub" },
    statusValue: {
      en: "Open to entry-level roles \u2014 starting May 2026",
      th: "\u0e23\u0e31\u0e1a\u0e07\u0e32\u0e19 entry-level \u2014 \u0e40\u0e23\u0e34\u0e48\u0e21 \u0e1e.\u0e04. 2026",
    },
    formTitle: { en: "Send a Message", th: "\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21" },
    formName: { en: "Name", th: "\u0e0a\u0e37\u0e48\u0e2d" },
    formEmail: { en: "Email", th: "\u0e2d\u0e35\u0e40\u0e21\u0e25" },
    formMessage: { en: "Message", th: "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21" },
    formSubmit: { en: "Send Message", th: "\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e04\u0e27\u0e32\u0e21" },
    formSending: { en: "Sending\u2026", th: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07\u2026" },
    formSuccess: {
      en: "Message sent. I will reply as soon as I can.",
      th: "\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e04\u0e27\u0e32\u0e21\u0e41\u0e25\u0e49\u0e27 \u0e08\u0e30\u0e15\u0e2d\u0e01\u0e01\u0e25\u0e31\u0e1a\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e47\u0e27\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
    },
    formErrorGeneric: {
      en: "Could not send your message. Please try again or email me directly.",
      th: "\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e04\u0e27\u0e32\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07",
    },
    formErrorRequired: { en: "This field is required.", th: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e35\u0e49" },
    formErrorEmail: {
      en: "Enter a valid email address.",
      th: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
    },
    formErrorMessageLength: {
      en: "Message must be between 10 and 5000 characters.",
      th: "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e22\u0e32\u0e27 10\u20135000 \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23",
    },
    formErrorNameLength: {
      en: "Name must be between 2 and 100 characters.",
      th: "\u0e0a\u0e37\u0e48\u0e2d\u0e15\u0e49\u0e2d\u0e07\u0e22\u0e32\u0e27 2\u2013100 \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23",
    },
    formHoneypotLabel: { en: "Leave blank", th: "\u0e40\u0e27\u0e49\u0e19\u0e27\u0e48\u0e32\u0e07" },
  },
  education: {
    label: { en: "Education", th: "\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32" },
    coursework: { en: "Relevant Coursework", th: "\u0e27\u0e34\u0e0a\u0e32\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07" },
  },
  cta: {
    mailto: {
      en: "mailto:" +
        "anirut.choky46@gmail.com" +
        "?subject=Job%20Inquiry%20%E2%80%94%20Anirut%20Portfolio&body=Hello%20Anirut%2C%0A%0A",
      th: "mailto:" +
        "anirut.choky46@gmail.com" +
        "?subject=%E0%B8%AA%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%95%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%87%20%E2%80%94%20Anirut%20Portfolio&body=%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B5%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A%2C%0A%0A",
    },
  },
  footer: {
    copy: {
      en: "Industrial Software Portfolio",
      th: "Portfolio \u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e2d\u0e38\u0e15\u0e2a\u0e32\u0e2b\u0e01\u0e23\u0e23\u0e21",
    },
    top: { en: "Top", th: "\u0e1a\u0e19\u0e2a\u0e38\u0e14" },
  },
  langToggle: { en: "TH", th: "EN" },
} as const;

export const projects: Project[] = [
  {
    id: "gt-act",
    name: "GT-ACT",
    title: "Cycle time analysis and setup sheet automation",
    role: "Process Engineer Internship",
    image: "/GT-ACT.png",
    imageAlt: "GT-ACT application identity artwork",
    imageMode: "logo",
    screenshots: [
      "/screenshots/gt-act/Cycle time.png",
      "/screenshots/gt-act/D check.png",
      "/screenshots/gt-act/Setup sheet.png",
      "/screenshots/gt-act/Tool list.png"
    ],
    repository: "https://github.com/Luckyz777/GT-ACT",
    strapline: "G-code analysis / setup documentation",
    problem:
      "NC file checking was manual, setup data lived across spreadsheets, and every production handoff repeated the same paperwork.",
    built:
      "A Python desktop tool that parses G-code, maps tooling data, checks tool length against Z-depth, estimates cycle time, and exports a clean setup sheet for production.",
    proof: [
      "Tracks G0 and G1 movement by N-block for cycle time review.",
      "Flags tool length risk using master tooling data before production handoff.",
      "Exports standardized Excel and PDF setup sheets.",
      "Includes raw G-code preview, NC comparison, search, copy, and tree navigation."
    ],
    stack: ["Python", "G-code parser", "pandas", "openpyxl", "Excel/PDF export"],
    workflow: ["NC input", "Parser", "Safety checks", "Setup sheet"],
    consoleMetric: "Manual NC review became a structured check path.",
    consoleDetail:
      "The core value is catching setup risk before a program reaches the machine.",
    impact: "Designed to reduce manual NC review time and surface tool-length risks before the program reaches the machine.",
    caseStudy: {
      context: "CNC handoff required setup sheets, tool lists, and program review before work reached the machine.",
      challenge: "Review data was spread across NC files and spreadsheets, making manual checking slow and inconsistent.",
      approach: "Parse G-code into reviewable blocks, connect the result with tooling data, then export a standardized setup sheet.",
      result: "Manual review became a repeatable workflow with cycle-time summary, safety checks, and export-ready documentation.",
      lessons: "Manufacturing software works best when it mirrors the handoff language operators and process engineers already use."
    }
  },
  {
    id: "gt-path",
    name: "GT-PATH",
    title: "Offline NC and G-code path viewer",
    role: "Desktop App Developer",
    image: "/GT-PATH.png",
    imageAlt: "GT-PATH application logo",
    imageMode: "logo",
    screenshots: [
      "/screenshots/gt-path/iso.png",
      "/screenshots/gt-path/top.png",
      "/screenshots/gt-path/default.png"
    ],
    videoUrl: "/screenshots/gt-path/run.mp4",
    repository: "https://github.com/Luckyz777/GT-PATH",
    strapline: "Offline CNC toolpath verification",
    problem:
      "Engineers needed a quick way to inspect toolpath behavior on a local machine \u2014 without CAM software, internet access, or long setup.",
    built:
      "A PySide6 desktop shell paired with an offline web viewer that loads NC files, steps through motion, and flags travel and rapid-move risks.",
    proof: [
      "Parses common NC/G-code motion including G0, G1, G2, G3, G81-G89, G90/G91, and G20/G21.",
      "Handles work offsets, tool length, coordinate rotation, and simple subprogram expansion.",
      "Shows machine, stock, and fixture boxes with travel and rapid-move warnings.",
      "Runs fully offline from disk-loaded HTML, CSS, and JavaScript."
    ],
    stack: ["Python", "PySide6", "JavaScript", "HTML/CSS", "Offline viewer"],
    workflow: ["Program load", "Motion parse", "Path view", "Warnings"],
    consoleMetric: "Toolpath review moved closer to the shop floor.",
    consoleDetail:
      "The app gives an engineer a fast check before opening a heavier CAM workflow.",
    impact: "Designed to reduce dependence on a paid CAM seat for first-pass NC verification and run fully offline on shop-floor laptops.",
    caseStudy: {
      context: "Engineers needed a quick offline way to inspect CNC motion before opening a heavier CAM workflow.",
      challenge: "NC files contain motion modes, offsets, arcs, peck drilling, and rapid moves that are hard to validate from text alone.",
      approach: "Pair a desktop shell with an offline viewer that parses NC motion and presents the resulting path with warnings.",
      result: "Toolpath review moved closer to the shop floor and became easier to explain during handoff.",
      lessons: "A lightweight verifier does not need to replace CAM. It needs to make first-pass risk visible."
    }
  },
  {
    id: "gt-fixsys",
    name: "GT-FIXSYS",
    title: "Fixture requisition and monitoring system",
    role: "Full Workflow Builder",
    image: "/GT-FIXSYS.png",
    imageAlt:
      "GT-FIXSYS monitoring dashboard with fixture inventory, borrowed items, overdue items, and maintenance counts",
    imageMode: "screenshot",
    screenshots: [
      "/screenshots/gt-fixsys/Monitoring.png",
      "/screenshots/gt-fixsys/requisition.png",
      "/screenshots/gt-fixsys/usage.png",
      "/screenshots/gt-fixsys/Checklist SPL.png"
    ],
    repository: "https://github.com/Luckyz777/GT-FIXSYS",
    strapline: "Fixture management / barcode workflow",
    problem:
      "Tool-room fixture status was hard to audit when borrowing, returning, master data, and images all relied on direct spreadsheet edits.",
    built:
      "A fixture management system with QR / Data Matrix scanning, borrow and return flows, item status, transaction history, and admin-controlled master data.",
    proof: [
      "Covers monitor, requisition, master data, and admin workflows.",
      "Uses exact code matching for scan-based borrow and return actions.",
      "Tracks available, pending, overdue, missing, obsolete, and deleted fixture states.",
      "Connects Excel-based master data and cache files while reducing direct edit risk."
    ],
    stack: ["Python", "PySide6", "openpyxl", "React", "FastAPI", "Barcode scan"],
    workflow: ["Scan code", "Check status", "Borrow/return", "History"],
    consoleMetric: "Fixture status became visible without opening the master workbook.",
    consoleDetail:
      "The workflow is built around the tool-room reality: scan the item, confirm the state, record the action.",
    impact: "Designed to reduce spreadsheet lookup time for fixture transactions across a 100+ item tool room.",
    caseStudy: {
      context: "Fixture borrowing, returning, master data, and images were difficult to audit when workflows depended on spreadsheet edits.",
      challenge: "Tool-room users needed status visibility without risking accidental changes to master workbooks.",
      approach: "Create scan-first borrow/return flows, visible item states, admin-controlled master data, and transaction history.",
      result: "Fixture availability and transaction history became visible from the application instead of the workbook.",
      lessons: "For tool-room software, the fastest workflow is scan, confirm, record, and return to work."
    }
  },
  {
    id: "nc-compare",
    name: "NC Compare",
    title: "NC file revision comparison and change tracking",
    role: "Tool Developer",
    image: "/screenshots/nc-compare/compare.png",
    imageAlt: "NC Compare side-by-side revision comparison interface",
    imageMode: "screenshot",
    screenshots: [
      "/screenshots/nc-compare/compare.png",
      "/screenshots/nc-compare/summary.png",
      "/screenshots/nc-compare/pdf export.png"
    ],
    repository: "https://github.com/Luckyz777/NC-Compare",
    strapline: "G-code diff / revision change tracking",
    problem:
      "When NC files changed across ECN revisions, engineers had no fast way to see which Feed, Speed, or Tool values actually moved. Plain text diff missed the structured G-code intent and often broke on Thai or Japanese encodings.",
    built:
      "A Python desktop app that loads two NC files, parses tokens (G/T/M/X/Y/Z/F/S), shows a side-by-side colored diff, and exports a change report as PDF or Word for ECN paperwork.",
    proof: [
      "Token-level analysis surfaces Feed, Speed, and Tool changes that plain text diff hides.",
      "Side-by-side colored diff with line-level highlighting.",
      "Drag-and-drop file loading.",
      "Exports change reports as PDF and Word documents.",
      "Handles UTF-8, CP874, CP932, and Shift-JIS encodings without mojibake."
    ],
    stack: ["Python", "tkinter", "ReportLab", "python-docx", "difflib"],
    workflow: ["Load 2 files", "Token parse", "Diff view", "Export report"],
    consoleMetric: "ECN review became a structured token diff instead of eyeballing text.",
    consoleDetail:
      "The core value is making NC revision changes clear enough to support ECN review.",
    impact: "Designed to turn manual NC revision review into a focused token-level diff for ECN checks.",
    caseStudy: {
      context: "ECN revisions can change Feed, Speed, Tool, or Z-depth values while keeping the surrounding program visually similar.",
      challenge: "Plain text diff is noisy and can miss structured G-code intent, especially across files with Thai or Japanese comments.",
      approach: "Decode common encodings, parse token groups, compare line-level changes, and export a report for ECN paperwork.",
      result: "Revision review becomes a focused token diff with export-ready evidence.",
      lessons: "In production review, the important question is not only what text changed, but what machining intent changed."
    }
  }
];

export const methodologySteps = [
  {
    label: "01",
    title: "Observe the real constraint",
    body: "Start from shop-floor review, operator handoff, spreadsheet pain, and tool-room status gaps before deciding what to build."
  },
  {
    label: "02",
    title: "Co-design with users",
    body: "Translate process engineer and operator language into screens, checks, and reports that fit existing work habits."
  },
  {
    label: "03",
    title: "Build verifiable workflows",
    body: "Use parsers, scan flows, exports, and audit-friendly data paths so each action leaves evidence."
  },
  {
    label: "04",
    title: "Validate and simplify",
    body: "Test the workflow against real NC files, fixture data, and setup sheets, then remove steps that slow the handoff."
  }
] as const;

export const skillGroups = [
  {
    name: "Software",
    items: [
      ["Python Desktop Apps", "PySide6"],
      ["Data Automation", "pandas / openpyxl"],
      ["Web Interfaces", "React / Next.js"],
      ["APIs", "FastAPI"],
      ["Packaging", "PyInstaller"]
    ]
  },
  {
    name: "Manufacturing",
    items: [
      ["G-code and CNC Logic", "NC / Fanuc"],
      ["Cycle Time Analysis", "G0 / G1"],
      ["Fixture Workflows", "Tool Room"],
      ["Setup Sheet Control", "Excel / PDF"],
      ["Shop-Floor Validation", "Safety checks"]
    ]
  },
  {
    name: "Engineering",
    items: [
      ["3D CAD and Drafting", "SolidWorks / CATIA"],
      ["FEA and Simulation", "ANSYS"],
      ["Mechanical Prototyping", "Workshop"],
      ["Analysis", "MATLAB"],
      ["Embedded Prototypes", "Arduino"]
    ]
  }
] as const;

export const educationProjects = [
  {
    meta: "Aug 2023 / Formula Student",
    title: "Formula Student race car",
    copy:
      "Worked on battery, chassis, and aerodynamics with fabrication, testing, data analysis, cost review, and dynamic event preparation for TSAE Auto Challenge: Student Formula 2024."
  },
  {
    meta: "Feb 2024 / Machine Design",
    title: "Stair-climbing robot",
    copy:
      "Designed and built a mechanism prototype for stair climbing, then tuned drive behavior for stability and test performance."
  },
  {
    meta: "Nov 2025 · Senior Capstone Project · FEA",
    title: "EV frontal impact structure",
    copy:
      "Senior Capstone Project. Used SolidWorks and ANSYS to study deformation, stress behavior, material choice, and energy absorption for passenger safety in an electric vehicle frontal collision scenario."
  }
];
