import { useTranslation } from "../contexts/LangContext"
function Contact() {
    const {translations} = useTranslation();
    return(
        <h2>{translations.NavBar.contact}</h2>
    )
}

export default Contact