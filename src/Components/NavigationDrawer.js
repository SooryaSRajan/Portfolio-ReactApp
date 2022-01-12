import styled from 'styled-components';
import React from "react";
import {navigationData} from "../Data/NavigationData";
import {Link} from 'react-scroll';
import {BrowserRouter as Router} from "react-router-dom";

const DrawerHolder = styled.div`
z-index: 90;
position: fixed;
justify-content: space-between;
padding: 40px 20px 20px;
background: #341ba4;
width: 100%;
transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-300px)'};
transition: transform 0.3s ease-in-out;
display: inline-grid;
@media screen and (min-width: 769px){
transform: translateY(-300px);
}
@media screen and (max-height: 230px){
transform: translateY(-300px);
}
@media screen and (max-width: 230px){
transform: translateY(-300px);
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
    return (
        <Router>
            <DrawerHolder open={props.isOpen}>
                {navigationData.map((item, index) => (
                    <DrawerButtons key={index}
                                   to={item.link}
                                   activeClass="active"
                                   spy={true}
                                   smooth={true}
                                   onClick={() => {
                                       props.clickListener(false)
                                   }}
                    >
                        {item.title}
                    </DrawerButtons>
                ))}
            </DrawerHolder>
        </Router>
    )
}

export default NavDrawer;
