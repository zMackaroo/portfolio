import { useState } from 'react';
import { portfolioData } from '../../Constant';
import './Portfolio.scss';

function Portfolio() {
  const [item, setItems] = useState(portfolioData);

  const handleFilterItem = (category: string) => {
    const updatedItems = portfolioData.filter((currItem) => {
      return currItem.category === category;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(portfolioData)}>
          Everything
        </span>
        <span
          className="work__item"
          onClick={() => handleFilterItem('ReactJS')}
        >
          ReactJS
        </span>
        <span className="work__item" onClick={() => handleFilterItem('NextJS')}>
          NextJS
        </span>
        <span
          className="work__item"
          onClick={() => handleFilterItem('Express')}
        >
          Express
        </span>
        <span className="work__item" onClick={() => handleFilterItem('SaasS')}>
          SaaS
        </span>
      </div>

      <div className="work__container grid">
        {item.map((key, id) => (
          <div key={id} className="work__card">
            <div className="work__thumbnail">
              <img src={key.image} alt="" className="work__img" />
              <div className="work__mask"></div>
            </div>
            <span className="work__category">{key.category}</span>
            <h3 className="work__title">{key.title}</h3>
            <a href="#" className="work__button">
              <i className="icon-link work__button-icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
