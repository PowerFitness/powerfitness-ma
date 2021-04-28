/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';
import {
    ScrollableContainer,
    TableData,
    Table,
    TableHeaderRow,
    TableHeader,
    TableInput,
    TableUnit
} from './toolkit/TableComponents';

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
                                            <TableInput value={exercise.name} onChange={handleOnExerciseNameChage(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableInput value={exercise.value} onChange={handleOnExerciseTimeChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableUnit>minutes</TableUnit>
                                        </TableData>
                                        <hr/>
                                    </tr>)
                            }) :
                            <tr>
                                <TableData><TableInput /></TableData>
                                <TableData><TableInput/></TableData>
                                <TableData><TableUnit>minutes</TableUnit></TableData>
                            </tr>}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton>+ Add another exercise</AddButton>
            <br/>
        </>

    )
}

export default Exercise;
