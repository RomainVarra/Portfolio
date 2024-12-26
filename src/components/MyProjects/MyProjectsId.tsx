import { useState } from "react";
import { useParams } from "react-router-dom";

function MyProjectsID(){
    const [detailsProject, setDetailsProject] = useState();
    const {id} = useParams();
return(
    <h1>Project Id</h1>
)
}

export default MyProjectsID;