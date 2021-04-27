/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';
import { ScrollableContainer, Table, TableHeaderRow, TableHeader, TableInput, TableUnit } from './toolkit/TableComponents';

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
                                        <td><TableInput value={exercise.name}/></td>
                                        <td><TableInput value={exercise.value}/></td>
                                        <td><TableUnit>minutes</TableUnit></td>
                                        <hr/>
                                    </tr>)
                            }) :
                            <tr>
                                <td><TableInput /></td>
                                <td><TableInput/></td>
                                <td><TableUnit>minutes</TableUnit></td>
                                <hr/>
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
