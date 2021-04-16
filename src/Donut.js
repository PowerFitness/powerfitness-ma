import React, { useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { useColorIndication } from './useColorIndication';
import * as goalSelectors from './selectors/goalSelectors';
import { useSelector } from 'react-redux';
import { GOAL_NAMES } from './constants/goalNames';
import * as resultSelectors from './selectors/resultSelectors';
import * as dateSelector from './selectors/dateSelector';

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
    const selectDate = useSelector(dateSelector.selectedDate);
    const goalCalorie = useSelector(goalSelectors.goalValue(GOAL_NAMES.dailyCalories));
    const goalWater = useSelector(goalSelectors.goalValue(GOAL_NAMES.dailyWater));
    const goalDailyExercise = useSelector(goalSelectors.goalValue(GOAL_NAMES.dailyExercise));
    const resultNutrition = useSelector(resultSelectors.nutritionResultSum(selectDate));
    const resultWater = useSelector(resultSelectors.waterResultSum(selectDate));
    const resultExercise = useSelector(resultSelectors.exerciseResultSum(selectDate));
    return (
        <FlexDiv padding="5rem 1rem 0 1rem" justifyContent="center" display="flex">
            <ProgressArc
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                progressPercentage={(resultNutrition/goalCalorie)*100}
                colorIndicator={calorieColor}
                name="Calories"
                goal={goalCalorie}
                result={resultNutrition}
                unit="cal"
            />
            <ProgressArc
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                progressPercentage={(resultExercise/goalDailyExercise)*100}
                colorIndicator={exerciseColor}
                name="Exercise"
                goal={goalDailyExercise}
                result={resultExercise}
                unit="min"
            />
            <ProgressArc
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                progressPercentage={(resultWater/goalWater)*100}
                colorIndicator={waterColor}
                name="Water"
                goal={goalWater}
                result={resultWater}
                unit="oz"
            />
        </FlexDiv>
    );
}


