import styled from "styled-components";
import { useGlobalState } from "../../theme/theme";
import Button from "../button";

const ContactDiv = styled.div`
    height: 50vh;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 5%;
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
`;

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;

    @media only screen and (max-width: 768px) {
        h3 {
            font-size: 18px;
        }
    }
`;

// const Container = styled.div`
//     padding-left: 20%;
//     padding-right: 20%;
//     height: 100%;
//     padding-top: 10%;
//     padding-bottom: 10%;
// `;

const Contact = () => {
    const [theme, setTheme] = useGlobalState("theme");

    return <ContactDiv id="contact">
        <ContentDiv>
            <div><h2 style={{color: theme.primary, paddingRight: "7px"}}>Contact</h2></div>
            <h3 style={{textAlign: "center"}}>Want to reach out? Send me an email and I'll get back to you as soon as possible.</h3>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Button href="mailto:stanley.chan185@gmail.com" borderColour={theme.white} fontColour={theme.white} defaultColour={theme.background} fontHoverColour={theme.background} fillColour={theme.white} width={""}>Get in Touch</Button>
            </div>
        </ContentDiv>
    </ContactDiv>
}

export default Contact;