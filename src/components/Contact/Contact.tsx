import { useTranslation } from "../../contexts/LangContext";
import style from "./contact.module.css";
import {
    FaFacebook,
    FaLinkedin,
    FaEnvelope,
    FaGithub
  } from "react-icons/fa";

function Contact() {
    const {translations} = useTranslation();
    return(
        <>
        <h1 className={style.Title}>{translations.NavBar.contact}</h1>
        <article className={style.contactSection}>
            <p className={style.contactText}>{translations.Contact.Contact_me}</p>
        <section className={style.iconeContactSection}>
        <a href="mailto:romain.varra@hotmail.com" target="_blank" rel="noreferrer">
        <FaEnvelope className={style.contactIcone} /> 
        </a>
            <a href="https://www.linkedin.com/in/romain-varra/" target="_blank" rel="noreferrer">
            <FaLinkedin className={style.contactIcone} />
          </a>
          <a href="https://github.com/RomainVarra/" target="_blank" rel="noreferrer">
            <FaGithub className={style.contactIcone} />
          </a>
          <a href="https://www.facebook.com/romain.varra" target="_blank" rel="noreferrer">
            <FaFacebook className={style.contactIcone}/>
          </a>   
        </section>
        </article>
        </>
    )
}

export default Contact