import { useTranslation } from "../contexts/LangContext"
function Contact() {
    const {translations} = useTranslation();
    return(
        <h1>{translations.NavBar.contact}</h1>
    )
}

export default Contact