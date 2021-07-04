import './App.css';
import React from "react";
import NavBar from "./Components/NavigationBar";
import styled from 'styled-components';
import HeroPage from "./Pages/HeroPage";
import FooterBar from "./Components/FooterBar";
import About from "./Components/AboutSection";
import SvgTwo from "./Images/wave_four.svg";
import Skills from "./Components/SkillsSection";

//5b1bd6
const NavSpace = styled.div`
height: 50px;
`
const Box4 = styled.div`
height: ${props => props.height};
width: 100%;
background: url(${SvgTwo}) no-repeat #252627 top;
`


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
            <Box4 id="projects" height={(height) + "px"}/>
            <FooterBar/>
        </div>
    );
}


export default App;
