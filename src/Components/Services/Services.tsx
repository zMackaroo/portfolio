import './Services.scss';
import Image1 from '../../Assets/Images/service-1.svg';
import Image2 from '../../Assets/Images/service-2.svg';
import Image3 from '../../Assets/Images/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'UI/UX design',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
];

function Services() {
  return (
    <section id="services" className="services container section">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => (
          <div key={id} className="services__card">
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
