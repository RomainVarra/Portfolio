import { useEffect, useState } from "react";
import {useTranslation} from "../contexts/LangContext"
import ProjectsData from "../data/Projects.json"
import style from "./myProjects.module.css"

type ProjectsType = {
    id: number,
    name: string,
    picture: string,
    project: string,
    language: string[]
} 

function MyProjects() {
    const {translations} = useTranslation();
    const [projects,setProjects] = useState<ProjectsType[]>([]);

    useEffect(() => {
        setProjects(ProjectsData)
    }, []);

    return(
        <>
            <h2>{translations.NavBar.projects}</h2>
            <div className={style.projectContainer}>
{projects.map((p) => (
    <section 
    key={p.id}
    className={style.section} >
    <h3 className={style.projectTitle}>{p.name}</h3>
    <img src={p.picture} alt={`Image du projet ${p.name}`} className={style.projectPicture} />
    <p> Projet : {p.project}</p>
    <p>Languages : </p> 
    {p.language.map((lang) =>(
        <img src={lang} alt="icône du language utilisé" className={style.projectIcone} />
    ))}
    </section>
))}
        </div>
</>
    );
}

export default MyProjects;