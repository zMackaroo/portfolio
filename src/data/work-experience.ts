export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  yearLabel: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  icon: string;
};

export const workExperienceContent = {
  sceneTag: "Scene 006 — Credits",
  heading: "The Filmography",
} as const;

export const workExperience: WorkExperience[] = [
  {
    id: "snsoft",
    company: "SNSoft Technology Inc.",
    role: "Sr. Frontend Developer",
    startDate: "Dec 2025",
    endDate: "Present",
    yearLabel: "2025 — NOW",
    description:
      "Leading scalable web & mobile platforms, a shared component library, and a React Native HRIS app with CI/CD pipelines and cross-functional collaboration.",
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "gRPC",
      "Storybook",
    ],
    icon: "/assets/icons/snsoft.svg",
  },
  {
    id: "samsung",
    company: "Samsung R&D Institute PH",
    role: "Software Engineer",
    startDate: "Jul 2023",
    endDate: "Nov 2024",
    yearLabel: "2023 — 2024",
    description:
      "Built Knox enterprise solutions and contributed to Samsung S24 AI features alongside teams in Korea and Canada; mentored developers and led the Seats project.",
    tags: ["React", "TypeScript", "Next.js", "Node.js"],
    icon: "/assets/icons/samsung.jpeg",
  },
  {
    id: "collabera",
    company: "Collabera Digital · Singlife PH",
    role: "Frontend Engineer",
    startDate: "Aug 2022",
    endDate: "June 2023",
    yearLabel: "2022 — 2023",
    description:
      "Shipped micro-frontend insurance products across GCash, UnionBank, Maya, and GlobeOne; streamlined eKYC onboarding with Onfido integration.",
    tags: ["React Native", "Next.js", "Redux", "Expo"],
    icon: "/assets/icons/collabera.png",
  },
  {
    id: "chenvel",
    company: "Chenvel Services Inc.",
    role: "Full Stack Developer",
    startDate: "Feb 2021",
    endDate: "Aug 2022",
    yearLabel: "2021 — 2022",
    description:
      "Built a comprehensive ERP with a no-code auto-generation platform, plus warehouse, payroll, inventory, and trucking modules from the ground up.",
    tags: ["React", "C# .Net", "Node.js", "TypeScript"],
    icon: "/assets/icons/chenvel.png",
  },
];

export function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} – ${endDate}`;
}
