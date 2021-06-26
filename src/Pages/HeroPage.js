import styled from "styled-components";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaArrowAltCircleDown} from "react-icons/fa";
import {Link} from 'react-scroll';
import svgHero
    from "../Images/wave_hero.svg";

const HeroBackGround = styled.div`
z-index: 0;
bottom: -1px;
position: absolute;
width: 100%;
height: ${prop => prop.height};
background-image: url(${svgHero});
background-repeat: no-repeat;
background-position: bottom;

`

const HeroBox = styled.div`
margin: 0;
position: relative;
min-height: ${props => props.height};
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(60deg, #00d9ff, #b000ae, #ff0067, #d9ff00);
animation: gradient 15s ease infinite;
background-size: 300% ;
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
z-index: 10;
color: white;
margin-right: 40px;
margin-left: 40px;
display: inline-list-item;
@media screen and (max-width: 768px){
margin-right: 20px;
margin-left: 20px;

}
`

const DownArrow = styled(FaArrowAltCircleDown)`
bottom:0;
right: 0;
position: absolute;
font-size: 40px;
align-content: center;
align-items: center;
margin: 40px;
transition: 0.3s;
animation: revealContent 1s;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
&:hover{
cursor: pointer;
transform: scale(1.2) rotate(360deg);
color: black;
}
`

const NameTextHolder = styled.div`
animation: revealContent 1s;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
font-size: clamp(1rem, 12vw, 7rem);

`

const DescriptionHolder = styled.div`
animation: revealContent 1s;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
font-size: clamp(0.8rem, 2vw, 1.3rem);
`

const SubDescriptionHolder = styled.div`
animation: revealContent 1s;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
font-size: clamp(0.7rem, 1vw, 1rem);
`

const ButtonIconGit = styled(FaGithubSquare)`
color: #ffffff;
font-size: 32px;
margin-right: 10px;
`
const ButtonIconLinkedIn = styled(FaLinkedin)`
color: #ffffff;
font-size: 32px;
margin-right: 10px;
`

const Button = styled.div`
animation: revealContent 1s;
@keyframes revealContent {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1; ;
}
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
background-size: clamp(8rem, 16vw, ${props => props.height}) clamp(8rem, 16vw, ${props => props.height});
background-repeat: no-repeat;
background-position: center;
height: clamp(8rem, 16vw, ${props => props.height});
width: clamp(8rem, 16vw, ${props => props.height});
border-radius: 50%;
    margin: 10px;
@media screen and (max-width: 768px){
display: none;
}
`
//                <HeroBackGround height={(height + 10) + "px"}/>

const HeroPage = () => {

    const open = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    };


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
        <Router>
            <HeroBox id="home" height={(height) + "px"}>
                <HeroBackGround height={(height) + "px"}/>
                <ImageHolder height={(height / 2) + "px"}/>
                <Jumbotron>
                    <Link
                        activeClass="active"
                        to={"footer"}
                        spy={true}
                        smooth={true}>
                        <DownArrow/>
                    </Link>
                    <NameTextHolder>
                        Soorya S
                    </NameTextHolder>
                    <DescriptionHolder>
                        Second year student at Amrita School of Engineering, Coimbatore
                    </DescriptionHolder>
                    <SubDescriptionHolder>
                        Mobile Application and Web Developer
                    </SubDescriptionHolder>
                    <Button color={"#161b22"} onClick={() => open('https://github.com/SooryaSRajan')}>
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
                </Jumbotron>
            </HeroBox>
        </Router>
    )
};

export default HeroPage;
