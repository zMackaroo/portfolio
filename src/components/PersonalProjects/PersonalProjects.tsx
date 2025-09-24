import "./PersonalProjects.css";
import worksSplitly from "../../assets/works/splitly.png";
import worksTripBuddy from "../../assets/works/tripbuddy.png";
import worksUrbanvogue from "../../assets/works/urbanvogue.png";
import worksCuteKnights from "../../assets/works/cuteknights.png";
import worksAdoptPet from "../../assets/works/adopt-pet.jpeg";

function PersonalProjects() {
  return (
    <div className="personal-projects">
      <h1>
        personal <span>projects</span>
      </h1>
      <div className="personal-projects-container">
        <div className="personal-projects-item">
          <div className="personal-projects-item-image">
            <img src={worksSplitly} alt="works-splitly" />
          </div>
          <div className="personal-projects-item-description">
            <div className="personal-projects-item-description-title">
              <h1>Splitly</h1>
              <h2>Split-Bill App</h2>
            </div>
            <p>
              Splitly is a simple and efficient bill-splitting app designed to
              make group expenses hassle-free. Whether on a trip, dining out, or
              sharing costs with friends, Splitly helps users calculate and
              manage equal shares with ease. By streamlining expense tracking
              and ensuring fairness, it eliminates the stress of manual
              calculations and keeps everyone on the same page.
            </p>
            <div className="personal-projects-item-technologies">
              <p>React Native</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>Expo</p>
              <p>Firebase</p>
              <p>NestJS</p>
              <p>MongoDB</p>
            </div>
            <button>Developing</button>
          </div>
        </div>
        <div className="personal-projects-item">
          <div
            className="personal-projects-item-image"
            onClick={() =>
              window.open("https://adopt-pet-eight.vercel.app/", "_blank")
            }
          >
            <img src={worksAdoptPet} alt="works-adoptpet" />
          </div>
          <div className="personal-projects-item-description">
            <div className="personal-projects-item-description-title">
              <h1>Adopt Pet</h1>
              <h2>Pet Adoption Website</h2>
            </div>
            <p>
              Adopt Pet is a pet adoption website designed to help people find
              their perfect pet. It provides a list of pets available for
              adoption, and allows users to filter pets by breed, age, and
              gender. It also provides a way to contact the shelter that is
              hosting the pet.
            </p>
            <div className="personal-projects-item-technologies">
              <p>ReactJS</p>
              <p>TypeScript</p>
              <p>CSS</p>
              <p>Vercel</p>
            </div>
            <button
              onClick={() =>
                window.open("https://adopt-pet-eight.vercel.app/", "_blank")
              }
            >
              View Website
            </button>
          </div>
        </div>
        <div className="personal-projects-item">
          <div
            className="personal-projects-item-image"
            onClick={() =>
              window.open("https://tripbuddyai.vercel.app/", "_blank")
            }
          >
            <img src={worksTripBuddy} alt="works-tripbuddy" />
          </div>
          <div className="personal-projects-item-description">
            <div className="personal-projects-item-description-title">
              <h1>TripBuddy</h1>
              <h2>AI Travel Planner</h2>
            </div>
            <p>
              TripBuddyAI is a smart travel companion website designed to
              simplify trip planning by generating personalized itineraries
              tailored to your destination. It provides practical insights on
              transportation options, estimated costs, and nearby hotel
              recommendations, allowing travelers to save time and make informed
              decisions. With its intuitive interface and AI-powered
              suggestions, TripBuddyAI makes organizing journeys easier,
              smarter, and more efficient.
            </p>
            <div className="personal-projects-item-technologies">
              <p>ReactJS</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>Gemini AI</p>
              <p>ExpressJS</p>
              <p>MongoDB</p>
              <p>Vercel</p>
            </div>
            <button
              onClick={() =>
                window.open("https://tripbuddyai.vercel.app/", "_blank")
              }
            >
              View Website
            </button>
          </div>
        </div>
        <div className="personal-projects-item">
          <div
            className="personal-projects-item-image"
            onClick={() => window.open("https://urbanvogue.asia/", "_blank")}
          >
            <img src={worksUrbanvogue} alt="works-urbanvogue" />
          </div>
          <div className="personal-projects-item-description">
            <div className="personal-projects-item-description-title">
              <h1>Urbanvogue.asia</h1>
              <h2>Fashion Blog</h2>
            </div>
            <p>
              Urbanvogue.asia is a fashion-forward digital platform dedicated to
              delivering the latest news, trends, and insights from the global
              fashion industry. Backed by FAD Modeling School, it serves as both
              a style resource and an industry hub, bridging aspiring
              professionals, fashion enthusiasts, and trendsetters with valuable
              content. The platform highlights emerging designers, runway
              showcases, and lifestyle features, making it a go-to destination
              for staying informed and inspired in the ever-evolving world of
              fashion.
            </p>
            <div className="personal-projects-item-technologies">
              <p>ReactJS</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>ExpressJS</p>
              <p>MongoDB</p>
              <p>Vercel</p>
            </div>
            <button
              onClick={() => window.open("https://urbanvogue.asia/", "_blank")}
            >
              View Website
            </button>
          </div>
        </div>
        <div className="personal-projects-item">
          <div
            className="personal-projects-item-image"
            onClick={() =>
              window.open(
                "https://opensea.io/collection/cute-knights",
                "_blank"
              )
            }
          >
            <img src={worksCuteKnights} alt="works-cuteknights" />
          </div>
          <div className="personal-projects-item-description">
            <div className="personal-projects-item-description-title">
              <h1>Cute Knights</h1>
              <h2>Polygon NFT</h2>
            </div>
            <p>
              Cute Knights is a generative NFT collection built on the Polygon
              blockchain, featuring 20x20 pixel art characters. Each knight is
              uniquely created through algorithmic generation, blending the
              charm of retro pixel aesthetics with blockchain-powered digital
              ownership. Designed to be collectible, fun, and accessible, the
              project highlights creativity and technical precision in smart
              contract deployment and generative art development.
            </p>
            <div className="personal-projects-item-technologies">
              <p>Photoshop</p>
              <p>ExpressJS</p>
              <p>Polygon</p>
            </div>
            <button
              onClick={() =>
                window.open(
                  "https://opensea.io/collection/cute-knights",
                  "_blank"
                )
              }
            >
              View Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;
