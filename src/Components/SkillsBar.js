import styled from "styled-components";
import React, {useState} from "react";

import VisibilitySensor from "react-visibility-sensor";

const MainHolder = styled.div`
margin: 15px;
`

const Bar = styled.div`
display: flex;
margin: 10px;
height: 30px;
`

const BarTitle = styled.div`
font-size: 20px;
color: white;
`

const BarBackground = styled.div`
border-radius: 50px;
background-color: ${props => props.color};
background-color: ${props => props.color ? props.color : 'black'};
width: 100%;
height: 100%;
`

const BarProgressAnimator = styled.div`
transition: width 2s ease-in-out, transform 0.3s ease-in-out, background-color 2s ease-in-out, box-shadow 0.3s ease-in-out;
position: relative;
border-radius: 50px;
width: ${props => props.animate ? props.percentage : 0};
height: 100%;
background-color: ${props => props.animate ? (props.color ? props.color : 'lime') : 'black'};
&:hover{
transform: scale(1.1 , 1.1);
box-shadow: #290c67 15px 15px 20px
}
`

const PercentageContainer = styled.div`
position: absolute;
right: 0;
top: -30px;
color: white;
float: right;
align-content: center;
padding-right: 10px;

display: ${props => props.display ? 'block' : 'none'};

animation: percentageVisibility 2s;
@keyframes percentageVisibility{
0% {
opacity: 0;
}
100% {
opacity: 100%;
}
}
`

const SkillsBar = (props) => {
    const [animate, setAnimate] = useState(false);

    function onChange(isVisible) {
        if (!animate && isVisible) setAnimate(true);
    }

    return (
        <VisibilitySensor onChange={onChange}>
            <MainHolder>
                <BarTitle>
                    {props.title}
                </BarTitle>
                <Bar>
                    <BarBackground color={(props.secondaryColor)}>
                        <BarProgressAnimator color={(props.primaryColor)} percentage={props.percentage + "%"}
                                             animate={animate}>
                            <PercentageContainer display={props.displayPercentage}>
                                {props.percentage}%
                            </PercentageContainer>
                        </BarProgressAnimator>
                    </BarBackground>
                </Bar>
            </MainHolder>
        </VisibilitySensor>
    )
}

export default SkillsBar;