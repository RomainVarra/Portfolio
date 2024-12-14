import { useState } from "react";
import style from "./ImagesSlider.module.css";

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
      <div className={style.sliderText}>
        {mouse < 50 ? <h1>Designer</h1> : <h1>&lt;Coder&gt;</h1>}
      </div>
    </div>
  );
}

export default ImagesSlider;