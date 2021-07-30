import React from "react";
import styled from 'styled-components';
import {GalleryData} from "../Data/GalleryData";
import svgData from "../Images/wave_10.svg";

//old color : #252627

const ProjectsHolder = styled.div`
min-height: 100vh;
width: 100%;
margin-bottom: 50px;
`

const GalleryHolder = styled.div`
margin-top: 50px;
text-align: center;
`

const ProjectsRootHolder = styled.div`
overflow: hidden;
padding: 10px;
position: relative;
background: url(${svgData}) no-repeat  #151515 top;
`

const GalleryBox = styled.div`
color: white;
overflow: hidden;
position: relative;
margin: 10px;
background: white url(${props => props.url}) no-repeat center;
background-size: cover;
width: 90%;
max-width: 29rem;
display: inline-block;
height: 20rem;
min-height: 10rem;
border-radius: 2rem;
transition: all 0.3s ease-in-out;
&:hover{
transform: scale(1.05);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
&:hover .gallery_content_box {
transform: translateY(-15rem);
opacity: 1;
}
`

const GalleryBoxDescription = styled.div`
color: white;
opacity: 0;
border-radius: 2rem;
position: absolute;
bottom: -15rem;
transition: all 0.3s ease-in-out;
background-color: rgba(60,60,60,0.8);
height: max-content;
display: flex;
justify-content: center;
`

const Container = styled.div`
::-webkit-scrollbar {
    width: 0;
}
overflow-y: scroll;
font-size: clamp(0.5rem, 15px, 3vw);
padding-left: 15px;
padding-right: 15px;
padding-top: 15px;
position: relative;
height: 100%;
width: 100%;
`

const RedirectButton = styled.div`
background-color: #0059ef;
color: white;
font-size: 1rem;
border-radius: 10px;
margin: 24px;
padding: 10px 20px;
transition: all 0.3s ease-in-out;
@media screen and (max-width: 170px){
display: none;
}
&:hover{
cursor: pointer;
transform: scale(1.1);
background-color: #002aff;
}
`
const TitleBox = styled.div`
padding: 5px;
border-top-left-radius: 2rem;
border-top-right-radius: 2rem;
background-color: rgba(1, 1, 1, 0.5);
color: white;
top: 0;
`

const TextHolder = styled.h1`
margin-top: 50px;
margin-bottom: 20px;
text-align: center;
color: white;
font-size: 38px;
`

const Projects = () => {
    return (
        <ProjectsRootHolder id="projects">
            <ProjectsHolder>
                <TextHolder>
                    My Projects
                </TextHolder>
                <GalleryHolder>
                    {GalleryData.map((item, index) => (
                        <ContentBox key={index} url={item.url} title={item.title} content={item.content} git={item.git}/>
                    ))}
                </GalleryHolder>
            </ProjectsHolder>
        </ProjectsRootHolder>
    )
}

const ContentBox = (props) => {

    const open = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    };

    return (
        <GalleryBox url={props.url}>
            <TitleBox>
                {props.title}
            </TitleBox>
            <GalleryBoxDescription className={'gallery_content_box'}>
                <Container>
                    {props.content}
                    <RedirectButton onClick={() => {
                        console.log(props.git)
                        open(props.git)
                    }}>
                        Source Code &lt;/&gt;
                    </RedirectButton>
                </Container>
            </GalleryBoxDescription>

        </GalleryBox>
    )
}


export default Projects;
