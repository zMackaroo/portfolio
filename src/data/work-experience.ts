export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  icon: string;
};

export const workExperience: WorkExperience[] = [
  {
    id: "snsoft",
    company: "SNSoft Technology Inc.",
    role: "Sr. Frontend Developer",
    startDate: "Dec 2025",
    endDate: "Present",
    description:
      "Led the development of scalable web and mobile platforms using React, TypeScript, and React Native, improving user experience, operational efficiency, and deployment workflows through reusable architectures, CI/CD pipelines, and cross-functional collaboration.",
    bullets: [
      "Developed and maintained multiple platform pages, landing pages, and web features using React, TypeScript, and modern frontend technologies, enhancing SEO, user engagement, and platform performance across responsive web experiences, resulting in seamless integrations and an optimized user experience.",
      "Led the development of a customizable shared library used across multiple projects and repositories, implementing clear version control practices and Storybook documentation to improve reusability, consistency, and development efficiency.",
      "Led the end-to-end development of a digital marketing platform for an international client, streamlining business operations through scalable web solutions, responsive user experiences, and modern frontend architecture aligned with business growth and digital transformation goals.",
      "Developed a React Native mobile application for the company’s internal HRIS platform, enabling employees to access and manage employee-related information, submit requests, and streamline HR-related processes. Supported HR operations by implementing features for employee management, request handling, and internal workflow efficiency.",
      "Contributed to code reviews and regular feature updates, ensuring app reliability, preventing functionality issues, and reducing bugs.",
      "Managed project tracking and CI/CD pipelines using Jenkins, improving development transparency and deployments.",
      "Coordinated sprint planning, refinement, and product demos, ensuring alignment between business goals and technical execution, leading to on-time delivery of features and releases.",
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "NodeJS",
      "ExpressJS",
      "Puppeteer",
      "gRPC",
      "webSocket",
      "Storybook",
    ],
    icon: "/assets/icons/snsoft.svg",
  },
  {
    id: "samsung",
    company: "Samsung R&D Institute Philippines",
    role: "Software Engineer",
    startDate: "Jul 2023",
    endDate: "Nov 2024",
    description:
      "Led the development of Samsung enterprise solutions and AI-driven features using React.js, collaborating with global teams to deliver secure, scalable platforms while mentoring developers, managing agile workflows, and enhancing enterprise mobility and data protection services.",
    bullets: [
      "Developed and maintained Samsung enterprise solutions including Samsung Knox Configure and Knox Mobile Enrollment using React.js, supporting large-scale device management and enterprise mobility services for global customers.",
      "Participated in the development of Samsung S24 AI features as part of the core engineering team, contributing to the implementation of new functionalities and enhancements aligned with business and product requirements.",
      "Led and mentored junior developers in the development of the Samsung Seats project, providing technical guidance, code reviews, and collaboration support to ensure high-quality deliverables and efficient development workflows.",
      "Managed agile development tasks by monitoring sprint boards, coordinating feature timelines, and delivering hotfixes and bug resolutions to maintain application stability and performance.",
      "Collaborated closely with Samsung Korea HQ and Canadian counterparts to integrate APIs and deliver cross-regional enterprise solutions, ensuring smooth communication and alignment across international teams.",
      "Contributed to the development and implementation of data encryption and security features within the SEPConnect project, enhancing customer data protection and supporting secure enterprise communication standards.",
      "Participated in sprint planning, feature development, and deployment activities while working within agile teams alongside developers, QA engineers, and stakeholders to ensure timely delivery and reliable product releases.",
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "NodeJS",
      "ExpressJS",
    ],
    icon: "/assets/icons/samsung.jpeg",
  },
  {
    id: "collabera",
    company: "Collabera Digital",
    role: "Frontend Engineer",
    startDate: "Aug 2022",
    endDate: "June 2023",
    description:
      "Led the development of scalable insurance web and mobile platforms for Singlife PH using React, Next.js, and React Native, delivering micro frontend products, streamlined eKYC solutions, and cross-platform integrations across major fintech and banking ecosystems.",
    bullets: [
      "Led development and maintenance of cross-platform web and mobile apps using React JS, Next JS, React Native, Expo, TypeScript, and Redux Toolkit for Singlife PH products across GCash GInsure, UnionBank, Maya, GlobeOne, and Singlife platforms.",
      "Developed and deployed micro frontend insurance products, including Cash for Medical Cost, Cash for Income Loss, Cash for Goals, and 100-in-1 Medical Plan, integrated via WebView across multiple banking platforms.",
      "Led development of Singlife’s One Platform Products and mobile application from the ground up, implementing scalable architectures and modern technologies aligned with business needs.",
      "Streamlined Singlife’s onboarding and eKYC process through Onfido integration, React Hook Form, and Redux Toolkit, improving registration efficiency and user experience.",
      "Collaborated within agile teams with developers, designers, QA engineers, and product managers to deliver features, optimize performance, and maintain platform reliability.",
      "Facilitated sprint planning, refinement sessions, stakeholder demos, production deployments, and post-launch bug fixing.",
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "NodeJS",
      "ExpressJS",
    ],
    icon: "/assets/icons/collabera.png",
  },
  {
    id: "chenvel",
    company: "Chenvel Services Inc.",
    role: "Full Stack Developer",
    startDate: "Feb 2021",
    endDate: "Aug 2022",
    description:
      "Developed scalable ERP and logistics management systems for enterprise operations, building automation platforms and core business modules that streamlined warehouse, payroll, inventory, delivery tracking, and trucking workflows.",
    bullets: [
      "Developed a comprehensive ERP system for Chenvel Services Inc., supporting end-to-end business operations and internal process automation.",
      "Built an auto-generation platform enabling the creation of various business systems without coding, improving development efficiency and scalability of enterprise solutions.",
      "Designed and implemented multiple core modules including Roaming Module for warehouse operations, Payroll System for accounting processes, and Inventory & Tracking System for monitoring door-to-door delivery boxes.",
      "Developed a Trucking Module to track freight mileage, truck status, and vehicle condition, improving logistics visibility and operational monitoring.",
      "Built a Warehouse Module to manage incoming shipments, sort boxes by destination, and streamline logistics workflows for improved operational efficiency.",
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "NodeJS",
      "ExpressJS",
      "C# .Net",
    ],
    icon: "/assets/icons/chenvel.png",
  },
];

export function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} – ${endDate}`;
}
