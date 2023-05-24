import React from 'react'
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Skills from "..//Skills/Skills";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
        <Header/>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
    </>
  )
}

export default Home