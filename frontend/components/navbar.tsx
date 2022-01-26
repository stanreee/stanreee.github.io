import styled from "styled-components";
import { theme } from "../theme/theme";
import { HoverText, NavBarText } from "./hover_text";
import { rgba } from "polished";
import { FontSize } from "../enums/fontsize";
import { FC } from "react";

type Props = {
    whereInPage: string
}

const Bar = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    height: fit-content;
    z-index: 999;
    right: 0;
    padding: 3vw;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${rgba(theme.background, 0.75)};
    filter: drop-shadow(0 0 0.25rem black);
    backdrop-filter: blur(8px);
    align-items: center;
    justify-content: flex-end;
`;

const NavBar: FC<Props> = ({ whereInPage }) => {
    return (<Bar>
        <NavBarText whereInPage={whereInPage} id="home" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>Home</NavBarText>
        <NavBarText whereInPage={whereInPage} id="about" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>About</NavBarText>
        <NavBarText whereInPage={whereInPage} id="projects" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>Projects</NavBarText>
        <NavBarText whereInPage={whereInPage} id="contact" fontSizeOption={FontSize.Small} paddingRight="24px" textColor={theme.primary} hoverColor={theme.primary}>Contact</NavBarText>
    </Bar>);
}

export default NavBar;