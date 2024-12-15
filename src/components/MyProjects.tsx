import {useTranslation} from "../contexts/LangContext"

function MyProjects() {
    const {translations} = useTranslation();
    return(
        <h2>{translations.NavBar.projects}</h2>
    )
}

export default MyProjects;