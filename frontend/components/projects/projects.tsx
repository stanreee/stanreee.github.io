import { FC, useEffect, useState } from "react";
import { ProjectModel } from "../../models/project_model";
import { useGlobalState } from "../../theme/theme";
import ProjectItem from "./projectcard";
import ProjectCard from "./subcomponents/card";
import DescriptionCard from "./subcomponents/descriptioncard";

type Props = {
    projects: ProjectModel[]
}

const Projects: FC<Props> = ({ projects }) => {
    const [theme, setTheme] = useGlobalState("theme");
    var count = 0;
    const [disableAlternation, setDisableAlternation] = useState(false);
    useEffect(() => {
        const queryList = window.matchMedia(`(max-width: ${theme.projectCardMediaQuery})`);
        const matches = queryList.matches;
        if(matches) {
            setDisableAlternation(true);
        }
        queryList.addEventListener("change", () => !matches ? setDisableAlternation(true) : setDisableAlternation(false));
    });
    return (<div style={{paddingTop: "60px", height: "fit-content"}} id="projects">
        <div>
            <h2 style={{display: "inline-block"}}>My</h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>projects.</h2>
        </div>
        <div style={{height: "fit-content", display: "flex", flexDirection: "column"}}>
            {projects.sort((a, b) => (a.priority > b.priority) ? 1 : -1).map((project, index) => {
                const left = count % 2 == 0;
                count += 1;
                return <ProjectItem key={index} disableAlternation={disableAlternation} project={project} left={left}></ProjectItem>
            })}
        </div>
        
    </div>);
}

export default Projects;