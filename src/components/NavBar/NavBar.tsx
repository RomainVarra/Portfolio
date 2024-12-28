import { useTranslation } from "../../contexts/LangContext";
import style from "./NavBar.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };
    const {language, toggleLanguage, translations} = useTranslation();
    const [menu, setMenu] = useState(false);
    const burgerMenu = () => setMenu(!menu);

    return(
        
        <section className={style.navBarStyle}>
        <img className={style.myLogo} src="/Images/logoPortfolio.webp" alt="Logo du site"
        onClick={handleClick}
         />
         <button
        className={style.burgerButton}
        onClick={burgerMenu}
      >
        <span className={style.burgerBar1}></span>
        <span className={style.burgerBar2}></span>
        <span className={style.burgerBar3}></span>
      </button>
        <ul className={`${style.navLink} ${menu ? style.showMenu : style.hideMenu}`} >
            <li>
            <NavLink to={"/"}  >{translations.NavBar.home}</NavLink>
            </li>
            <li>
            <NavLink to={"/about"}  >{translations.NavBar.about}</NavLink>
            </li>
            <li>
            <NavLink to={"/project"}  >{translations.NavBar.projects}</NavLink>
            </li>
            <li>
            <NavLink to={"/contact"}  >{translations.NavBar.contact}</NavLink>
            </li>
           <li>
  <button onClick={toggleLanguage} className={style.buttonLanguage} >
    {language === "fr" ? (
      <img src="/Images/france.png" alt="drapeau français" className={style.frenchFlag} />
    ) : (
      <img src="/Images/royaume-uni.png" alt="drapeau anglais" className={style.englishFlag}  />
    )}
  </button>
</li>
        </ul>
        </section>
        
    )
}

export default NavBar;