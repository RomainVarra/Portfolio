import { useTranslation } from "../../contexts/LangContext"
import style from "./contact.module.css"

function Contact() {
    const {translations} = useTranslation();
    return(
        <>
        <h1>{translations.NavBar.contact}</h1>
        <section className={style.contactSection}>
            <p className={style.contactText}>{translations.Contact.Contact_me}</p>
            <form className={style.contactForm} action="">
                <label htmlFor="">
                    <input className={style.contactFormName} type="text" placeholder="Name" />
                </label>
                <label htmlFor=""><input className={style.contactFormEmail} type="text" placeholder="Email" /></label>
                <label htmlFor=""><input className={style.contactFormText} type="text" placeholder="Message" /></label>
            </form>
        </section>
        <section className={style.contactFormSubmitSection}>
            <button className={style.contactFormSubmit} type="submit">{translations.Contact.submit}</button>
        </section>
        </>
    )
}

export default Contact