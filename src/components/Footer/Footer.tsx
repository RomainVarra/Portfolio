import style from "./footer.module.css"
import {
    FaFacebook,
    FaLinkedin,
  } from "react-icons/fa";

function Footer() {
    return(
        
        <article className={style.footerSection}>
            <section className={style.footerText}>
        <p>© Portfolio Romain Varra</p>
            </section>
            <section >
            <a href="https://www.linkedin.com/in/romain-varra/" target="_blank" rel="noreferrer">
            <FaLinkedin className={style.footerIcone} />
          </a>
          <a href="https://www.facebook.com/romain.varra" target="_blank" rel="noreferrer">
            <FaFacebook className={style.footerIcone} />
          </a>        
            </section>
        </article>
        
    )
}

export default Footer;