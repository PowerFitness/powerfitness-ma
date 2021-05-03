/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const MaxTableData = styled(TableData)`
    width: 450px;
    max-width: 450px;
`;

export const Exercise = ({ listOfExercises, setListOfExercises }) => {
    const handleOnExerciseNameChange = (index) => event => {
        let newExercisesArray = [ ...listOfExercises ];

        newExercisesArray[index].name = event.target.value;
        setListOfExercises(newExercisesArray);
    }

    const handleOnExerciseTimeChange = (index) => event => {
        let newExercisesArray = [ ...listOfExercises ];
        newExercisesArray[index].value = event.target.value;

        setListOfExercises(newExercisesArray);
    }

    const handleAddExercise = () => {
        const newExercise =  { type: 'exercise', subtype: 'exercise', unit: 'minutes', name: '', value: '' } ;
        setListOfExercises([ ...listOfExercises, newExercise ])
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
                        {listOfExercises?.map((exercise, index)=> {
                            return (
                                <tr key={index}>
                                    <MaxTableData>
                                        <TableInput value={exercise.name} onChange={handleOnExerciseNameChange(index)}/>
                                    </MaxTableData>
                                    <MaxTableData>
                                        <TableInput value={exercise.value} onChange={handleOnExerciseTimeChange(index)}/>
                                    </MaxTableData>
                                    <TableData>
                                        <TableUnit>minutes</TableUnit>
                                    </TableData>
                                </tr>
                            )
                        })}
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
