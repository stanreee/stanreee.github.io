import { FC } from "react";
import styled from "styled-components";
import { Theme, useGlobalState } from "../theme/theme";

type Props = {
    onClick?: Function
    href?: string
    fontColour: string
    defaultColour: string
    fontHoverColour: string
    fillColour: string
    borderColour?: string
    width: string
}

const StyledButton = styled.button.attrs((props: {theme: Theme, width: string, borderColour: string, fontColour: string, defaultColour: string, fontHoverColour: string, fillColour: string}) => props)`
    color: ${(props) => props.fontColour};
    background-color: ${(props) => props.defaultColour};

    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all 0.5s ease;
    cursor: pointer;
    border: ${(props) => props.borderColour ? "1px solid " + props.borderColour : "none"};
    position: relative;
    overflow: hidden;
    padding: 0;
    width: ${(props) => props.width};

    @media only screen and (max-width: ${(props) => props.theme.projectCardMediaQuery}) {
        font-size: 12px;
    }

    div {
        padding-left: 16px;
        padding-right: 16px;
        z-index: 2;
        color: ${(props) => props.fontColour};
        transition: all ease 0.20s;
        position: relative;
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        

        :hover {
            /* color: white; */
            color: ${(props) => props.fontHoverColour};
            z-index: 2;
        }
    }

    :after {
        content: "";
        position: absolute;
        background: ${(props) => props.fillColour};
        bottom: 0;
        left: -10%;
        right: 120%;
        top: 0;
        z-index: 1;
        transition: right 0.30s ease-in;
        transform: skewX(-15deg);
    }

    :hover:after {
        right: -10%;
    }
`;

const Button: FC<Props> = ({ width, borderColour, href, onClick, fontColour, fontHoverColour, defaultColour, fillColour, children }) => {
    const [theme, setTheme] = useGlobalState("theme");
    return <a rel="noreferrer" target="_blank" href={href && href}>
        <StyledButton theme={theme} borderColour={borderColour} fontColour={fontColour} fontHoverColour={fontHoverColour} defaultColour={defaultColour} fillColour={fillColour} onClick={(onClick: any) => onClick && onClick}>
            <div>{children}</div>
        </StyledButton>
    </a>
    
}

export default Button;