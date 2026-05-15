export type Project = {
  id: "gt-act" | "gt-path" | "gt-fixsys";
  name: string;
  title: string;
  role: string;
  image: string;
  imageAlt: string;
  imageMode: "logo" | "screenshot";
  repository: string;
  strapline: string;
  problem: string;
  built: string;
  proof: string[];
  stack: string[];
  workflow: string[];
  consoleMetric: string;
  consoleDetail: string;
};

export const profile = {
  name: "Anirut Butnongwa",
  email: "anirut.choky46@gmail.com",
  phone: "098-118-6694",
  location: "Nakhon Ratchasima, Thailand",
  github: "https://github.com/Luckyz777",
  cv: "https://canva.link/u5kqdazwtd3kh6y",
  target: "Mechanical, process, and industrial software roles",
  tagline: "Mechanical engineering graduate building software for the shop floor.",
  summary:
    "I am a Mechanical Engineering student at Suranaree University of Technology (graduating May 2026). During my process engineering internship at Global-Thaixon Precision Industry I built three working tools for CNC review, toolpath verification, and fixture control \u2014 the same applications featured on this page.",
  status: "Open to entry-level roles \u2014 starting May 2026",
  education: "B.Eng. Mechanical Engineering / SUT / May 2026"
};

export const projects: Project[] = [
  {
    id: "gt-act",
    name: "GT-ACT",
    title: "Cycle time analysis and setup sheet automation",
    role: "Process Engineer Internship",
    image: "/GT-ACT.png",
    imageAlt: "GT-ACT application identity artwork",
    imageMode: "logo",
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
      "The value is not a dashboard. The value is catching setup risk before a program reaches the machine."
  },
  {
    id: "gt-path",
    name: "GT-PATH",
    title: "Offline NC and G-code path viewer",
    role: "Desktop App Developer",
    image: "/GT-PATH.png",
    imageAlt: "GT-PATH application logo",
    imageMode: "logo",
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
      "The app gives an engineer a fast check before opening a heavier CAM workflow."
  },
  {
    id: "gt-fixsys",
    name: "GT-FIXSYS",
    title: "Fixture requisition and monitoring system",
    role: "Full Workflow Builder",
    image: "/gt-fixsys-dashboard.png",
    imageAlt:
      "GT-FIXSYS monitoring dashboard with fixture inventory, borrowed items, overdue items, and maintenance counts",
    imageMode: "screenshot",
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
      "The workflow is built around the tool-room reality: scan the item, confirm the state, record the action."
  }
];

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
    meta: "Nov 2025 / FEA",
    title: "EV frontal impact structure",
    copy:
      "Used SolidWorks and ANSYS to study deformation, stress behavior, material choice, and energy absorption for passenger safety."
  }
];
