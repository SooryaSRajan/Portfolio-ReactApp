import React from "react";
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
background: #0e0041;
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
animation: revealMenu 1s;
@keyframes revealMenu {
  0%   { transform:  rotate(0deg)}
  100%   { transform:  rotate(180deg)}
}

}
@keyframes hideMenu {
  0%   { transform:  rotate(0deg)}
  100%   { transform:  rotate(180deg)}
}
animation: hideMenu 1s;
color: white;
transition: 0.3s;
margin-left: 10px;
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

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.state.isOpen) {
            this.setState(
                {
                    isOpen: false
                })
        } else {
            this.setState(
                {
                    isOpen: true
                })
        }

    };

    render() {

        return (
            <Router>
                <Nav>
                    <MenuBar onClick={this.handleClick}/>
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
                </Nav>
                <NavDrawer isVisible={this.state.isOpen}/>
            </Router>


        )
    }

}

//If you change your mind:
//                    <ContactMe to="/contact">
//                         Contact Me
//                     </ContactMe>
//                    <EmptyBox/>

export default NavBar;
