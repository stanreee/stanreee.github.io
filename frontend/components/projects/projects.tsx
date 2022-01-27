import { FC } from "react";
import { ProjectModel } from "../../models/project_model";
import { theme } from "../../theme/theme";
import ProjectItem from "./projectcard";
import ProjectCard from "./subcomponents/card";
import DescriptionCard from "./subcomponents/descriptioncard";

type Props = {
    projects: ProjectModel[]
}

const Projects: FC<Props> = ({ projects }) => {
    var count = 0;
    return (<div style={{paddingTop: "60px"}} id="projects">
        <div>
            <h2 style={{display: "inline-block"}}>My</h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>projects.</h2>
        </div>
        <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
            {projects.map((project) => {
                const left = count % 2 == 0;
                count += 1;
                return <ProjectItem project={project} left={left}></ProjectItem>
            })}
        </div>
        
    </div>);
}

export default Projects;