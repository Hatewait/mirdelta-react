import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules"
import './MainSlider.css';

// стили Swiper (обязательные)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SwiperSlideItem from './SwiperSlideItem.tsx';

const slides = [
  { src: '/main-page/slide1.jpg', alt: 'Slide 1', heroDescription: 'Описание', description: 'Описание 1' },
  { src: '/main-page/slide2.jpg', alt: 'Slide 2', heroDescription: 'Описание2',  description: 'Описание 2' },
  { src: '/main-page/slide3.jpg', alt: 'Slide 3',  heroDescription: 'Описание3', description: 'Описание 3' },
];

const MainSlider: React.FC = () => {
  return (
    <section className="main-page__main-slider section-offset">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        navigation={{
          nextEl: "[data-main-page-slider-arrow_next]",
          prevEl: "[data-main-page-slider-arrow_prev]",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={300}
        effect="fade"
      >

        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperSlideItem src={slide.src}
                               alt={slide.alt}
                               heroDescription={slide.heroDescription}
                               description={slide.description}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

export default MainSlider;
