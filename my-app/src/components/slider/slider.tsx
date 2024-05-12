import style from "./slider.module.scss";
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export const SliderBlock = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    arrows: true,
  };

  return (
      <Slider {...settings}>
        <div className={style.sliderItem}>
          <img
            src="https://24torg.by/uploads/category/871/menu_ruchnoy-instrument.jpg"
            alt="№"
          />
        </div>
        <div className={style.sliderItem}>
          <img
            src="https://24torg.by/uploads/category/871/menu_ruchnoy-instrument.jpg"
            alt="№"
          />
        </div>
        <div className={style.sliderItem}>
          <img
            src="https://24torg.by/uploads/category/871/menu_ruchnoy-instrument.jpg"
            alt="№"
          />
        </div>
      </Slider>
  );
};
