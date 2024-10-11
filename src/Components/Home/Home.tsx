import Me from '../../Assets/Images/Profile.jpg';
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import './Home.scss';

function Home() {
  return (
    <section id="home" className="home container">
      <div className="intro">
        <img src={Me} alt="Me" className="home__img" />
        <h1 className="home__name">Sydney Enciso</h1>
        <span className="home__education">I'm a Software Engineer</span>
        <HeaderSocial />
        <a href="#about" className="btn">
          About me
        </a>
      </div>
      <Shapes />
    </section>
  );
}

export default Home;
