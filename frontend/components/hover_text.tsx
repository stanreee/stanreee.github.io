import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { FontSize } from "../enums/fontsize";
import { theme } from "../theme/theme";

const MEDIA_QUERIES = {
    small: "(max-width: 768px)"
}

type Props = {
    textColor: string,
    fontSizeOption?: FontSize,
    hoverColor: string,
    pathName?: string,
    paddingRight?: string,
    id?: string,
}

interface Enable extends Props {
    whereInPage: string
}

const Text = styled.h1.attrs((props: {color: string, fontSize: string, hoverColor: string, paddingRight: string}) => props)`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    box-shadow: inset 0 -0.05em 0 0 ${(props) => props.hoverColor};
    transition: box-shadow .5s cubic-bezier(.13,.78,.3,.99), color .25s ease-in-out;
    margin: 0px;
    padding-right: ${(props) => props.paddingRight};

    :hover {
        color: #EFEFEF;
        box-shadow: inset 0 calc(-${(props) => props.fontSize} - 0.05em) 0 0 ${(props) => props.hoverColor};
        cursor: pointer;
     }
`;

const TextEnable = styled(Text).attrs((props: {color: string, fontSize: string, hoverColor: string, enabled: boolean}) => props)`
    box-shadow: ${(props) => props.enabled ? "inset 0 -1.1em 0 0 " + props.hoverColor : "none"};
     color: ${(props) => props.enabled ? "#EFEFEF" : props.color};
    font-weight: normal;

    :hover {
        box-shadow: ${(props) => props.enabled ? "inset 0 -1.1em 0 0 " + props.hoverColor : "none"};
    }
`;

export const HoverText: FC<Props> = ({ textColor, fontSizeOption = FontSize.Regular, hoverColor, paddingRight, id, children }) => {
    const [fontSize, setFontSize] = useState("28px");
    useEffect(() => {
        const queryList = window.matchMedia("(max-width: 768px)");
        const matches = queryList.matches;
        setFontSize(getFontSize(fontSizeOption, matches));
        queryList.addEventListener("change", () => setFontSize(getFontSize(fontSizeOption, !matches)));
    });
    return (
        <div style={{paddingRight: paddingRight}}>
            <a onClick={() => {
                if(id != null) {
                    scrollTo(id);
                }
            }}>
                <Text color={textColor} fontSize={fontSize} hoverColor={hoverColor}>{children}</Text>
            </a>
        </div>
    );
}

export const NavBarText: FC<Enable> = ({ whereInPage, textColor, fontSizeOption = FontSize.Regular, hoverColor, paddingRight, id, children }) => {
    const [fontSize, setFontSize] = useState("28px");
    useEffect(() => {
        const queryList = window.matchMedia("(max-width: 768px)");
        const matches = queryList.matches;
        setFontSize(getFontSize(fontSizeOption, matches));
        queryList.addEventListener("change", () => setFontSize(getFontSize(fontSizeOption, !matches)));
    });
    return (
        <div style={{paddingRight: paddingRight}}>
            <a onClick={() => {
                if(id != null) {
                    scrollTo(id);
                }
            }}>
                <TextEnable enabled={whereInPage == id} className="nav-item" color={textColor} fontSize={fontSize} hoverColor={hoverColor}>{children}</TextEnable>
            </a>
        </div>
    );
}

function getFontSize(fontSizeOption: FontSize, predicate: boolean) {
    switch(fontSizeOption) {
        case FontSize.Regular:
            if(predicate) {
                return theme.phoneRegularFontSize;
            }else{
                return theme.desktopRegularFontSize;
            }
        case FontSize.Large:
            if(predicate) {
                return theme.phoneLargeFontSize;
            }else {
                return theme.desktopLargeFontSize;
            }
        case FontSize.Small:
            if(predicate) {
                return theme.phoneSmallFontSize;
            }else {
                return theme.desktopSmallFontSize;
            }
    }
}

function scrollTo(id: string) {
    const violation = document.getElementById(id);
    violation?.scrollIntoView({behavior: "smooth"});
}