import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import About from '../components/about/about'
import HomeNav from '../components/home/home'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import Projects from '../components/projects/projects'
import { theme } from '../theme/theme'
import { createGlobalStyle } from 'styled-components';

const Home: NextPage = () => {
  const [currentID, setCurrentID] = useState("home");

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting) {
          console.log(entry.target.id);
          setCurrentID(entry.target.id);
        }
      })
    }
  
    let observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
  
    observer.observe(document.getElementById("home")!);
    observer.observe(document.getElementById("about")!);
    observer.observe(document.getElementById("projects")!);
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
  `;

  return (
    <Layout whereInPage={currentID}>
      <React.Fragment>
        <GlobalStyle></GlobalStyle>
      </React.Fragment>
      <HomeNav></HomeNav>
      <About></About>
      <Projects></Projects>
    </Layout>
  )
}

export default Home
