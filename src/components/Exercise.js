/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';


const ExerciseContainer= styled.div`
    margin: 21px 0 43px 0;
`

const ExerciseHeader = styled.div`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`
const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #C879FF;
`

const ExerciseName = styled.span`
    padding-right: 325px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin: 19px 0 0 2px;
`

const ExerciseAmount = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    padding-right: 374px;
`

const ExerciseInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 376px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    margin: 0 75px 0 2px;
    font-size: 18px;
`

const ExerciseTimeInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 376px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    font-size: 18px;
`

const AddExerciseButton = styled.button `
    color: #0081AF;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    background-color: white;
    border: none;
    margin: 4px 0 0 14px;
`

const ExerciseUnit = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
`

const ExerciseMinutes = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    margin-left: 67px;
`

export const Exercise = () => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const exercises = useSelector(resultSelectors.getExercises(selectDate));
    const [ listOfExercises, setListOfExercises ] = useState(exercises)

    const handleOnExerciseNameChage = (index) => event => {
        let newExercisesArray = [ ...listOfExercises ];
        newExercisesArray[index].name = event.target.value;

        setListOfExercises(newExercisesArray);
    }

    const handleOnExerciseTimeChange = (index) => event => {
        let newExercisesArray = [ ...listOfExercises ];
        newExercisesArray[index].value = event.target.value;

        setListOfExercises(newExercisesArray);
    }

    return(
        <React.Fragment>
            <ExerciseContainer>
                <ExerciseHeader>Exercise</ExerciseHeader>
                <HorizontalLine/>
                <ExerciseName>Exercise Name</ExerciseName>
                <ExerciseAmount>Amount</ExerciseAmount>
                <ExerciseUnit>Unit</ExerciseUnit>
                <hr/>
                {exercises?.length > 0 ?
                    exercises?.map((exercise, index) => {
                        return (
                            <React.Fragment key={index}>
                                <ExerciseInput value={exercise.name} onChange={handleOnExerciseNameChage(index)}/>
                                <ExerciseTimeInput value={exercise.value} onChange={handleOnExerciseTimeChange(index)}/>
                                <ExerciseMinutes>minutes</ExerciseMinutes>
                                <hr/>
                            </React.Fragment>
                        )
                    })
                    :
                    <React.Fragment><ExerciseInput/>
                        <ExerciseTimeInput/>
                        <ExerciseMinutes>minutes</ExerciseMinutes>
                        <hr/>
                    </React.Fragment>
                }
                <AddExerciseButton>+ Add another exercise</AddExerciseButton>
            </ExerciseContainer>
        </React.Fragment>
    )
}

export default Exercise;
