import React, {useState} from "react";
import styled from 'styled-components';
import {GalleryData} from "../Data/GalleryData";
import svgData from "../Images/projects_component_wave.svg";
import VisibilitySensor from "react-visibility-sensor";
import Flip from "react-reveal/Flip";
import {IoIosArrowDown} from 'react-icons/io'
import {BsArrowsFullscreen} from 'react-icons/bs'

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
background: url(${svgData}) no-repeat  #0a0a0a top;
`

const GalleryBox = styled.div`
color: white;
overflow: hidden;
position: relative;
margin: 10px;
background: white url(${props => props.url}) repeat-x center;
background-size: contain;
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
&:hover ._hover_expand_gallery_button{
opacity: 1;
}
transform: ${props => props.animate ? 'scale(1)' : 'scale(0.3)'};
opacity: ${props => props.animate ? '1' : '0'};
`

const GalleryBoxDescription = styled.div`
color: white;
opacity: 0;
border-radius: 2rem;
position: absolute;
bottom: -15rem;
transition: all 0.3s ease-in-out;
background-color: rgba(60,60,60,0.8);
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
@media screen and (max-width: 200px){
display: none;
}
&:hover{
cursor: pointer;
transform: scale(1.1);
background-color: #002aff;
}
`
const TitleBox = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
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

const ShowMoreButtonAlignment = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
`

const ShowMoreButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border: 1px white solid;
border-radius: 10px;
padding: 15px;
background: rgba(0,0,0,0);
max-width: 300px;
text-align: center;
color: white;
transition: all ease-in-out 0.3s;

&:hover{
cursor: pointer;
transform: scale(1.1, 1.1);
}
`

const Arrow = styled(IoIosArrowDown)`
margin-left: 10px;
transition: 0.5s ease-in-out all;
transform: ${props => props.rotate? 'rotate(180deg)' : 'rotate(0deg)'};
`

const ExpandButton = styled(BsArrowsFullscreen)`
right: 0;
margin-right: 1rem;
position: absolute;
opacity: 0;
transition: 0.2s ease-in-out all;

&:hover{
transform: scale(1.1);
cursor: pointer;
}
`

const Projects = (props) => {

    const [showMore, setShowMore] = useState(false);

    let GalleryContent = GalleryData
    if (!showMore) GalleryContent = GalleryData.slice(0, 5)

    return (
        <ProjectsRootHolder id="projects">
            <ProjectsHolder>
                <TextHolder>
                    <Flip left>
                        My Projects
                    </Flip>
                </TextHolder>

                <GalleryHolder>
                    {GalleryContent.map((item, index) => (
                        <ContentBox key={index} url={item.url} title={item.title} content={item.content}
                                    git={item.git} setOpenGallery={props.setOpenGallery}/>
                    ))}
                </GalleryHolder>
                <ShowMoreLessButton showMore={showMore} setShowMore={setShowMore}/>
            </ProjectsHolder>
        </ProjectsRootHolder>
    )
}

const ShowMoreLessButton = (props) => {

    let buttonText = 'Show More'
    if (props.showMore) {
        buttonText = 'Show Less'
    }

    return (
        <ShowMoreButtonAlignment>
            <ShowMoreButton onClick={() => props.setShowMore(prev => !prev)}>
                {buttonText}
                <Arrow rotate={props.showMore}/>
            </ShowMoreButton>
        </ShowMoreButtonAlignment>
    )
}

const ContentBox = (props) => {

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
        <GalleryBox url={props.url} animate={animate}>
            <VisibilitySensor onChange={onChange}>
                <TitleBox>
                    {props.title}
                    {/*<ExpandButton className={'_hover_expand_gallery_button'} onClick={() => props.setOpenGallery(true)}/>*/}
                </TitleBox>
            </VisibilitySensor>
            <GalleryBoxDescription className={'gallery_content_box'}>
                <Container>
                    {props.content}
                    <RedirectButton onClick={() => {
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
