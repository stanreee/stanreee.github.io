import { FC } from "react";
import styled from "styled-components";
import NavBar from "./navbar";

type Props = {
    whereInPage: string
}

const Children = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    
    @media only screen and (max-width: 768px) {
        padding-left: 50px;
        padding-right: 50px;
    }
`;

const Layout: FC<Props> = ({ whereInPage, children }) => {
    return (
        <div id="root">
            <NavBar whereInPage={whereInPage}></NavBar>
            <Children>
                {children}
            </Children>
        </div>
    );
}

export default Layout;