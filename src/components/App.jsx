import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Quotes from "./Quotes";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Home from "./Home";

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