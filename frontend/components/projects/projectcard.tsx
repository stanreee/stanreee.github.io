import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./subcomponents/card";
import DescriptionCard from "./subcomponents/descriptioncard";

type Props = {
    left: boolean
}

const Wrapper = styled.div.attrs((props: { left: boolean }) => props)`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const ProjectWrapper = styled.div`
    position: relative;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const DescriptionWrapper = styled.div.attrs((props: { left: boolean }) => props)`
    position: relative;
    z-index: 50;
    left: ${((props) => props.left ? "5rem" : "-5rem")};
    bottom: -3rem;

    @media only screen and (max-width: 768px) {
        left: 0;
        bottom: 0;
        top: 25px;
    }
`;

const ProjectItem: FC<Props> = ({ left }) => {
    const [isLeft, setLeft] = useState(left);
    useEffect(() => {
        const queryList = window.matchMedia("(max-width: 768px)");
        const matches = queryList.matches;
        if(matches) {
            setLeft(false);
        }
        queryList.addEventListener("change", () => !matches ? setLeft(false) : setLeft(left));
    });
    const projectCard: JSX.Element = <ProjectCard></ProjectCard>;
    const descriptionWrapper: JSX.Element = <DescriptionWrapper left={isLeft}><DescriptionCard></DescriptionCard></DescriptionWrapper>;
    return <Wrapper left={isLeft}>
        <ProjectWrapper>
            {
                isLeft ? descriptionWrapper : projectCard
            }
            {
                isLeft ? projectCard : descriptionWrapper
            }
        </ProjectWrapper>
    </Wrapper>
}

export default ProjectItem;