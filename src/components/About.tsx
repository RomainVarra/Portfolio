import { useTranslation } from "../contexts/LangContext"; 
import Filter from "./Filter/Filter";
function About () {
    const {translations} = useTranslation();
    return(
        <>
        <h1>{translations.NavBar.about}</h1>
        <Filter/>
        </>
    )
}

export default About;