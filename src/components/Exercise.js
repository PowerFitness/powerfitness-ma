/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
    ScrollableContainer,
    TableData,
    Table,
    TableHeaderRow,
    TableHeader,
    TableInput,
    TableUnit
} from './toolkit/TableComponents';
import * as dateSelector from '../selectors/dateSelector';
import * as resultSelector from '../selectors/resultSelectors'

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

const AddButton = styled.button `
    color: #0081AF;
    font-weight: 300;
    line-height: 18px;
    background-color: white;
    border: none;
    margin: 4px 0 33px 14px;
    cursor: pointer;
`

export const Exercise = ({ listOfExercises, setListOfExercises }) => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const exercises = useSelector(resultSelector.getExercises(selectDate));

    const handleOnExerciseNameChange = (index) => event => {
        console.log('handleOnExerciseNameChange')
        let newExercisesArray = [ ...listOfExercises ];
        newExercisesArray[index].name = event.target.value;

        setListOfExercises(newExercisesArray);
    }

    const handleOnExerciseTimeChange = (index) => event => {
        console.log('handleOnExerciseTimeChange')
        let newExercisesArray = [ ...listOfExercises ];
        newExercisesArray[index].value = event.target.value;

        setListOfExercises(newExercisesArray);
    }

    const handleAddExercise = () => {
        console.log('got')
    }

    return(
        <>
            <ExerciseHeader>Exercise</ExerciseHeader>
            <HorizontalLine/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <TableHeader>Exercise Name</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Unit</TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {exercises?.length > 0 ?
                            exercises?.map((exercise, index)=> {
                                return (
                                    <tr key={index}>
                                        <TableData>
                                            <TableInput value={exercise.name} onChange={handleOnExerciseNameChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableInput value={exercise.value} onChange={handleOnExerciseTimeChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableUnit>minutes</TableUnit>
                                        </TableData>
                                    </tr>
                                )
                            }) :
                            <tr>
                                <TableData><TableInput onChange={handleOnExerciseNameChange()}/></TableData>
                                <TableData><TableInput onChange={handleOnExerciseTimeChange()}/></TableData>
                                <TableData><TableUnit>minutes</TableUnit></TableData>
                            </tr>
                        }
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton onClick={handleAddExercise}>+ Add another exercise</AddButton>
            <br/>
        </>

    )
}

Exercise.propTypes = {
    listOfExercises: PropTypes.array,
    setListOfExercises: PropTypes.func
};

export default Exercise;
