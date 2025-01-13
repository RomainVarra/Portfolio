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
            <a className={style.footerIcone} href="https://www.linkedin.com/in/romain-varra/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a className={style.footerIcone} href="https://www.facebook.com/romain.varra" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>        
            </section>
        </article>
        
    )
}

export default Footer;