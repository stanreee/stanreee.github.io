import { FC } from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

type Props = {
    onClick?: Function
}

const StyledButton = styled.button`
    color: ${theme.background};
    background-color: ${theme.white};

    height: 5.5vh;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all .15s ease;
    cursor: pointer;
    border: none;
    position: relative;
    overflow: hidden;
    padding: 0;

    @media only screen and (max-width: 768px) {
        height: 40px;
        font-size: 12px;
    }

    div {
        padding: 16px;
        z-index: 2;
        color: ${theme.background};
        transition: all ease 0.20s;
        position: relative;
        height: 100%;
        width: 100%;
        

        :hover {
            color: white;
            z-index: 2;
        }
    }

    :after {
        content: "";
        position: absolute;
        background: ${theme.primary};
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

const Button: FC<Props> = ({ onClick, children }) => {
    return <StyledButton onClick={(onClick) => onClick && onClick}>
        <div>{children}</div>
    </StyledButton>;
}

export default Button;