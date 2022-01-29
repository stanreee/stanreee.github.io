import { createGlobalState } from "react-hooks-global-state";

export type Theme = {
    themeString: string
    background: string
    primary: string
    card: string
    white: string
    clearWhite: string
    secondaryCard: string
    phoneRegularFontSize: string,
    phoneLargeFontSize: string,
    phoneSmallFontSize: string,
    desktopRegularFontSize: string,
    desktopSmallFontSize: string,
    desktopLargeFontSize: string,
    projectCardMediaQuery: string
}

const defaultFontValues = {
    phoneRegularFontSize: "22px",
    phoneLargeFontSize: "52px",
    phoneSmallFontSize: "14px",
    desktopRegularFontSize: "30px",
    desktopSmallFontSize: "18px",
    desktopLargeFontSize: "96px",
    projectCardMediaQuery: "1000px"
}

export const darkTheme: Theme = {
    themeString: "dark",
    background: "#1a1529",
    primary: "#ff8e7a", //4ECCA3 FFD369 DA7F8F ff8e7a 57A99A
    card: "#373F48",
    white: "#EFEFEF",
    clearWhite: "#FFFFFF",
    secondaryCard: "#383555",
    ...defaultFontValues
}

export const lightTheme: Theme = {
    themeString: "light",
    background: "#0b323d",
    primary: "#A1EAFB",
    card: "#373F48",
    white: "#EFEFEF",
    clearWhite: "#FFFFFF",
    secondaryCard: "#4ab4ce",
    ...defaultFontValues
}

const { setGlobalState, useGlobalState } = createGlobalState({
    theme: darkTheme
})

// const [getTheme, changeTheme] = useGlobalState("theme");

// export const theme = getTheme;

// export const setTheme = changeTheme;

export { useGlobalState, setGlobalState };