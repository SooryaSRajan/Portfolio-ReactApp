import styled from "styled-components";
import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaArrowAltCircleDown} from "react-icons/fa";
import {Link} from 'react-scroll';
import bg from "../Images/theme_background.webp"
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

//background: linear-gradient(60deg, #00d9ff, #b000ae, #ff0067, #d9ff00);

const HeroBox = styled.div`
padding-bottom: 10px;
position: relative;
min-height: 100vh;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: url(${bg}) fixed;
animation: gradient 15s ease-in-out infinite;
background-size: 250vh;
@keyframes gradient {
0% {
background-position:0 0;
}
50% {
background-position:50% 0;
}
100% {
background-position:0 0;
}
`

const Jumbotron = styled.div`
backdrop-filter: ${props => props.animate ? 'blur(4px)' : 'blur(0px)'};
overflow: hidden;
transition: all 0.1s ease-in-out;
padding: 40px;
border-radius: 20px;
z-index: 10;
color: white;
margin: 40px;
display: inline-list-item;
@media screen and (max-width: 768px){
margin-right: 20px;
margin-left: 20px;
}

@media screen and (max-width: 100px){
padding: 0;
overflow: visible;
}
`

const DownArrow = styled(FaArrowAltCircleDown)`
bottom:0;
right: 0;
position: absolute;
font-size: 40px;
align-content: center;
align-items: center;
margin-right: 20px;
margin-bottom: 20px;
transition: 0.3s;
animation: revealContent 1s;
color: white;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
&:hover{
cursor: pointer;
transform: scale(1.2) rotate(360deg);
}
@media screen and (max-width: 768px){
display: none;
}
`

const NameTextHolder = styled.div`
letter-spacing: 5px;
font-size: clamp(1rem, 12vw, 7rem);
word-wrap: break-word;
word-break: break-word;
color: white;
`

const DescriptionHolder = styled.div`
font-size: clamp(0.8rem, 2vw, 1.3rem);
color: white;
font-weight: lighter;
word-wrap: break-word;
word-break: break-word;
`

const SubDescriptionHolder = styled.div`
font-weight: lighter;
margin-top: 5px;
margin-bottom: 10px;
word-wrap: break-word;
word-break: break-word;
color: white;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
font-size: clamp(0.7rem, 1vw, 1rem);
`

const ButtonIconGit = styled(FaGithubSquare)`
font-size: 32px;
margin-right: 10px;
`
const ButtonIconLinkedIn = styled(FaLinkedin)`
font-size: 32px;
margin-right: 10px;
`

const   Button = styled.div`
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1; ;
}
}
@media screen and (max-width: 225px){
display: none;
}

@media screen and (max-height: 310px){
display: none;
}
width: 100px;
margin-right: 20px;
border-radius: 5px;
padding: 10px 20px;
margin-top: 20px;
background: ${props => props.color};
color: white;
display: -webkit-inline-flex;
align-content: center;
align-items: center;
justify-content: space-between;
text-decoration: none;
transition: 0.3s;
&:hover{
background-color: white;
color: ${props => props.color};
cursor: pointer;
transform: scale(1.1, 1.1);
}
`

const ImageHolder = styled.div`
z-index: 0;
animation: revealContent 1s;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
background-image: url("https://www.w3schools.com/howto/img_avatar.png");
background-size: clamp(8rem, 16vw, 50vw) clamp(8rem, 16vw, 50vw);
background-repeat: no-repeat;
background-position: center;
height: clamp(8rem, 16vw, 50vw);
width: clamp(8rem, 16vw, 50vw);
border-radius: 50%;
margin: 10px;
@media screen and (max-width: 768px){
display: none;
}
`

const HeroPage = () => {

    const open = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    };

    const [animate, setAnimate] = useState(false);

    function onChange(isVisible) {
        if (!animate && isVisible) setAnimate(true);
    }

    return (
        <Router>
            <HeroBox id="home">
                <Fade top>
                    <ImageHolder/>
                </Fade>
                    <Jumbotron animate={animate}>
                        <Link
                            activeClass="active"
                            to={"footer"}
                            spy={true}
                            smooth={true}>
                            <DownArrow/>
                        </Link>
                        <Fade top>
                            <VisibilitySensor onChange={onChange}>
                                <NameTextHolder>
                                    SOORYA S
                                </NameTextHolder>
                            </VisibilitySensor>
                        </Fade>
                        <Fade top>
                            <DescriptionHolder>
                                Second year student at Amrita School of Engineering, Coimbatore
                            </DescriptionHolder>
                        </Fade>
                        <Fade top>
                            <SubDescriptionHolder>
                                Mobile Application & Web Developer
                            </SubDescriptionHolder>
                        </Fade>
                        <Fade top>
                            <div>
                                <Button color={"#182923"} onClick={() => open('https://github.com/SooryaSRajan')}>
                                    <ButtonIconGit/>
                                    <p>
                                        GitHub
                                    </p>
                                </Button>
                                <Button color={"#0a66c2"}
                                        onClick={() => open('https://www.linkedin.com/in/soorya-s-39952b151')}>
                                    <ButtonIconLinkedIn/>
                                    <p>
                                        LinkedIn
                                    </p>
                                </Button>
                            </div>
                        </Fade>
                    </Jumbotron>
            </HeroBox>
        </Router>
    )
};

export default HeroPage;
