import styled from "styled-components";
import { theme } from "../../../theme/theme";
import spotifyPartyImage from "../../../images/spotify-party.png";

const Card = styled.div.attrs((props: {img: StaticImageData}) => props)`
    height: 53vh;
    width: 48vw;
    background-color: ${theme.card};
    display: inline-block;
    transition: all 0.15s ease-in;
    z-index: auto;
    position: relative;
    background-image: url(${props => props.img.src});
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 768px) {
        width: 80vw;
        height: 30vh;
    }

    @media only screen and (min-width: 768px) {
        :hover div {
            transform: translate(32px, 20px);
        }
    }
`;

const BehindCard = styled.div`
    background-color: ${theme.primary};
    transition: all 0.30s ease-in-out;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    transform: translate(24px, 14px);

    @media only screen and (max-width: 768px) {
        width: 80vw;
        height: 30vh;
        transform: translate(2px, 2px);
    }
`;

const ProjectCard = () => {
    return <div style={{zIndex: "2", position: "relative"}}>
        <Card img={spotifyPartyImage}>
            <BehindCard></BehindCard>
        </Card>
    </div>;
}

export default ProjectCard;