import { ReactTyped } from "react-typed";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>syd.</h1>
        {/* <ToggleSwitch onToggle={(isOn) => console.log("Toggle state:", isOn)} /> */}
      </div>
      <div className="hero-vertical-navigation">
        <div className="hero-vertical-navigation-item">
          <p>contact</p>
        </div>
        <div className="hero-vertical-navigation-item">
          <p>about me</p>
        </div>
        <div className="hero-vertical-navigation-item">
          <p>projects</p>
        </div>
        <div className="hero-vertical-navigation-item">
          <p>cases</p>
        </div>
        <div className="hero-vertical-navigation-item">
          <p>home</p>
        </div>
      </div>
      <div className="hero-content-typing">
        <ReactTyped
          strings={[
            "front-end. web/mobile (developer)__",
            "back-end. (developer)__",
            "ui/ux__",
          ]}
          typeSpeed={30}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
}

export default Hero;
