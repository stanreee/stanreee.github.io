import styled from "styled-components";
import { theme } from "../../../theme/theme";
import Button from "../../button";

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

const DescriptionCard = () => {
    return <Card>
        <h2 style={{fontWeight: "normal"}}>Project Title Here</h2>
        <h3 style={{fontWeight: "normal"}}>Project Description Here</h3>
        <ButtonDiv>
            <Button onClick={() => {
                console.log("OPEN");
            }}>VIEW ON GITHUB</Button>
        </ButtonDiv>
    </Card>
}

export default DescriptionCard;