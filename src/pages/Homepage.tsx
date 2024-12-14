import Contact from "../components/Contact";
import ImagesSlider from "../components/ImagesSilder";
import MyProjects from "../components/MyProjects";
import leftImage from "../../public/Images/7c28c-josef1.jpg"
import rightImage from "../../public/Images/7c28c-josef11.png"

function Homepage () {
    return(
        <>
        <h1>Hello Portfolio</h1>
        <ImagesSlider leftImage = {leftImage} rightImage= {rightImage}/>
        <MyProjects/>
        <Contact/>
        </>
    )
}

export default Homepage;