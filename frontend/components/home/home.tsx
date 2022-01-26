import { FC } from "react";
import { FontSize } from "../../enums/fontsize";
import { theme } from "../../theme/theme";
import { HoverText } from "../hover_text";
import NavBar from "../navbar";
import styles from "./HomeNav.module.css";

const HomeNav = () => {
    return (
        <div id="home" className={styles.home}>
            <div>
                <h1 className={styles.title}>Hi, I'm</h1> <span>&nbsp;</span> <span style={{display: "inline-block"}}><HoverText id="about" hoverColor={theme.primary} fontSizeOption={FontSize.Large} textColor={theme.primary}>Stanley.</HoverText></span>
            </div>
            <div>
                <h2 style={{display: "inline-block"}}>I'm a </h2> <span>&nbsp;</span> <h2 style={{display: "inline-block", color: theme.primary}}>full-stack developer.</h2>
            </div>
      </div>
    );
}

export default HomeNav;