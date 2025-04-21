import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Logos from "../../data/Skills.json";
import type { SkillsType } from "../../lib/types";
import styles from "./carousel.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import { useTranslation } from "../../contexts/LangContext";

const Carousel = () => {
  const swiperParams = {
    modules: [Autoplay],
    spaceBetween: 20,
    slidesPerView: 6,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
    },
  };

  const renderLogos = (logos: typeof Logos, prefix: string) => {
    return logos.map((logo: SkillsType) => (
      <SwiperSlide key={`${prefix}-${logo.description}`}>
        <img
          src={logo.img}
          alt={logo.description}
          className={styles.slideImage}
          loading="lazy"
        />
      </SwiperSlide>
    ));
  };
  const {translations} = useTranslation();

  return (
    <section id="skills" aria-label="Skills" className={styles.carouselWrapper}>
      <h2 className={styles.carouselTitle}>{translations.Carousel.skills}</h2>
      <Swiper {...swiperParams} className={styles.swiper}>
        {renderLogos(Logos, "top")}
      </Swiper>
      <Swiper
        {...{
          ...swiperParams,
          autoplay: { ...swiperParams.autoplay, reverseDirection: true },
        }}
        className={styles.swiper}
      >
        {renderLogos([...Logos].reverse(), "bottom")}
      </Swiper>
    </section>
  );
};

export default Carousel;
