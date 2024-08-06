import { resumeData } from '../../Constant';
import './Resume.scss';

function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {resumeData.map((key, id) => {
            if (key.category === 'education') {
              return (
                <div key={id} className="timeline__item">
                  <i className={key.icon}></i>
                  <span className="timeline__date">{key.year}</span>
                  <h3 className="timeline__title">{key.title}</h3>
                  <p className="timeline__text">{key.desc}</p>
                </div>
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {resumeData.map((key, id) => {
            if (key.category === 'experience') {
              return (
                <div key={id} className="timeline__item">
                  <i className={key.icon}></i>
                  <span className="timeline__date">{key.year}</span>
                  <h3 className="timeline__title">{key.title}</h3>
                  <p className="timeline__text">{key.desc}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
