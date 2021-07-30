import styled from "styled-components";
import React from "react";
import svg from "../Images/wave_three.svg";
import {FaDownload} from "react-icons/fa";
import {BrowserRouter as Router, Link} from "react-router-dom";
import pdf from "../Data/MY_RESUME.pdf";
import SkillsBar from "./SkillsBar";
import SKILLS from "../Data/SkillsDataSectionOne";
import SKILLS2 from "../Data/SkillsDataSectionTwo";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

const SkillsHolder = styled.div`
word-wrap: break-word;
word-break: break-word;
overflow: hidden;
height: 100%;
min-height: 100vh;
background: url(${svg}) no-repeat  #341ba4 top;
display: flex;
align-items: center;
justify-content: center;
`

const SkillsHolderBox = styled.div`
margin: 10px 50px;
display: flex;
background-color: ${props => props.color};
@media screen and (max-width: 768px){
display: inline-block;
width: 100%;
margin: 10px 0;
}
`
const ContentHolder = styled.div`
width: 100%;
`

const TextHolder = styled.h1`
margin-top: 50px;
margin-bottom: 20px;
text-align: center;
color: white;
font-size: 38px;
`

const SubTextHolder = styled.div`
text-align: center;
color: #c6c6c6;
font-size: 18px;
margin-left: 30px;
margin-right: 30px;
`

const DownloadButtonIcon = styled(FaDownload)`
margin-left: 10px;
color: black;
`
const DownloadTextHolder = styled.h4`
color: black;
`

const DownloadButtonContentBox = styled(Link)`
word-break: keep-all;
text-decoration: none;
padding: 10px 30px;
display: -webkit-inline-flex;
justify-content: center;
text-align: center;
align-items: center;
align-content: center;
background-color: white;
border-radius: 5px;
transition: 1s;
@media screen and (max-width: 160px){
display: none;
}
&:hover{
cursor: pointer;
animation: hoverAnimation ease 1.2s infinite;
@keyframes hoverAnimation {
  0%   { transform:  scale(1); box-shadow: #290c67 0 0}
  50%   { transform:  scale(1.1); box-shadow: #290c67 5px 5px 20px}
  100%   { transform:  scale(1); box-shadow: #290c67 0 0}
}

}
`

const DownloadButtonHolder = styled.div`
margin: 30px 10px;
display: flex;
justify-content: center;
text-align: center;
`

const Skills = (props) => {


    return (
        <Router>
            <SkillsHolder height={props.height + "px"} id="skills">
                <ContentHolder>
                    <Flip left>

                        <TextHolder>
                            Skills
                        </TextHolder>
                        <SubTextHolder>
                            I have experience in languages such as C, C++, Java, Javascript and Python.
                        </SubTextHolder>
                        <SubTextHolder>
                            I also have really good experience in Android native application development and Flutter
                            development.
                        </SubTextHolder>
                        <SubTextHolder>
                            I also have decent experience in React Js and React Native.
                        </SubTextHolder>
                    </Flip>

                    <SkillsHolderBox>

                        <ContentHolder>
                            <Bounce left>

                                {SKILLS.map((item, index) => (
                                    <SkillsBar key={index}
                                               primaryColor={item.primaryColor}
                                               secondaryColor={item.secondaryColor}
                                               percentage={item.percentage} title={item.title}
                                    />
                                ))}
                            </Bounce>

                        </ContentHolder>

                        <ContentHolder>
                            <Bounce right>

                                {SKILLS2.map((item, index) => (
                                    <SkillsBar key={index}
                                               primaryColor={item.primaryColor}
                                               secondaryColor={item.secondaryColor}
                                               percentage={item.percentage} title={item.title}
                                    />
                                ))}
                            </Bounce>
                        </ContentHolder>
                    </SkillsHolderBox>
                    <DownloadButtonHolder>
                        <Flip top>
                            <DownloadButtonContentBox to={pdf} target="_blank" download>
                                <DownloadTextHolder>
                                    Resume
                                </DownloadTextHolder>
                                <DownloadButtonIcon/>
                            </DownloadButtonContentBox>
                        </Flip>
                    </DownloadButtonHolder>
                </ContentHolder>
            </SkillsHolder>
        </Router>

    )
}

export default Skills;
