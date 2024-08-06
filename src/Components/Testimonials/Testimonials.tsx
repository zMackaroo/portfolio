import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsData } from '../../Constant';

import './Testimonials.scss';
import 'swiper/css';
import 'swiper/css/pagination';
function Testimonials() {
  return (
    <section id="testimonials" className="testimonials container section">
      <h2 className="section__title">Reviews</h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
      >
        {testimonialsData.map((key) => (
          <SwiperSlide key={key.id} className="testimonial__item">
            <div className="thumb">
              <img src={key.image} alt="" />
            </div>
            <h3 className="testimonials__title">{key.title}</h3>
            <span className="subtitle">{key.subtitle}</span>
            <div className="comment">{key.comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
