import styled from "styled-components";
import styles from "./About.module.css";
import Image from 'next/image';
import github from "../../icons/GitHub-Mark.png";
import Media from "react-media";
import { FC } from "react";
import { useGlobalState } from "../../theme/theme";
import { AboutModel } from "../../models/about_model";

type Props = {
    about: AboutModel
}

const SkillIcon = styled(Image)`
    position: absolute;
    border-radius: 50%;
    transition: all 0.5s ease;
    right: 1em;

    :hover {
        filter: brightness(1.5);
    }
`;

const Icon: FC<{src: StaticImageData}> = ({src}) => {
    return (
        <Media query="(max-width: 768px)">
            {matches => matches ? 
                <SkillIcon src={src} height="50px" width="50px"></SkillIcon>
                :
                <SkillIcon src={src} height="75px" width="75px"></SkillIcon>
            }
        </Media>
    );
}

const SkillContainer = styled.div`
    flex: 1;
`;

const About: FC<Props> = ({ about }) => {
    const [theme, setTheme] = useGlobalState("theme");
    return (<div style={{paddingTop: "60px", height: "fit-content"}} id="about">
        <div>
            <h2 style={{display: "inline-block"}}>About</h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>me.</h2>
        </div>
        <div className={styles.aboutRow}>
            <div className={styles.aboutParagraph}>
                <h3>
                    {about.description}
                </h3>
            </div>
            <div className={styles.skills}>
                <h3>
                    These are some of the technologies that I currently have experience with:
                </h3>
                <div className={styles.skillsFlex}>
                    {about.skills.map((skill) => <div><h3 style={{textAlign: "center", color: theme.primary, transition: "all 0.5s ease-in-out"}}>{skill}</h3></div>)}
                </div>
            </div>
        </div>
        
    </div>)
    
}

export default About;