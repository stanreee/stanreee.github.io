import type { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import About from '../components/about/about'
import HomeNav from '../components/home/home'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import Projects from '../components/projects/projects'
import { createGlobalStyle } from 'styled-components';
import { getAbout, getProjects, initializeFirebase } from '../firebase/database'
import { ProjectModel } from '../models/project_model'
import { useGlobalState } from '../theme/theme'
import { AboutModel } from '../models/about_model'

type State = {
  dark: boolean
}

type Action = {
  type: string
}

const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case "toggle_dark":
      return {
        ...state,
        dark: !state.dark
      }
    default:
      return state
  }
}

const initialState = {
  dark: true
}

const ThemeContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

const Home = ({ projects, about }: {
  projects: ProjectModel[]
  about: AboutModel
}) => {
  const [currentID, setCurrentID] = useState("home");
  const [theme, setTheme] = useGlobalState("theme");

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting) {
          setCurrentID(entry.target.id);
        }
      })
    }

    const projectCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting) {
          entry.target.id = (entry.target.className.includes("project__right") ? "fadeLeft" : "fadeRight");
          observer.unobserve(entry.target);
        }
      })
    }
  
    let sectionObserver = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    let projectObserver = new IntersectionObserver(projectCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    })
  
    sectionObserver.observe(document.getElementById("home")!);
    sectionObserver.observe(document.getElementById("about")!);
    sectionObserver.observe(document.getElementById("projects")!);

    const rightTargets: NodeListOf<Element> = document.querySelectorAll(".project__right");
    const leftTargets: NodeListOf<Element> = document.querySelectorAll(".project__left");

    rightTargets.forEach((element) => projectObserver.observe(element));
    leftTargets.forEach((element) => projectObserver.observe(element));
  }, []);

  const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
      background-color: ${theme.background};
      width: 8px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: ${theme.primary};
      transition: all 0.5s ease;
      width: 8px;
      border-radius: 5px;
    }

    @keyframes fadeInLeft {
      from {
        left: 20px;
        opacity: 0;
      }
      to{
        left: 0px;
        opacity: 1;
      }
    }

    @keyframes fadeInRight {
      from {
        right: 20px;
        opacity: 0;
      }
      to{
        right: 0px;
        opacity: 1;
      }
    }

    #fadeLeft {
      animation-name: fadeInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }

    #fadeRight {
      animation-name: fadeInRight;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }

    body {
      background-color: ${theme.background};

      transition: background-color 0.5s ease-in-out;
    }
  `;

  return (
      <Layout whereInPage={currentID}>
        <React.Fragment>
          <GlobalStyle></GlobalStyle>
        </React.Fragment>
        <HomeNav></HomeNav>
        <About about={about}></About>
        <Projects projects={projects}></Projects>
      </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  initializeFirebase();
  const projects = await getProjects();
  const about = await getAbout();
  return {
    props: {
      projects,
      about
    }
  }
}

export default Home
