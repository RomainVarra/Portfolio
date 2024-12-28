import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../data/Projects.json";
import { ProjectsType } from "../../lib/types";
import { useTranslation } from "../../contexts/LangContext";
import style from "./MyProjects.module.css"


function MyProjectsID(){
    const [detailsProject, setDetailsProject] = useState<ProjectsType | null>(null);
    const {id} = useParams();
    const translate = useTranslation();

    const handleClick = (url?: string) => {
        if (url) {
            window.location.href = url;
        }
      };

    useEffect(() => {
        const project = projectsData.find((f) => f.id === Number(id))
        setDetailsProject(project ||null)
    }, [id])
return(

    <>
<section className={style.sectionId}>
<h1 className={style.titleId}>{translate.translations.MyProjectsDetails.details} {detailsProject?.name} </h1>
<div className={style.insideSection}>
<img src={detailsProject?.picture} alt={`Details du projet ${detailsProject?.name}`} className={style.imgID} />
<div className={style.insideSectionRight}>
<p className={style.description}>{translate.translations.MyProjectsDetails.description[`${id}`]}</p>
<p> {translate.translations.MyProjects.projectNature} : </p>
<p>{detailsProject?.project}</p>
<p>{translate.translations.MyProjects.lang} :</p>
{detailsProject?.language.map((lang) => (
    <img src={lang} alt="icône du language utilisé" className={style.iconeId} />
))}
</div>
</div>
</section>
<button onClick={() => handleClick(detailsProject?.link)}>{translate.translations.MyProjects.link}</button>
<button onClick={() => handleClick(detailsProject?.gitHub)}>{translate.translations.MyProjects.github}</button>
    </>
)
}

export default MyProjectsID;