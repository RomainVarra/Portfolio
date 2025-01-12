import { useTranslation } from "../../contexts/LangContext";
import style from "./Error404.module.css"
import { NavLink } from "react-router-dom";

function Error404() {
    const translations = useTranslation();
    return(  
        <>
        <section className={style.errorSection}>
        <img className={style.errorImg} src="/Images/giphy.webp" alt="Le titanic coule. Comme mon site... Bienvenue sur ma page 404" />
        <p className={style.errorText}>{translations.translations.ErrorPage.error}</p>
        </section>
        <button className={style.errorBtn}>
        <NavLink to={"/"} className={style.errorLink}>{translations.translations.ErrorPage.goBackHome}</NavLink>
        </button>
        </>
        
    )
}

export default Error404;