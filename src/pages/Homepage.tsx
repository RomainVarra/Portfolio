import ImagesSlider from "../components/ImagesSlider/ImagesSilder";
import leftImage from "/Images/photoProfilPersonnalisé.jpg"
import rightImage from "/Images/PhotoProfil.jpg"
import { useTranslation } from "../contexts/LangContext";
import style from "./page.module.css"
import Carousel from "../components/Carousel/Carousel";

function Homepage () {
    const {translations} = useTranslation();
    return(
        <>
        <h1 className={style.welcomeTitle}>{translations.Homepage.maintitle}</h1>
        <ImagesSlider leftImage = {leftImage} rightImage= {rightImage}/>
        <Carousel/>
        </>
    )
}

export default Homepage;