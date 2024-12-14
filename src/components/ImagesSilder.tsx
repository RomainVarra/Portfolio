import { useState } from "react";
import style from "./ImagesSlider.module.css"
type ImageType = {
    leftImage: string,
    rightImage:string,
}

function ImagesSlider({leftImage,rightImage} : ImageType) {
    const [mouse, setMouse]= useState(50);

    const HandleMouse = (e: { currentTarget: any; clientX: number; }) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percentage = (offsetX/rect.width)*100;
        setMouse(percentage);
    }
    return(
        <div
        className={style.sliderContainer}
        onMouseMove={HandleMouse}
        onMouseLeave={() => setMouse(50)}>
            <div
            className={style.sliderLeft}
            style = {{
                backgroundImage: `url(${leftImage})`,
                width: `${mouse}%`,
            }}
            ></div>
            <div
            className={style.sliderRight}
            style = {{
                backgroundImage: `url(${rightImage})`,
                width: `${100 - mouse}%`,
            }}>
            </div>
        </div>
    )
}

export default ImagesSlider;