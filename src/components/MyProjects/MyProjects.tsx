import { useEffect, useState } from "react";
import {useTranslation} from "../../contexts/LangContext"
import ProjectsData from "../../data/Projects.json"
import style from "./myProjects.module.css"
import { useNavigate } from "react-router-dom";
import type { ProjectsType } from "../../lib/types";
import type { FiltersType } from "../../lib/types";
import Filter from "../Filter/Filter";

function MyProjects() {
    const {translations} = useTranslation();
    const [filteredProjects, setFilteredProjects] = useState<ProjectsType[]>([]);
    const [filters, setFilters] = useState<FiltersType>({});
    const navigate = useNavigate();
    const handleClick = (id:number) => navigate(`/projects/${id}`)

    useEffect(() => {
        
        setFilteredProjects(ProjectsData); 
      }, []);
    
      useEffect(() => {
        const { language, project } = filters;

        const filtered = ProjectsData.filter((p) => {
          const matchesLanguage = !language || p.language.some((l) => l.includes(language.toLowerCase()));
          const matchesProject = !project || p.project === project;
          return matchesLanguage && matchesProject;
        });

        setFilteredProjects(filtered);
      }, [filters]);
    
      const handleFilterChange = (newFilters: FiltersType) => {
        setFilters(newFilters);
      }

    return(
        <>
            <h1 className={style.Title}>{translations.NavBar.projects}</h1>
    <section className={style.languageFilter}>
<Filter onFilterChange = {handleFilterChange} />
    </section>
            <div className={style.projectContainer}>
{filteredProjects.map((p) => (
    <section 
    key={p.id}
    className={style.section} 
    onClick={() => handleClick(p.id)}
    >
    <h3 className={style.projectTitle}>{p.name}</h3>
    <img src={p.picture} alt={`Image du projet ${p.name}`} className={style.projectPicture} />
    <p className={style.projectNatureId}> {translations.MyProjects.projectNature} :</p> <p>{p.project}</p>
    <p className={style.projectLangId}>{translations.MyProjects.lang} : </p> 
    {p.language.map((lang) => (
        <img src={lang} alt="icône du langage utilisé" className={style.projectIcone} />
    ))}
    </section>
))}
        </div>
</>
    );
}

export default MyProjects;