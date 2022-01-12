import React, {useState} from "react";
import NavBar from "./Components/NavigationBar";
import HeroPage from "./Components/HeroPage";
import FooterBar from "./Components/FooterBar";
import About from "./Components/AboutSection";
import Skills from "./Components/SkillsSection";
import Projects from "./Components/Projects";
import ProjectsGallery from "./Components/ProjectsGallery";

function App() {
    const [openGallery, setOpenGallery] = useState(false);
    return (

        <div className="project">
            <NavBar/>
            {openGallery && <ProjectsGallery setOpenGallery={setOpenGallery}/>}
            <HeroPage/>
            <About/>
            <Skills/>
            <Projects setOpenGallery={setOpenGallery}/>
            <FooterBar/>
        </div>
    );
}


export default App;
