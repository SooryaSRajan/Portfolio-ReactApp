import styled from 'styled-components';
import React from "react";
import svg from "../Images/about_component_wave.svg";
import Bounce from "react-reveal/Bounce";


const AboutContainer = styled.div`
    overflow: hidden;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: #0a0a0a url(${svg}) no-repeat;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    `
const ContentSection = styled.div`
    margin: 40px;
    `

const ImageHolder = styled.div`
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
    border-radius: 10%;
    margin: 10px;
    @media screen and (max-width: 768px){
    display: none;
    }
    `

const Header = styled.h1`
    font-size: clamp(2.5vw, 38px, 10vw);
    color: white;
    `

const HeaderWithBorder = styled.h2`
    margin-bottom: 10px;
    color: white;
    border-bottom: 3px solid #00cdff;
    `

const Content = styled.div`
    word-wrap: break-word;
    word-break: break-word;
    color: #b1b0b0;
    margin-bottom: 20px;
    width: 50vw;
    font-size: clamp(1rem, 17px, 1.3rem);
    @media screen and (max-width: 768px){
    width: 90%;
    `

const NameSpan = styled.span`
    color: #e05261;
    `

const SubHeader = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
    color: #dddddd;
    font-style: italic;
    `

const SubHeaderHover = styled.span`
    transition: 0.5s;
    &:hover{
    cursor: context-menu;
    font-size: 16.4px;
    color: white;
    }
    `

const LinkSpan = styled.span`
    color: #ffdddd;
    transition: 0.3s;
    &:hover{
    color: #ffbaba;
    cursor: pointer;
    }
    `

const EducationTitle = styled.h5`
    color: whitesmoke;
    `

const LinkContainer = styled.span`
    color: white;
    transition: 0.3s;
    &:hover{
    cursor: pointer;
    font-size: 17.3px;
    }
    `

const About = (props) => {

    const open = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    };

    return (
        <AboutContainer id={'about'}>
            <ContentSection id={'about'}>
                <Bounce right>
                    <Header>
                        Hey there!
                    </Header>
                    <Header>
                        I'm <NameSpan>Soorya S</NameSpan>
                    </Header>
                    <SubHeader>
                        <SubHeaderHover>
                            Web Developer
                            &nbsp;
                        </SubHeaderHover>
                        <SubHeaderHover>
                            • App Developer
                            &nbsp;
                        </SubHeaderHover>
                        <SubHeaderHover>
                            • Software Developer
                            &nbsp;
                        </SubHeaderHover>
                        <SubHeaderHover>
                            • Artist
                        </SubHeaderHover>
                    </SubHeader>
                    <Content>
                        I am a 19 year old computer aspirant with an endearment for computers and technology.
                        I am currently pursuing my bachelor's degree in Computer Science (B.Tech CSE) in
                        <LinkSpan
                            onClick={() => open('https://www.amrita.edu/school/engineering/coimbatore/computer-science')}> Amrita
                            Vishva Vidyapeetham</LinkSpan>, Coimbatore. I am intrigued by technology and how they've
                        evolved
                        over the course of fifty years. I love developing mobile applications and web-pages. I also love
                        drawing,
                        specifically digital-art and pencil-sketching.
                    </Content>

                    <HeaderWithBorder>
                        Education
                    </HeaderWithBorder>
                    <Content>
                        <EducationTitle>
                            • AMRITA VISHVA VIDYAPEETHAM
                        </EducationTitle>
                        <SubHeader>
                            <SubHeaderHover>
                                B.Tech in Computer Science and Engineering • 2019-2023 • 9.02 CGPA
                            </SubHeaderHover>
                        </SubHeader>
                        <EducationTitle>
                            • GEETHAANJALI ALL INDIA SR. SEC. SCHOOL
                        </EducationTitle>
                        <SubHeader>
                            <SubHeaderHover>
                                XII • CBSE • 2018-2019 • 89.6%
                            </SubHeaderHover>
                        </SubHeader>

                        <EducationTitle>
                            • GEETHAANJALI ALL INDIA SR. SEC. SCHOOL
                        </EducationTitle>
                        <SubHeader>
                            <SubHeaderHover>
                                X • CBSE • 2016-2017 • 10/10 GPA
                            </SubHeaderHover>
                        </SubHeader>
                    </Content>

                    <HeaderWithBorder>
                        Get in touch
                    </HeaderWithBorder>
                    <Content>
                        <p>Soorya S</p>
                        <p>+91 9080336540</p>
                        <p>
                            <LinkContainer
                                onClick={() => open('https://mail.google.com/mail/u/1/?view=cm&fs=1&to=soorya.s27@gmail.com&tf=1')}>
                                soorya.s27@gmail.com
                            </LinkContainer>
                            &nbsp;
                            |
                            &nbsp;
                            <LinkContainer
                                onClick={() => open('https://mail.google.com/mail/u/1/?view=cm&fs=1&to=soorya.srajan@outlook.com&tf=1')}>
                                soorya.srajan@outlook.com
                            </LinkContainer>
                        </p>
                    </Content>
                </Bounce>
            </ContentSection>
            <Bounce top>
                <ImageHolder/>
            </Bounce>
        </AboutContainer>
    )
}

export default About;
