import styled from "styled-components";
import { theme } from "../../theme/theme";
import styles from "./About.module.css";
import Image from 'next/image';
import github from "../../icons/GitHub-Mark.png";
import Media from "react-media";
import { FC } from "react";

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
                <SkillIcon src={src} height="100px" width="100px"></SkillIcon>
            }
        </Media>
    );
}

const About = () => {
    return (<div style={{paddingTop: "60px", height: "60vh"}} id="about">
        <div>
            <h2 style={{display: "inline-block"}}>About</h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>me.</h2>
        </div>
        <div className={styles.aboutRow}>
            <div className={styles.aboutParagraph}>
                <h3>
                    I'm a third year software engineering student currently studying at McMaster University. I specialize mostly in creating full stack
                    applications, with a focus more on the frontend side of things.
                </h3>
            </div>
            <div className={styles.skills}>
                <Icon src={github}></Icon>
            </div>
        </div>
    </div>)
    
}

export default About;