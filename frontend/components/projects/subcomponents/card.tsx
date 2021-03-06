import styled from "styled-components";
import spotifyPartyImage from "../../../images/partify/party-screen.png";
import sidebarImage from "../../../images/partify/sidebar.png";
import mainScreen from "../../../images/partify/spotify-party.png";
import { FC, useState } from "react";
import Image from "next/image";
import { Theme, useGlobalState } from "../../../theme/theme";

type Props = {
    src: string;
}

const Card = styled.div.attrs((props: {img: StaticImageData, theme: Theme}) => props)`
    height: 53vh;
    width: 48vw;
    background-color: ${(props) => props.theme.card};
    display: inline-block;
    transition: all 0.15s ease-in;
    z-index: auto;
    position: relative;
    

    transition: background-image 5s fade ease-in-out;

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        width: 80vw;
        height: 30vh;
    }

    @media only screen and (min-width: ${(props) => props.theme.projectCardMediaQuery}) {
        :hover div {
            transform: translate(32px, 20px);
        }
    }
`;

const BehindCard = styled.div.attrs((props: { theme: Theme }) => props)`
    background-color: ${(props) => props.theme.primary};
    transition: all 0.30s ease-in-out;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    transform: translate(24px, 14px);

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        width: 80vw;
        height: 30vh;
        transform: translate(2px, 2px);
    }
`;

const ProjectCard: FC<Props> = ({ src }) => {
    const [theme, setTheme] = useGlobalState("theme");
    return <div style={{zIndex: "2", position: "relative"}}>
        <Card theme={theme}>
            <Image layout="fill" objectFit="cover" src={src}></Image>
            <BehindCard theme={theme}></BehindCard>
        </Card>
    </div>

    // --------- potential code for hover image preview ---------------
    // const [src, setSrc] = useState(spotifyPartyImage);
    // const images = [spotifyPartyImage, sidebarImage, mainScreen];
    // var timeout: NodeJS.Timer;
    // const [running, setRunning] = useState(false);
    // return <div style={{zIndex: "2", position: "relative"}}>
    //     <Card onMouseOver={() => {
    //         if(running) return;
    //         console.log("moused over " + running);
    //         var index = 1;
    //         setRunning(true);
    //         timeout = setInterval(() => {
    //             setSrc(images[index]);
    //             index += 1;
    //             if(index >= images.length) index = 0;
    //             console.log("time out activated, " + index + ", " + running);
    //         }, 2000);
    //     }} onMouseOut={() => {
    //         clearInterval(timeout);
    //         setRunning(false);
    //         console.log("cleared interval");
    //     }} img={src}>
    //         <BehindCard></BehindCard>
    //     </Card>
    // </div>;
}

export default ProjectCard;