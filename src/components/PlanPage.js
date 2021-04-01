import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Text, HeaderText, SubHeader, PrimaryButton, Input } from './toolkit';
import PropTypes from 'prop-types';
import * as planSelectors from '../selectors/planSelectors';
import * as setPlanAction from '../actions/setPlanAction';

const Motivation = styled.div`
padding: 30px 0 0 75px;
`
const Exercise = styled.div`
padding: 30px 0 0 74px;
`
const WeeklyExercise = styled.div`
padding: 13px 0 13px 0;
height:76px;
width: 285px;
`
const ExerciseMinutes = styled.div`
padding: 13px 0;
`
const WaterIntake = styled.div`
padding: 30px 0 0 74px;
`
const Nutrition = styled.div`
padding: 30px 0 130px 74px;
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
text-align: left;
`
const InputBox = styled(Input)`
display: inline; 
height: 47px; 
width: 80px;
`
export const PlanPage = ({
    mStatement, exDay, exMin, waterIn, calorieIn, isNewUser
}) =>{
    const [ motivStat, setMotivStatement ]= useState(mStatement);
    const [ exerciseDay, setExerciseDays ]= useState(exDay);
    const [ exerciseMin, setExerciseMins ]= useState(exMin);
    const [ water, setWaterIntake ]= useState(waterIn);
    const [ calorie, setCalorieIntake ]= useState(calorieIn);
    const history = useHistory();

    const handleSavePlan = () =>{
        savePlan(motivStat);
        history.push('/plan');
    };

    const handleMotivStatement = (e) =>{
        setMotivStatement(e.target.value);
    };

    const handleExerciseDay = (e) =>{
        setExerciseDays(e.target.value);
    };

    const handleExerciseMin = (e) =>{
        setExerciseMins(e.target.value);
    };

    const handleWaterIntake = (e) =>{
        setWaterIntake(e.target.value);
    };

    const handleCalorieIntake = (e) =>{
        setCalorieIntake(e.target.value);
    };
    const noedit = !(motivStat || exerciseDay || exerciseMin || water || calorie)
    return(
        <>
            <SubHeader>
                <PrimaryButton save disabled={isNewUser && noedit} onClick={handleSavePlan}>Save</PrimaryButton>
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
                    <InputBox value={exerciseDay} onChange={handleExerciseDay}/>
                    <TextSide>days per week</TextSide>
                </WeeklyExercise>
                <ExerciseMinutes>
                    <Text margin="0 0 11px 0">How many minutes of exercise per day?</Text>
                    <InputBox value={exerciseMin} onChange={handleExerciseMin}/>
                    <TextSide>minutes</TextSide>
                </ExerciseMinutes>
            </Exercise>

            <WaterIntake>
                <HeaderText>Water Intake</HeaderText>
                <Text margin="13px 0 11px 0">How much water do you plan to drink per day?</Text>
                <InputBox value={water} onChange={handleWaterIntake}/>
                <TextSide>ounces</TextSide>
            </WaterIntake>

            <Nutrition>
                <HeaderText>Nutrition</HeaderText>
                <Text margin="13px 0 11px 0">Set your daily caloric intake.</Text>
                <InputBox value={calorie} onChange={handleCalorieIntake}/>
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

const mapDispatchToProps = (dispatch) => ({
    savePlan: (motivStat) => dispatch(
        setPlanAction.savePlan(motivStat)
    )
});

const mapStateToProps = (state) => {
    return {
        mStatement: planSelectors.getMotivation(state),
        exDay: planSelectors.goalWeeklyExercise(state),
        exMin: planSelectors.goalDailyExercise(state),
        waterIn: planSelectors.goalDailyWater(state),
        calorieIn: planSelectors.goalDailyCalories(state),
        isNewUser: planSelectors.isNewUser(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanPage);
