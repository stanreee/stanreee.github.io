import { FC, useEffect } from "react";
import styled from "styled-components";
import { FontSize } from "../../enums/fontsize";
import { HoverText } from "../hover_text";
import NavBar from "../navbar";
import styles from "./HomeNav.module.css";
import backgroundImageDark from "../../images/background.jpg";
import backgroundImageLight from "../../images/background-light.jpg";
import { Theme, useGlobalState } from "../../theme/theme";
import Image from "next/image";

const BackgroundDiv = styled.div.attrs((props: {theme: Theme}) => props)`
    /* background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${(props) => props.theme.themeString == "dark" ? backgroundImageDark.src : backgroundImageLight.src}); */
    background-size: cover;
    margin-left: -10vw;
    margin-right: -10vw;
    transition: background-image 5s fade ease-in-out;
    height: 100vh;
`;

const BackgroundImage = styled(Image).attrs((props: {theme: Theme, forTheme: string}) => props)`
    opacity: ${(props) => props.forTheme == props.theme.themeString ? 1 : 0};
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));

    transition: opacity 0.5s ease-in-out;
    z-index: -1;
`;

const HomeDiv = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
`;

const HomeNav = () => {
    const [theme, setTheme] = useGlobalState("theme");

    useEffect(() => {
        const background = document.getElementById("background-" + theme.themeString);
        window.addEventListener('scroll', () => {
            var value = window.scrollY;

            if(value < 1000) {
                background!.style.top = value * 0.7 + 'px';
                background!.style.filter = "blur(" + value * 0.01 + "px)";
            }
        });
    });
    return (
        <BackgroundDiv theme={theme}>
            <div style={{height: "100%", width: "110%", left: "-10%", background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))", position: "absolute", zIndex: "0"}}></div>
            <BackgroundImage id="background-dark" alt="Background image" theme={theme} forTheme="dark" layout="fill" objectFit="cover" src={backgroundImageDark.src}></BackgroundImage>
            <BackgroundImage id="background-light" alt="Background image" theme={theme} forTheme="light" layout="fill" objectFit="cover" src={backgroundImageLight.src}></BackgroundImage>
            <HomeDiv id="home" className={styles.home}>
                <div>
                    <h1 className={styles.title}>Hi, I&apos;m</h1> <span>&nbsp;</span> <span style={{display: "inline-block"}}><HoverText id="about" hoverColor={theme.primary} fontSizeOption={FontSize.Large} textColor={theme.primary}>Stanley.</HoverText></span>
                </div>
                <div>
                    <h2 style={{display: "inline-block"}}>I&apos;m a </h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>full-stack developer.</h2>
                </div>
            </HomeDiv>
        </BackgroundDiv>
    );
}

export default HomeNav;