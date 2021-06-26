import styled from "styled-components";
import React from "react";

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
width: 100%;
height: 100%;
`

const BarProgressAnimator = styled.div`
animation: myAnimation 2s;
@keyframes myAnimation{
0% {width: 0; background-color: black}
100% {width: ${props => props.percentage + "%"}}
}
position: relative;
border-radius: 50px;
width: ${props => props.percentage};
height: 100%;
background-color: ${props => props.color};
transition: 0.5s;
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
    return (
        <MainHolder>
            <BarTitle>
                {props.title}
            </BarTitle>
            <Bar>
                <BarBackground color={(props.secondaryColor)}>
                    <BarProgressAnimator color={(props.primaryColor)} percentage={props.percentage + "%"}>
                        <PercentageContainer>
                            {/* {props.percentage}% */}
                        </PercentageContainer>
                    </BarProgressAnimator>
                </BarBackground>
            </Bar>
        </MainHolder>
    )
}

export default SkillsBar;