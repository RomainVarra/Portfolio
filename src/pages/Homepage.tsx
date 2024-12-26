import Contact from "../components/Contact";
import ImagesSlider from "../components/ImagesSlider/ImagesSilder";
import MyProjects from "../components/MyProjects/MyProjects";
import leftImage from "../../public/Images/photoProfilPersonnalisé.jpg"
import rightImage from "../../public/Images/PhotoProfil.jpg"
import { useTranslation } from "../contexts/LangContext";

function Homepage () {
    const {translations} = useTranslation();
    return(
        <>
        <h1>{translations.Homepage.maintitle}</h1>
        <ImagesSlider leftImage = {leftImage} rightImage= {rightImage}/>
        <MyProjects/>
        <Contact/>
        </>
    )
}

export default Homepage;