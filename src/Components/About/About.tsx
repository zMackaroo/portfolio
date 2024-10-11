import './About.scss';
import Avatar2 from '../../Assets/Images/dp.jpg';
import AboutBox from './AboutBox';

function About() {
  return (
    <section id="about" className="about container section">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Avatar2} alt="Avatar2" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Experienced Front End Developer with a demonstrated history of
              working in the information technology and service industry.
              Skilled in HTML, CSS, Javascript and popular frameworks like
              ReactJS and NodeJS. Strong engineering professional with
              Bachelor’s degree in Information Technology.
            </p>
            <a href="https://drive.google.com/file/d/1_fENS62AFhJGLJk6MJ9ik6CQCgjbcdJ0/view?usp=sharing" target="_blank" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML / CSS </h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage htmlcss"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript / ReactJS</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">AntDesign / MUI</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage antdesign"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">NodeJS / Express</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
