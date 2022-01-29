import styled from "styled-components";
import { FontSize } from "../enums/fontsize";
import { Theme, useGlobalState } from "../theme/theme";
import { HoverText } from "./hover_text";

const FooterDiv = styled.div.attrs((props: { theme: Theme }) => props)`
    height: 10vh;
    width: 100%;
    margin-top: 3vh;
    background-color: ${(props) => props.theme.secondaryCard};  
    transition: background-color 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterText = styled(HoverText).attrs((props: { theme: Theme }) => props)`
    font-size: 14px;
    color: ${(props) => props.theme.white};
    text-align: center;
`

const Footer = () => {
    const [theme, setTheme] = useGlobalState("theme");
    return <FooterDiv theme={theme}>
        <div style={{display: "flex"}}>
            <FooterText weight="normal" theme={theme} hoverColor={theme.primary} fontSizeOption={FontSize.Footer} textColor={theme.themeString == "dark" ? theme.primary : theme.white}>
                <a rel="noreferrer" target="_blank" href="https://github.com/stanreee/personal-portfolio">
                    Built by Stanley Chan
                </a>
            </FooterText>
            <div style={{width: "20px"}}>

            </div>
            <FooterText weight="normal" theme={theme} hoverColor={theme.primary} fontSizeOption={FontSize.Footer} textColor={theme.themeString == "dark" ? theme.primary : theme.white}>
                <a rel="noreferrer" target="_blank" href="https://louie.co.nz/">
                    Artwork by Louis Coyle
                </a>
            </FooterText>
        </div>
    </FooterDiv>
}

export default Footer;