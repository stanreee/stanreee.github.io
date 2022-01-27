import { FC } from "react";
import styled from "styled-components";
import { ProjectModel } from "../../../models/project_model";
import { theme } from "../../../theme/theme";
import Button from "../../button";

type Props = {
    project: ProjectModel
}

const Card = styled.div`
    height: 32vh;
    width: 30vw;
    background-color: ${theme.secondaryCard};
    border-bottom: 3px solid ${theme.primary};
    filter: drop-shadow(3.5px 3.5px 0 #0000003A);
    backdrop-filter: blur(8px);
    padding-left: 38px;
    padding-top: 18px;

    @media only screen and (max-width: 768px) {
        width: 80vw;
        height: 30vh;
    }
`;

const ButtonDiv = styled.div`
    padding-top: 5vh;
    padding-right: 38px;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        padding-top: 7vh;
    }
`;

const DescriptionCard: FC<Props> = ({ project }) => {
    return <Card>
        <h2 style={{fontWeight: "normal"}}>{project.project_name}</h2>
        <h3 style={{fontWeight: "normal"}}>{project.project_description}</h3>
        <ButtonDiv>
            <Button fontColour={theme.background} defaultColour={theme.white} fontHoverColour={theme.white} fillColour={theme.primary} href={project.github_link}>VIEW ON GITHUB</Button>
            <div style={{width: "20px"}}></div>
            <Button borderColour={theme.white} fontColour={theme.white} defaultColour={theme.secondaryCard} fontHoverColour={theme.background} fillColour={theme.white} href={project.try_out}>TRY IT OUT</Button>
        </ButtonDiv>
    </Card>
}

export default DescriptionCard;