import React, { useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { useColorIndication } from './useColorIndication';

const ProgressArc = (props) => {
    const { svgWidth, arcWidth, progressPercentage, colorIndicator, name, unit, goal, result } = props;
    const svgHeight = svgWidth;
    const arcOuterRadius = svgWidth / 2;
    const arcInnerRadius = svgWidth / 2 - arcWidth;
    const arcGenerator = d3
        .arc()
        .innerRadius(arcInnerRadius)
        .outerRadius(arcOuterRadius)
        .startAngle(0)
    const progressArc = value =>
        arcGenerator({
            endAngle: 2 * Math.PI * value
        });

    return (
        <div>
            <svg height={svgHeight} width={svgWidth}>
                <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path d={progressArc(1)} opacity="0.2" fill="gray" />
                </g>
                <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path
                        d={progressArc(progressPercentage / 100)}
                        fill={colorIndicator}
                    />
                </g>
                <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <text textAnchor="middle" fontWeight="bold">
                        {name}
                    </text>
                    <text textAnchor="middle" y="20">
                        {result} / {goal} {unit}
                    </text>
                </g>
            </svg>
        </div>
    );
}
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

export function ProgressCircleWrapper() {
    const svgWidth = 150;
    const arcWidth = 6;
    // eslint-disable-next-line no-unused-vars
    const [ progressPercentage, setProgressPercentage ] = useState(50);
    const exerciseColor = useColorIndication(progressPercentage, '#C879FF');
    const waterColor = useColorIndication(progressPercentage, '#00ABE7');
    const calorieColor = useColorIndication(progressPercentage, '#EF798A');

    return (
        <FlexDiv padding="5rem 1rem 0 1rem" justifyContent="center" display="flex">
            <ProgressArc
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                progressPercentage={progressPercentage}
                colorIndicator={calorieColor}
                name="Calories"
                goal="2000"
                result="1500"
                unit="cal"
            />
            <ProgressArc
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                progressPercentage={progressPercentage}
                colorIndicator={exerciseColor}
                name="Exercise"
                goal="45"
                result="30"
                unit="min"
            />
            <ProgressArc
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                progressPercentage={progressPercentage}
                colorIndicator={waterColor}
                name="Water"
                goal="80"
                result="70"
                unit="oz"
            />
        </FlexDiv>
    );
}


