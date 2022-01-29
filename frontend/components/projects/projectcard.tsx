import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectModel } from "../../models/project_model";
import { Theme, useGlobalState } from "../../theme/theme";
import ProjectCard from "./subcomponents/card";
import DescriptionCard from "./subcomponents/descriptioncard";

type Props = {
    left: boolean,
    project: ProjectModel,
    disableAlternation: boolean
}

const Wrapper = styled.div.attrs((props: { theme: Theme, left: boolean }) => props)`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;

    /* set opacity to 0 here, animation will reveal it */
    opacity: 0;
    
    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        right: 12px;
    }
`;

const ProjectWrapper = styled.div.attrs((props: { theme: Theme }) => props)`
    position: relative;
    display: flex;

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        flex-direction: column;
    }
`;

const DescriptionWrapper = styled.div.attrs((props: { theme: Theme, left: boolean }) => props)`
    position: relative;
    z-index: 50;
    left: ${((props) => props.left ? "5rem" : "-5rem")};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        left: 0;
        bottom: 0;
        top: 10px;
    }
`;

const ProjectItem: FC<Props> = ({ left, project, disableAlternation }) => {
    const [theme, setTheme] = useGlobalState("theme");
    const [isLeft, setLeft] = useState(left);
    const projectCard: JSX.Element = <ProjectCard src={project.image_link}></ProjectCard>;
    const descriptionWrapper: JSX.Element = <DescriptionWrapper theme={theme} left={isLeft}><DescriptionCard project={project}></DescriptionCard></DescriptionWrapper>;
    return <Wrapper theme={theme} left={isLeft} className={"project__" + (left ? "left" : "right")}>
        <ProjectWrapper theme={theme}>
            {
                disableAlternation ? [projectCard, descriptionWrapper] : isLeft ? [descriptionWrapper, projectCard] : [projectCard, descriptionWrapper]
            }
        </ProjectWrapper>
    </Wrapper>
}

export default ProjectItem;