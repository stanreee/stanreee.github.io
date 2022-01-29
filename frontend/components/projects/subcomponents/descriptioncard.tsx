import { FC } from "react";
import styled from "styled-components";
import { ProjectModel } from "../../../models/project_model";
import { Theme, useGlobalState } from "../../../theme/theme";
import Button from "../../button";

type Props = {
    project: ProjectModel
}

const Card = styled.div.attrs((props: { theme: Theme }) => props)`
    /* height: 32vh; */
    height: fit-content;
    width: 30vw;
    background-color: ${(props) => props.theme.secondaryCard};
    border-bottom: 3px solid ${(props) => props.theme.primary};
    filter: drop-shadow(3.5px 3.5px 0 #0000003A);
    backdrop-filter: blur(8px);
    padding-left: 2vw;
    padding-top: 18px;
    padding-right: 2vw;
    padding-bottom: 18px;
    top: 50%;

    transition: background-color 0.5s ease-in-out;

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        width: 80vw;
        height: 30vh;
        padding: 9px;
        padding-top: 18px;
    }
`;

const DescriptionWrapper = styled.div.attrs((props: { theme: Theme }) => props)`
    height: fit-content;

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        height: 10vh;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;

    height: fit-content;
`;

const DescriptionCard: FC<Props> = ({ project }) => {
    const [theme, setTheme] = useGlobalState("theme");
    return <Card theme={theme}>
        <h2 style={{fontWeight: "normal"}}>{project.project_name}</h2>
        <DescriptionWrapper theme={theme}><h3 style={{fontWeight: "normal"}}>{project.project_description}</h3></DescriptionWrapper>
        <ButtonDiv>
            <Button width={"80%"} borderColour={theme.white} fontColour={theme.background} defaultColour={theme.white} fontHoverColour={theme.white} fillColour={theme.primary} href={project.github_link}>VIEW ON GITHUB</Button>
            <div style={{width: "20px"}}></div>
            {project.try_out != null && <Button width={"80%"} borderColour={theme.white} fontColour={theme.white} defaultColour={theme.secondaryCard} fontHoverColour={theme.background} fillColour={theme.white} href={project.try_out}>TRY IT OUT</Button>}
        </ButtonDiv>
    </Card>
}

export default DescriptionCard;