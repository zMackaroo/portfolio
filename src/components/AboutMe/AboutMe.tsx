import "./AboutMe.css";
import selfie from "../../assets/png/selfie.png";
import uiux from "../../assets/svg/ui-ux.svg";
import frontEnd from "../../assets/svg/frontend.svg";
import backEnd from "../../assets/svg/backend.svg";
import iconReact from "../../assets/png/react.png";
import iconJavaScript from "../../assets/png/javascript.png";
import iconVueJS from "../../assets/png/vuejs.png";
import iconNextJS from "../../assets/png/nextjs.png";
import iconLaravel from "../../assets/png/laravel.png";
import iconHtml from "../../assets/png/html.png";
import iconCss from "../../assets/png/css.png";
import iconTailwindCSS from "../../assets/png/tailwind.png";
import iconSvelte from "../../assets/png/svelte.png";
import iconNodeJS from "../../assets/png/nodejs.png";
import iconExpressJS from "../../assets/png/expressjs.png";
import iconAspNetCore from "../../assets/png/asp.png";
import iconAws from "../../assets/png/aws.png";
import iconGithub from "../../assets/png/github.png";
import iconGraphQL from "../../assets/png/graphql.png";
import iconJenkin from "../../assets/png/jenkins.png";
import iconMongoDb from "../../assets/png/mongodb.png";
import iconRestfulApi from "../../assets/png/restfulapi.png";
import iconSqlServer from "../../assets/png/sqlserver.png";
import iconVercel from "../../assets/png/vercel.png";
import iconAzure from "../../assets/png/azure.png";
import iconEmail from "../../assets/png/email.png";
import iconLinkedin from "../../assets/png/linkedin.png";

function AboutMe() {
  return (
    <div className="about-me">
      <h1>
        <span>about</span> me
      </h1>
      <div className="about-me-header">
        <img src={selfie} alt="" />
        <div className="about-me-header-info">
          <h1>Sydney D. Enciso</h1>
          <p>
            I am a Senior Frontend Developer and Fullstack Specialist with 6+
            years of experience delivering scalable, high-performing, and
            user-focused digital products. Skilled in React Native, Next.js,
            React.js, JavaScript, Vue.js, Laravel, Node.js/Express.js, and C#
            .NET, I have worked with leading FinTech organizations and globally
            competitive companies to create solutions that balance technical
            excellence with intuitive design. From transforming Figma designs
            into pixel-perfect, responsive applications to optimizing
            performance and scalability, I thrive in projects that demand both
            creativity and precision. Beyond development, I mentor junior
            engineers, collaborate across teams, and design engaging UI
            experiences that keep products dynamic and memorable. Passionate
            about continuous learning and innovation, I aim to build digital
            ecosystems that empower people, with growing interests in AI-driven
            interfaces, cloud-native architectures, and scalable platforms.
          </p>
          <div className="about-me-header-social-media">
            <p
              onClick={() =>
                window.open("https://github.com/zmackaroo", "_blank")
              }
            >
              <img src={iconGithub} alt="github" />
              Github
            </p>
            <p
              onClick={() =>
                window.open("mailto:sydenciso.work@gmail.com", "_blank")
              }
            >
              <img src={iconEmail} alt="email" />
              Email
            </p>
            <p
              onClick={() =>
                window.open("https://www.linkedin.com/in/syd-enciso/", "_blank")
              }
            >
              <img src={iconLinkedin} alt="linkedin" />
              LinkedIn
            </p>
          </div>
        </div>
      </div>
      <div className="about-me-header-skills">
        <div className="about-me-header-skills-item">
          <div>
            <img src={uiux} alt="ui-ux" />
          </div>
          <div className="about-me-header-skills-item-description">
            <h1>Interface & Design</h1>
            <p>Briefing, wireframe, UX, UI and branding.</p>
          </div>
        </div>
        <div className="about-me-header-skills-item">
          <div>
            <img src={frontEnd} alt="front-end" />
          </div>
          <div className="about-me-header-skills-item-description">
            <h1>Front-End</h1>
            <p>Web and Mobile (React Native/React/Vue)</p>
          </div>
        </div>
        <div className="about-me-header-skills-item">
          <div>
            <img src={backEnd} alt="back-end" />
          </div>
          <div className="about-me-header-skills-item-description">
            <h1>Back-End</h1>
            <p>NodeJS / ExpressJS / C# .Net / Laravel</p>
          </div>
        </div>
        <div className="about-me-header-skills-item">
          <div>
            <img src={uiux} alt="ui-ux" />
          </div>
          <div className="about-me-header-skills-item-description">
            <h1>Game Development</h1>
            <p>Unreal Engine / Unity</p>
          </div>
        </div>
      </div>
      <div className="about-me-tech-skills">
        <div className="about-me-tech-skills-item">
          <h1>front-end</h1>
          <div className="about-me-tech-skills-item-technologies">
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconJavaScript} alt="react" />
              <h1>JavaScript</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconReact} alt="react" />
              <h1>React</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconReact} alt="react" />
              <h1>React Native</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconNextJS} alt="react" />
              <h1>NextJS</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconHtml} alt="react" />
              <h1>HTML</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconCss} alt="react" />
              <h1>CSS</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconTailwindCSS} alt="react" />
              <h1>TailwindCSS</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconVueJS} alt="react" />
              <h1>VueJS</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconLaravel} alt="react" />
              <h1>Laravel</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconSvelte} alt="react" />
              <h1>Svelte</h1>
              <span>1 year </span>
            </div>
          </div>
        </div>
        <div className="about-me-tech-skills-item">
          <h1>back-end</h1>
          <div className="about-me-tech-skills-item-technologies">
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconNodeJS} alt="react" />
              <h1>NodeJS</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconExpressJS} alt="react" />
              <h1>ExpressJS</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconJavaScript} alt="react" />
              <h1>NestJS</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconNextJS} alt="react" />
              <h1>Laravel</h1>
              <span>3+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconAspNetCore} alt="react" />
              <h1>ASP Core C# .Net</h1>
              <span>3+ years</span>
            </div>
          </div>
        </div>
        <div className="about-me-tech-skills-item">
          <h1>database/api</h1>
          <div className="about-me-tech-skills-item-technologies">
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconRestfulApi} alt="react" />
              <h1>RESTful API</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconMongoDb} alt="react" />
              <h1>MongoDB</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconRestfulApi} alt="react" />
              <h1>gRPC</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconRestfulApi} alt="react" />
              <h1>tRPC</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconGraphQL} alt="react" />
              <h1>graphQL</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconRestfulApi} alt="react" />
              <h1>postgreSQL</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconSqlServer} alt="react" />
              <h1>SqlServer</h1>
              <span>4+ years</span>
            </div>
          </div>
        </div>
        <div className="about-me-tech-skills-item">
          <h1>devops/ci/cd</h1>
          <div className="about-me-tech-skills-item-technologies">
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconGithub} alt="react" />
              <h1>GitHub</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconGithub} alt="react" />
              <h1>GitHub Actions</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconVercel} alt="react" />
              <h1>Vercel</h1>
              <span>6+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconJenkin} alt="react" />
              <h1>Jenkins</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconHtml} alt="react" />
              <h1>Netlify</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconAws} alt="react" />
              <h1>AWS</h1>
              <span>4+ years</span>
            </div>
            <div className="about-me-tech-skills-item-technologies-item">
              <img src={iconAzure} alt="react" />
              <h1>Azure</h1>
              <span>4+ years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
