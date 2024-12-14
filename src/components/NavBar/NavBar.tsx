import { useTranslation } from "../../contexts/LangContext";
import style from "./NavBar.module.css"
import { NavLink, useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };
    const {language, toogleLanguage} = useTranslation();
    return(
        
        <section className={style.navBarStyle}>
        <img className={style.myLogo} src="Images/logoPortfolio.webp" alt="Logo du site"
        onClick={handleClick}
         />
        <ul className={style.navLink}>
            <li>
            <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
            <NavLink to={"/about"}>A propos</NavLink>
            </li>
            <li>
            <NavLink to={"/project"}>Projets</NavLink>
            </li>
            <li>
            <NavLink to={"/contact"}>Contact</NavLink>
            </li>
           <li>
  <button onClick={toogleLanguage} className={style.buttonLanguage} >
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