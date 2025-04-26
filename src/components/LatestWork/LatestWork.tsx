import style from "./latestWork.module.css"
import projects from "../../data/Projects.json"
import { useEffect, useState } from "react";
import type { ProjectsType } from "../../lib/types";
import { useNavigate } from "react-router-dom";

function LatestWork(){
const [latestProjects, setLatestProjects] = useState<ProjectsType[]>([]);
const navigate = useNavigate();
const handleClick = (id: number) => navigate(`/projects/${id}`);

useEffect(() => {
    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
    const lastThree = sortedProjects.slice(0, 3);
    setLatestProjects(lastThree);
});

    return(
        <section>
        <h2 className={style.mainTitleLatestWork}>Latest</h2>
        <section className={style.latestWorkSection}>
        {latestProjects?.map((p) => (
            <article className={style.latestWorkCard} key={p.id} onClick={() => handleClick(p.id)}>
            <img className={style.latestWorkImg} src={p.picture} alt={p.name} />
            <p className={style.latestWorkName}>{p.name}</p>
            </article>
        ))}
        </section>
        </section>
    )
}

export default LatestWork;