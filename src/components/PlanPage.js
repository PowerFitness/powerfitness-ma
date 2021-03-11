import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, HeaderText, SubHeader, PrimaryButton, Input, Modal } from './toolkit';
import PropTypes from 'prop-types';

const Motivation = styled.div`
padding: 30px 64px 0 75px;
`
const Exercise = styled.div`
padding: 30px 881px 0 74px;
`
const WeeklyExercise = styled.div`
padding: 13px 45px 13px 0;
height:76px;
width: 285px;
`
const ExerciseMinutes = styled.div`
padding: 13px 0;
`
const WaterIntake = styled.div`
padding: 30px 830px 0 74px;
`
const Nutrition = styled.div`
padding: 30px 980px 130px 74px;
`
const TextSide = styled(Text)`
display: inline;
padding: 0 0 0 26px;
`
const TextArea = styled.textarea`
box-sizing: border-box; 
height: 100px; 
width: 1150px; 
border-radius: 8px; 
border: 1px solid #BDBDBD;
color: #000;
font-family: Helvetica;
font-size: 18px;
font-weight: 300;
line-height: 18px;
text-align: center;
`
const InputBox = styled(Input)`
display: inline; 
height: 47px; 
width: 80px;
`

export const PlanPage = ({
    mStatement
}) =>{
    const [ motivStat, setMotivStatement ]= useState(mStatement);


    const handleMotivStatement = (e) =>{
        setMotivStatement(e.target.value);
    };

    return(
        <>
            <SubHeader>
                <PrimaryButton save >Save</PrimaryButton>
            </SubHeader>
            <Motivation>
                <HeaderText>Motivation Statement</HeaderText>
                <Text margin="11px 0 11px 0">Describe your motivation for achieving your fitness goals.</Text>
                <TextArea height="100px" width="100%" type="Text" value={motivStat} onChange={handleMotivStatement}/>
            </Motivation>

            <Exercise>
                <HeaderText>Exercise</HeaderText>
                <WeeklyExercise>
                    <Text margin="13px 0 11px 0">What is your weekly exercise goal?</Text>
                    <InputBox />
                    <TextSide>days per week</TextSide>
                </WeeklyExercise>
                <ExerciseMinutes>
                    <Text margin="0 0 11px 0">How many minutes of exercise per day?</Text>
                    <InputBox />
                    <TextSide>minutes</TextSide>
                </ExerciseMinutes>
            </Exercise>

            <WaterIntake>
                <HeaderText>Water Intake</HeaderText>
                <Text margin="13px 0 11px 0">How much water do you plan to drink per day?</Text>
                <InputBox/>
                <TextSide>ounces</TextSide>
            </WaterIntake>

            <Nutrition>
                <HeaderText>Nutrition</HeaderText>
                <Text margin="13px 0 11px 0">Set your daily caloric intake.</Text>
                <InputBox/>
                <TextSide>calories</TextSide>
            </Nutrition>
        </>
    );
};

PlanPage.propTypes = {
    planId: PropTypes.string,
    mStatement: PropTypes.string,
    //savePlan: PropTypes.func
};


export default PlanPage;
