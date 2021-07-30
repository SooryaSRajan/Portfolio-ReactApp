import './App.css';
import React from "react";
import NavBar from "./Components/NavigationBar";
import HeroPage from "./Pages/HeroPage";
import FooterBar from "./Components/FooterBar";
import About from "./Components/AboutSection";
import Skills from "./Components/SkillsSection";
import Projects from "./Components/Projects";

function App() {
    React.useEffect(() => {
        window.addEventListener("resize", updateHeightAndWidth);
        return () => window.removeEventListener("resize", updateHeightAndWidth);
    });

    const updateHeightAndWidth = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    };

    const [height, setHeight] = React.useState(window.innerHeight);
    const [width, setWidth] = React.useState(window.innerWidth);

    return (

        <div className="project">
            <NavBar height = {height}/>
            <HeroPage/>
            <About height={(height)} width={(width)}/>
            <Skills height={(height)} width={(width)}/>
            <Projects height={(height + 20) + "px"}/>
            <FooterBar/>
        </div>
    );
}


export default App;
