import "./CaseStudy.css";
import worksSplitly from "../../assets/works/splitly.png";

function CaseStudy() {
  return (
    <div className="case-study">
      <div className="case-study-title">
        <h1>amazing cases</h1>
      </div>
      <div className="case-study-works">
        <div
          className="case-study-works-item"
          onClick={() =>
            window.open(
              "https://www.figma.com/design/Ob0hYfrj2ECaaCZQAiBsjx/Splitly?node-id=0-1&m=dev&t=yresbiqW1vZzRX55-1",
              "_blank"
            )
          }
        >
          <div className="case-study-works-item-image">
            <img src={worksSplitly} alt="works-splitly" />
          </div>
          <h1>Splitly</h1>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
