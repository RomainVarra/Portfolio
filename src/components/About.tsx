import { useTranslation } from "../contexts/LangContext"; 

function About () {
    const {translations} = useTranslation();
    return(
        <>
        <h1>{translations.NavBar.about}</h1>
        </>
    )
}

export default About;