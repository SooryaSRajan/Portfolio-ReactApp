import styled from "styled-components";
import React from "react";
import {FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaGithub} from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

//background: linear-gradient(45deg, #9500ff, #006ded, #ed005f, #d9ff00);

const FooterHolder = styled.div`
height: 200px;
position: relative;
width: 100%;
background: #0e0041;
@media screen and (max-width: 768px){
height: 10%;
padding-top: 50px;
padding-bottom: 50px;
}
@media screen and (max-width: 300px){
height: 30%;
}
`

const FaceBookIcon = styled(FaFacebook)`
transition: 0.3s;
margin: 20px;
font-size: clamp(10px, 34px, 30px);
color: white;

&:hover{
cursor: pointer;
transform: scale(1.3);
color: #4267B2;
}
`

const InstagramIcon = styled(FaInstagram)`
transition: 0.3s;
margin: 20px;
font-size: clamp(10px, 34px, 30px);
color: white;

}
&:hover{
cursor: pointer;
transform: scale(1.3);
color: #DD2A7B;
`

const GoogleIcon = styled(FaGoogle)`
transition: 0.3s;
margin: 20px;
font-size: clamp(10px, 34px, 30px);
color: white;
}
&:hover{
cursor: pointer;
transform: scale(1.3);
color: #DB4437;
`
const LinkedInIcon = styled(FaLinkedin)`
transition: 0.3s;
margin: 20px;
font-size: clamp(10px, 34px, 30px);
color: white;
}
&:hover{
cursor: pointer;
transform: scale(1.3);
color: #0077B5;
`

const GitHubIcon = styled(FaGithub)`
transition: 0.3s;
margin: 20px;
font-size: clamp(10px, 34px, 30px);
color: white;
}
&:hover{
cursor: pointer;
transform: scale(1.3);
color: #384c5c;
`


const IconsHolder = styled.div`
height: 75%;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px){
height: 100%;
}
`

const IconsAlignment = styled.div`
text-align: center;
`

const BottomHolder = styled.div`
transition: 1s;
padding-top: 3px;
padding-bottom: 3px;
display: flex;
height: 25%;
width: 100%;
background: #0e0041;
background: linear-gradient(60deg, #00ffb7, #ac00a9, #ed005f, #d9ff00);
align-items: center;
justify-content: space-evenly;
@media screen and (max-width: 768px){
display: none;
}
background-size: 200% 200%;
animation: gradient 15s ease infinite;
@keyframes gradient {
0% {
background-position: 0 50%;
}
50% {
background-position: 100% 50%;
}
100% {
background-position: 0 50%;
}

`

const BottomTextBox = styled.p`
color: white;
font-weight: 100;
`

const FooterBar = () => {

    const open = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    };

    return (
            <FooterHolder id="footer">

                <IconsHolder>
                    <Flip bottom>
                    <IconsAlignment>
                            <FaceBookIcon onClick={() => open('https://www.facebook.com/Soorya.SRajan/')}/>
                            <InstagramIcon onClick={() => open('http://instagram.com/the_convoluted_soul')}/>
                            <GoogleIcon onClick={() => open('https://mail.google.com/mail/u/1/?view=cm&fs=1&to=soorya.s27@gmail.com&tf=1')}/>
                            <LinkedInIcon onClick={() => open('https://www.linkedin.com/in/soorya-s-39952b151')}/>
                            <GitHubIcon onClick={() => open('https://github.com/SooryaSRajan')}/>
                    </IconsAlignment>
                </Flip>
                </IconsHolder>
                <BottomHolder>
                    <Zoom left>
                        <BottomTextBox>Copyrights © 2021 All rights reserved</BottomTextBox>
                    </Zoom>
                    <Zoom right>
                        <BottomTextBox>Designed by Soorya S</BottomTextBox>
                    </Zoom>
                </BottomHolder>
            </FooterHolder>
    )

}

export default FooterBar;