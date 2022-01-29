import styled from "styled-components";
import { darkTheme, lightTheme, Theme, useGlobalState } from "../theme/theme";
import { HoverText, NavBarText } from "./hover_text";
import { rgba } from "polished";
import { FontSize } from "../enums/fontsize";
import { FC } from "react";
import Button from "./button";
import unfillMoon from "../images/moon-unfill.png";
import fillMoon from "../images/moon-fill.png";
import Image from "next/image";

type Props = {
    whereInPage: string
}

const Bar = styled.header.attrs((props: {theme: Theme}) => props)`
    display: flex;
    position: fixed;
    width: 100%;
    height: fit-content;
    z-index: 999;
    right: 0;
    padding: 3vw;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${(props) => props.theme.background + "80"};
    filter: drop-shadow(0 0 0.25rem black);
    backdrop-filter: blur(8px);
    align-items: center;
    justify-content: flex-end;
    transition: background-color 0.5s ease-in-out;
`;

const DarkModeImage = styled(Image)`
    cursor: pointer;
`;

const NavBar: FC<Props> = ({ whereInPage }) => {
    const [theme, setTheme] = useGlobalState("theme");
    return (<Bar theme={theme}>
        <div style={{display: "flex"}}>
            <div style={{marginRight: "20px", marginTop: "2px"}}>
                <DarkModeImage onClick={() => {
                    if (theme.themeString == "dark") setTheme(lightTheme)
                    else setTheme(darkTheme);
                }} width="22px" height="22px" src={theme.themeString == "dark" ? fillMoon : unfillMoon}></DarkModeImage>
            </div>
            <NavBarText whereInPage={whereInPage} id="home" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>Home</NavBarText>
            <NavBarText whereInPage={whereInPage} id="about" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>About</NavBarText>
            <NavBarText whereInPage={whereInPage} id="projects" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>Projects</NavBarText>
            <NavBarText whereInPage={whereInPage} id="contact" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>Contact</NavBarText>
        </div>
    </Bar>);
}

export default NavBar;