import { theme } from "../../theme/theme";
import ProjectItem from "./projectcard";
import ProjectCard from "./subcomponents/card";
import DescriptionCard from "./subcomponents/descriptioncard";

const Projects = () => {
    return (<div style={{paddingTop: "60px"}} id="projects">
        <div>
            <h2 style={{display: "inline-block"}}>My</h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>projects.</h2>
        </div>
        <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
            <ProjectItem left={false}></ProjectItem>
            <ProjectItem left={true}></ProjectItem>
            <ProjectItem left={false}></ProjectItem>
            <ProjectItem left={true}></ProjectItem>
        </div>
        
    </div>);
}

export default Projects;