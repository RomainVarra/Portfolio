import Contact from "../components/Contact";
import ImagesSlider from "../components/ImagesSlider/ImagesSilder";
import MyProjects from "../components/MyProjects";
import leftImage from "../../public/Images/7c28c-josef1.jpg"
import rightImage from "../../public/Images/7c28c-josef11.png"
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