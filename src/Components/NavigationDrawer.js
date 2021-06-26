import styled from 'styled-components';
import React from "react";
import {navigationData} from "../Data/NavigationData";
import {Link as redirectLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import {BrowserRouter as Router} from "react-router-dom";


const ContactButton = styled(redirectLink)`
&:hover{
color: #a5adb1;
transform: scale(1.05, 1.05);
}
border-radius: 3px;
background: linear-gradient(-45deg, #00cdff, #006ded);
font-weight: 500;
transition: 0.3s;
color: #ffffff;
text-align: center;
align-items: center;
margin: 5px;
padding: 10px;
text-decoration: none;
cursor: pointer;
`

const DrawerHolder = styled.div`
z-index: 90;
margin-top: 40px;
position: fixed;
justify-content: space-between;
padding: 20px;
background: #0e0041;
width: 100%;
display: inline-grid;
animation: revealClip 1s;
@keyframes revealClip {
  0%   {top: -200px; opacity: 0}
  100% {top: 0; opacity: 1}
}
@media screen and (min-width: 769px){
display: none;
}
`

const DrawerHolderReverse = styled.div`
z-index: 90;
margin-top: 40px;
position: fixed;
justify-content: space-between;
padding: 20px;
background: #0e0041;
width: 100%;
display: inline-grid;
animation: revealClipHider 1s forwards;
@keyframes revealClipHider {
  0%   {top: 0; opacity: 1;  }
  100% {top: -200px; opacity: 0; display: none}
}
@media screen and (min-width: 769px){
display: none;
}
`


const DrawerButtons = styled(Link).attrs(() => ({
    activeClass: 'active',

}))`
&:hover{
color: #a5adb1;
transform: scale(1.05, 1.05);
}
&.active{
color: #00cdff;
}
font-weight: 500;
transition: 0.3s;
color: #ffffff;
text-align: center;
align-items: center;
margin: 5px;
padding: 2px;
text-decoration: none;
cursor: pointer;
`


const NavDrawer = (props) => {
    if (props.isVisible) {
        console.log(props.isVisible + "visible")
        return (
            <Router>
                <DrawerHolder hidden draggable="true">
                    {navigationData.map((item, index) => (
                        <DrawerButtons key={index}
                                       to={item.link}
                                       activeClass="active"
                                       spy={true}
                                       smooth={true}>
                            {item.title}
                        </DrawerButtons>
                    ))}

                </DrawerHolder>
            </Router>
        )

    } else return (
        <Router>
            <DrawerHolderReverse>
                {navigationData.map((item, index) => (
                    <DrawerButtons key={index}
                                   to={item.link}
                                   activeClass="active"
                                   spy={true}
                                   smooth={true}>
                        {item.title}
                    </DrawerButtons>
                ))}
            </DrawerHolderReverse>
        </Router>
    )

}
//If you change your mind:
//<ContactButton to="/contact">
//                         Contact Me
//                     </ContactButton>

export default NavDrawer;
