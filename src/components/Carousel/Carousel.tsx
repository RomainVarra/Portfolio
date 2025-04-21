import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import  Logos  from "../../data/Skills.json";
import { SkillsType } from "../../lib/types";



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
    return logos.map((logo : SkillsType) => (
      <SwiperSlide key={`${prefix}-${logo.description}`}>
        <img
          width="265"
          height="122"
          src={logo.img}
          alt={logo.description}
          loading="lazy"
          srcSet={logo.img}
          sizes="(max-width: 265px) 100vw, 265px"
        />
      </SwiperSlide>
    ));
  };

  return (
    <>
    <h2>Skills</h2>
    <section
      id="partenaires"
      aria-label="Skills"
      >
      <div>
        <aside aria-label="Carrousel de logos des technologies utilisées">
          <div>
            <a href="#skip-slider-entreprises">
              Contourner le slider des entreprises partenaires
            </a>
          </div>

          <h2>Technologies</h2>

          <div>
            <Swiper {...swiperParams} className="partner-carousel">
              {renderLogos(Logos, "top")}
            </Swiper>

            <Swiper
              {...{
                  ...swiperParams,
                  autoplay: { ...swiperParams.autoplay, reverseDirection: true },
                }}
                className="partner-carousel"
                >
              {renderLogos([...Logos].reverse(), "bottom")}
            </Swiper>
          </div>

          <div id="skip-slider-skills" />
        </aside>
      </div>
    </section>
                </>
  );
};

export default Carousel;