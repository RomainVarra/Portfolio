import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../data/Projects.json";
import { ProjectsType } from "../../lib/types";
import { useTranslation } from "../../contexts/LangContext";


function MyProjectsID(){
    const [detailsProject, setDetailsProject] = useState<ProjectsType | null>(null);
    const {id} = useParams();
    const translate = useTranslation();


    useEffect(() => {
        const project = projectsData.find((f) => f.id === Number(id))
        setDetailsProject(project ||null)
    }, [id])
return(

    <>
<section>
<h1>{translate.translations.MyProjectsDetails.details} {detailsProject?.name} </h1>
<img src={detailsProject?.picture} alt={`Details du projet ${detailsProject?.name}`} />
<p>{translate.translations.MyProjectsDetails.description[`${id}`]}</p>
<p> {translate.translations.MyProjects.projectNature} : {detailsProject?.project}</p>
{detailsProject?.language.map((lang) => (
    <img src={lang} alt="icône du language utilisé" />
))}
</section>
    </>
)
}

export default MyProjectsID;