import "./WorkExperience.css";

interface WorkExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    id: 1,
    company: "SNSoft Technology Inc. PH",
    position: "Senior Front End Developer",
    duration: "December 2024 - Present",
    description:
      "I have developed multiple landing pages for clients while maintaining in-house projects, focusing on building complex UI components and animations that improve user experience. I also support sister and partner companies by converting Figma designs into interactive websites and applications, as well as migrating features from web apps to mobile platforms. Additionally, I design and implement seasonal UI themes—such as Halloween skins with custom animations—to keep products engaging and visually dynamic. My work also includes optimizing existing projects and revamping features to enhance performance, usability, and overall user satisfaction.",
    technologies: [
      "NextJS",
      "React",
      "React Native",
      "TypeScript",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "gRPC",
      "TailwindCSS",
      "Storybook",
    ],
    achievements: [
      "Kick-start in-house ui library using NextJS, Storybook, TailwindCSS, and TypeScript",
      "Optimize the existing web app to improve performance, usability, and caching mechanisms",
      "Develop complex UI components and animations for the existing web app",
    ],
  },
  {
    id: 2,
    company: "Samsung Research & Development Institute of the Philippines",
    position: "Software Engineer CL-II",
    duration: "July 2023 - December 2024",
    description:
      "Associate Developer responsible for enhancing features for Knox Mobile Enrollment and Knox Configure, addressing and resolving bugs, and integrating newly introduced functionalities. Maintained and revamped features for these services while collaborating closely with HQ counterparts and QA teams to deliver effective, high-quality solutions. Also developed new features for Knox Configure and managed bug fixes for existing services. Part-take S24 AI development and support.",
    technologies: [
      "React",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "AWS",
      "Docker",
      "Jest",
      "Cypress",
      "JavaScript",
    ],
    achievements: [
      "Part-take in S24 AI development and support",
      "Enhance Knox Mobile Enrollment and Knox Configure features",
      "Develop new features for Knox Configure and manage bug fixes for existing services",
    ],
  },
  {
    id: 3,
    company: "Singlife Philippines Inc.",
    position: "Frontend Developer",
    duration: "August 2022 - June 2023",
    description:
      "I developed the Moovr application using React Native and contributed to the end-to-end design, development, and deployment of UI/UX interfaces. My responsibilities included conducting unit testing with Jest to ensure code quality, as well as executing production and staging releases to support QA and UAT processes. I managed multiple repositories and products, including Cash for Goals, Cash for Goals Education, and Cash for Income Loss, while also integrating APIs to enhance functionality. Additionally, I supported the development of UnionBank Singlife products, delivering reliable and scalable solutions aligned with business requirements.",
    technologies: [
      "React",
      "React Native",
      "ExpressJS",
      "MongoDB",
      "Jest",
      "TypeScript",
      "TailwindCSS",
    ],
    achievements: [
      "Created reusable component library",
      "Part-take in the development of UnionBank Singlife products and Moovr application",
      "Implemented automated testing with Jest",
    ],
  },
  {
    id: 4,
    company: "Dorptil Philippines Inc.",
    position: "Junior Software Engineer",
    duration: "February 2021 - August 2022",
    description:
      "I contributed to the development of an automated software solution designed to generate ERP core functions and interfaces without the need for coding. In addition, I developed multiple in-house applications, including a Packing List system, Empty Box tracker, Accounting software, Warehouse management system, Delivery tracking system, and a parcel warehouse locator. All solutions were built with a strong focus on optimization, scalability, and reusability to streamline business processes and enhance operational efficiency.",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "MongoDB",
      "SQLServer",
      "C# .Net Core",
    ],
    achievements: [
      "Developed multiple in-house applications",
      "Implemented ERP core functions and interfaces",
      "Optimized business processes and operational efficiency",
    ],
  },
  {
    id: 5,
    company: "Upwork/Freelancer",
    position: "Freelance Software Engineer",
    duration: "January 2019 - March 2020",
    description:
      "I developed an e-learning application in China that connects teachers from different countries to teach Chinese and English language courses. The application was built using React Native and Expo for the mobile interface, with Express.js and MongoDB powering the backend to manage business logic and record tracking. Key features included video calling, real-time chat, in-app tokenomics, scheduling, and full CRUD operations for managing records. The platform was designed to deliver a seamless user experience while ensuring scalability and reliability.",
    technologies: [
      "React Native",
      "ExpressJS",
      "MongoDB",
      "WebSocket",
      "Firebase",
      "NodeJS",
      "TailwindCSS",
      "TypeScript",
    ],
    achievements: [
      "Developed an e-learning application in China that connects teachers from different countries to teach Chinese and English language courses",
      "Implemented video calling, real-time chat, in-app tokenomics, scheduling, and full CRUD operations for managing records",
      "Designed a scalable and reliable platform to deliver a seamless user experience",
    ],
  },
];

function WorkExperience() {
  return (
    <section className="work-experience">
      <div className="work-experience-container">
        <h1 className="work-experience-title">
          <span>Work Experience</span>
        </h1>

        <div className="timeline">
          {workExperienceData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-right" : "timeline-left"
              }`}
            >
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <h3 className="timeline-company">{item.company}</h3>
                    <h4 className="timeline-position">{item.position}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>

                  <div className="timeline-card-body">
                    <div className="timeline-technologies">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="timeline-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-marker">
                <div className="timeline-date">{item.duration}</div>
                <div className="timeline-circle"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
