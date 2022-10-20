import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Quotes from "../Quotes/Quotes";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import styles from "./App.css";

function App()
{
    return (<div id="app"> 
        <Navbar />
        <Home />
        {/* <Quotes />  */}
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
    </div>);
}

export default App;