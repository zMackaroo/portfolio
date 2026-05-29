export interface JourneyMilestone {
  id: string;
  progress: number;
  side: "left" | "right";
  year: string;
  label: string;
  description: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "m1",
    progress: 0.1,
    side: "left",
    year: "2017",
    label: "The Beginning",
    description:
      "Graduated with a BS in Information Technology from Divine Word College of Calapan.",
  },
  {
    id: "m2",
    progress: 0.25,
    side: "right",
    year: "2021",
    label: "First Full-Stack Role",
    description:
      "Joined Chenvel Services Inc. — built an ERP system, payroll, inventory, and trucking modules from scratch.",
  },
  {
    id: "m3",
    progress: 0.45,
    side: "left",
    year: "2022",
    label: "FinTech & Scale",
    description:
      "Shipped micro-frontend insurance products for GCash, UnionBank, Maya, and Globe at Singlife Philippines.",
  },
  {
    id: "m4",
    progress: 0.63,
    side: "right",
    year: "2023",
    label: "Samsung R&D",
    description:
      "Contributed to Knox enterprise solutions and Samsung S24 AI features alongside teams in Korea and Canada.",
  },
  {
    id: "m5",
    progress: 0.8,
    side: "left",
    year: "2025",
    label: "Senior Engineer",
    description:
      "Leading platform development, a shared component library, and a React Native HRIS app at SNSoft Technology.",
  },
  {
    id: "m6",
    progress: 0.93,
    side: "right",
    year: "Now",
    label: "7+ Years & Counting",
    description:
      "Full-stack, cross-platform, and always shipping. Open to the next big challenge.",
  },
];
