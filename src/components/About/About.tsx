import { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/LangContext"; 
import style from "./about.module.css";
import data from "../../data/Skills.json"
import type { SkillsType } from "../../lib/types";

function About () {
    const {translations} = useTranslation();
    const [skills, setSkills] = useState<SkillsType[]>([]);

    useEffect(() => {
        setSkills(data);
    }, []);

    return(
        <>
        <h1>{translations.NavBar.about}</h1>
        <section className={style.presentationSection}>
            <img src="/Images/photo-enfant.png" alt="photo du développeur enfant" className={style.childPicture} />
        <p className={style.firstScript}>{translations.About.presentation}</p>
        </section>
        <section className={style.portfolioSection}>
            <section className={style.iconeSection}>
                {skills.map((i) => (
                <div key={i.description} className={style.skillItem}>
                    <img src={i.img} alt={i.description} />
                    <p className={style.skillDescription}>{i.description}</p>
                </div>
                ))}
            </section>
            <p className={style.secondDescription}>{translations.About.portfolio}</p>
        </section>

        </>
    )
}

export default About;