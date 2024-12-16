import { useState } from "react";
import style from "./ImagesSlider.module.css";
import {useNavigate} from "react-router-dom";

type ImageType = {
  leftImage: string;
  rightImage: string;
};

function ImagesSlider({ leftImage, rightImage }: ImageType) {
  const [mouse, setMouse] = useState(50);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;
    setMouse(percentage);
  };

  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/project");
    };

  return (
    <div
      className={style.sliderContainer}
      onMouseMove={handleMouse}
      onMouseLeave={() => setMouse(50)}
    >
      <div
        className={style.sliderLeft}
        style={{
          backgroundImage: `url(${leftImage})`,
          clipPath: `polygon(0 0, ${mouse}% 0, ${mouse}% 100%, 0 100%)`,
        }}
      ></div>
      <div
        className={style.sliderRight}
        style={{
          backgroundImage: `url(${rightImage})`,
          clipPath: `polygon(${mouse}% 0, 100% 0, 100% 100%, ${mouse}% 100%)`,
        }}
      ></div>
      <div className={style.sliderTextLeft}>
         <h2 onClick={handleClick}>&lt;Front-end&gt;</h2>
      </div>
      <div className={style.sliderTextRight}>
      <h2 onClick={handleClick}>&lt;Back-end&gt;</h2>
      </div>
    </div>
  );
}

export default ImagesSlider;