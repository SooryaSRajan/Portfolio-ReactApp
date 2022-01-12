import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import styled, {css} from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import {LexicalAnalyzerData} from "../Data/LexicalAnalyzerData";

const RootHolder = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 600;
background-color: rgba(0, 0, 0, 0.9);
animation: animateBox 0.5s ease-in-out forwards;
@keyframes animateBox {
  0%   { transform:  scale(0); opacity: 0}
  100%   { transform:  scale(1); opacity: 1}
}
`

const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
color: white;
`

const CloseButton = styled(AiOutlineClose)`
z-index: 200;
position: absolute;
right: 0;
top: 0;
margin: 1rem;
font-size: 1rem;
transition: all ease-in-out 0.3s;
&:hover{
color: red;
transform: scale(1.2);
cursor: pointer;
}
`

const SliderContainerRoot = styled.div`
width: 100vw; 
height: 56.25vw; /* height:width ratio = 9/16 = .5625  */
max-height: 100vh;
max-width: 177.78vh; /* 16/9 = 1.778 */
margin: auto;
position: absolute;
top:0;bottom:0; /* vertical center */
left:0;right:0; /* horizontal center */
`

const ButtonPositionHolder = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
align-items: center;
`

const ImageSliderButtonCommonCSS = css`
position: absolute;
font-size: clamp(1rem, 1.5vw, 2.5rem);
border: 0;
padding: clamp(0.3vw, 5px, 0.5vw);
background-color: ${props => props.disabled ? "rgba(221,221,221,0.5)" : "rgb(225, 225, 225)"};
border-radius: 50%;
color: ${props => props.disabled ? "rgba(221,221,221,0.5)" : "black"};
transition: all 0.3s ease-in-out;
&:hover{
cursor: ${props => props.disabled ? "" : "pointer"};
transform: ${props => props.disabled ? "none" : "scale(1.2)"};
}
`

const LeftButton = styled(RiArrowLeftSLine)`
${ImageSliderButtonCommonCSS};
left: 5px;
`

const RightButton = styled(RiArrowRightSLine)`
${ImageSliderButtonCommonCSS};
right: 5px;
`

const GalleryImages = styled.div`
background: transparent url(${props => props.url}) no-repeat center;
background-size: cover;
scroll-snap-align: center;
background-color: ${props => props.color};
width: 100%;
height: 100%;
flex-shrink: 0;
`

const GalleryBoxOuter = styled.div`
width: 100%;
height: 100%;
`

const GalleryBoxInner = styled.div`
scroll-behavior: smooth;
display: flex;
flex-wrap: nowrap;
height: 100%;
overflow-x: scroll;
scroll-snap-type: x mandatory;
::-webkit-scrollbar {
display: none;
}
`

const SelectedImageCircleHolder = styled.div`
display: flex;
position: absolute;
bottom: 0;
width: 100%;
justify-content: center;
margin-bottom: 10px;
`

const SelectedCircle = styled.span`
background-color: ${props => props.selected ? "white" : "#2d2d2d"};
transform: ${props => props.selected ? "scale(1.2)" : "scale(1)"};
transition: all ease-in-out 0.3s;
border-radius: 50%;
height: clamp(0.2rem, 1vw, 1.5rem);
width: clamp(0.2rem, 1vw, 1.5rem);
margin-left: 3px;
margin-right: 3px;
&:hover{
cursor: pointer;
}
`


const ProjectsGallery = (props) => {

    const childRef = useRef();
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [props]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                props.setOpenGallery(false)
            }
            else if (event.keyCode === 37) {
                console.log("Left")
                childRef.current.clickLeft()
            }
            else if(event.keyCode === 39){
                console.log("Right")
                childRef.current.clickRight()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [props]);


    return (
        <RootHolder>
            <Container>
                <CloseButton onClick={() => props.setOpenGallery(false)}/>
                <Gallery ref={childRef}/>
            </Container>
        </RootHolder>
    )
}


const Gallery = forwardRef((props, ref) => {

    const windowRef = useRef(null)
    const totalSize = LexicalAnalyzerData.length

    const [position, setPosition] = useState(0)

    const [leftDisabled, setLeftDisabled] = useState(false)
    const [rightDisabled, setRightDisabled] = useState(false)

    useImperativeHandle(ref, () => ({
        clickLeft() {
            ScrollToPrev()
        },
        clickRight() {
            ScrollToNext()
        }
    }));

    useEffect(() => {
        if (Math.floor(position) <= 0) setLeftDisabled(true)
        else setLeftDisabled(false)

        if (position >= totalSize - 1) setRightDisabled(true)
        else setRightDisabled(false)

    }, [position, props, totalSize])

    const ScrollToNext = () => {
        if (position < totalSize - 1 && windowRef != null) {
            windowRef.current.scrollTo(windowRef.current.offsetWidth * (position + 1), 0)
        }
    }

    const ScrollToPrev = () => {
        if (position > 0 && windowRef != null) {
            windowRef.current.scrollTo(windowRef.current.offsetWidth * (position - 1), 0)
        }
    }

    function onScroll(e) {
        if (windowRef != null){
            setPosition((Math.ceil(e.target.scrollLeft) + 20) / windowRef.current.offsetWidth)
        }
    }

    return (
        <SliderContainerRoot>
            <ButtonPositionHolder>
                <GalleryBoxOuter>
                    <GalleryBoxInner ref={windowRef} onScroll={onScroll}>
                        {LexicalAnalyzerData.map((item, index) => (
                            <GalleryImages key={index} url={item.url}>
                            </GalleryImages>
                        ))}
                    </GalleryBoxInner>
                </GalleryBoxOuter>
                <RightButton disabled={rightDisabled} onClick={() => {
                    ScrollToNext()
                }}/>
                <LeftButton disabled={leftDisabled} onClick={() => {
                    ScrollToPrev()
                }}/>
                <SelectedImageCircleHolder>
                    {LexicalAnalyzerData.map((item, index) => (
                        <SelectedCircle key={index} selected={index === Math.floor(position)} onClick={() => {
                            windowRef.current.scrollTo(windowRef.current.offsetWidth * index, 0)
                        }}/>
                    ))}
                </SelectedImageCircleHolder>
            </ButtonPositionHolder>
        </SliderContainerRoot>
    )
})

export default ProjectsGallery;
