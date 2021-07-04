import React, {useState} from "react";
import styled from 'styled-components';
import {navigationData} from "../Data/NavigationData";
import {BrowserRouter as Router} from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import NavDrawer from "./NavigationDrawer";
import {Link} from 'react-scroll';

const Nav = styled.nav`
height: 40px;
width: 100%;
position: fixed;
align-items: center;
display: flex;
justify-content: space-between;
padding: 8px;
z-index: 100;
@media screen and (max-width: 768px){
display: flex;
}
`

const NavBackground = styled.nav`
width: 100%;
height: 100%;
`

const NavMenu = styled.div`
margin: 10px;
align-items: center;
`

const MenuBar = styled(FaBars)`
&:hover{
cursor: pointer;
border-radius: 10px;
background: white;
color: black;
}
transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(-180deg)'};
transition: 0.3s ease-in-out;
color: white;
margin-right: 20px;
align-items: center;
align-content: center;
display: none;
padding: 10px;
@media screen and (max-width: 768px){
display: flex;
}
`
const NavMenuButtons = styled(Link).attrs(() => ({
    activeClass: 'active',
}))`
&:hover{
color: #ffffff;
 font-size: 16.3px;
}
&.active {
color: #ffffff;
border-bottom: 3px solid #00cdff;
 }
 font-size: 16px;
font-weight: 400;
transition: 0.3s;
color: #d2d2d2;
text-align: center;
align-items: center;
margin: 5px;
padding: 10px 10px 10px 10px; 
text-decoration: none;
cursor: pointer;
@media screen and (max-width: 768px){
display: none;
}

`;

const ContactMe = styled(Link)`
&:hover{
color: #e0e0e0;
transform: scale(1.1, 1.1);
}
background: #0e0041;
margin-right: 40px;
transition: 0.3s;
border-radius: 5px;
text-align: center;
align-content: center;
align-items: center;
padding: 8px 30px;
color: white;
cursor: pointer;
text-decoration: none;
@media screen and (max-width: 768px){
display: none;
}
`

const EmptyBox = styled.div`
width: 100px;
@media screen and (max-width: 768px){
display: none;
`

const BackDrop = styled.div`
z-index: 50;
width: 100%;
backdrop-filter: blur(10px);
height: ${props => props.height + "px"};;
background-color: rgba(0,0,0,0.5);
position: fixed;
display: none;
@media screen and (max-width: 768px){
display: block;
visibility: ${({open}) => open ? 'visible' : 'hidden'};
transition: opacity 0.3s ease-in-out;
opacity: ${({open}) => open ? '1' : '0'};
}
`

const NavBar = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <Router>
            <BackDrop height={props.height} open={open}/>
            <Nav>

                <NavMenu>
                    {navigationData.map((item, index) => (
                        <NavMenuButtons key={index}
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                        >
                            {item.title}
                        </NavMenuButtons>
                    ))}
                </NavMenu>
                <MenuBar onClick={() => {
                    setOpen(!open)
                }} open={open}/>
            </Nav>
            <NavDrawer isOpen={open} clickListener={setOpen}/>
        </Router>


    )

}

//If you change your mind:
//                    <ContactMe to="/contact">
//                         Contact Me
//                     </ContactMe>
//                    <EmptyBox/>

export default NavBar;
