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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';

const ExerciseHeader = styled.div`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`
const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #C879FF;
    border: none;
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

const MaxTableHeader = styled(TableHeader)`
    width: 450px;
    max-width: 450px;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
    color: #BDBDBD;
    cursor: pointer;
    margin: 0 20px;
`;

export const Exercise = ({ listOfExercises, setListOfExercises }) => {
    const handleOnExerciseNameChange = (index) => event => {
        let newExercisesArray = [ ...listOfExercises ];

        newExercisesArray[index].name = event.target.value;
        setListOfExercises(newExercisesArray);
    }

    const handleOnExerciseTimeChange = (index) => event => {
        const { value } = event.target;

        if (!isNaN(Number(value))) {
            let newExercisesArray = [ ...listOfExercises ];
            newExercisesArray[index].value = value;

            setListOfExercises(newExercisesArray);
        }
    }

    const handleAddExercise = () => {
        const newExercise =  { type: 'exercise', subtype: 'exercise', unit: 'minutes', name: '', value: '' } ;
        setListOfExercises([ ...listOfExercises, newExercise ])
    }

    const handleExerciseDelete = (index) => () => {
        setListOfExercises(listOfExercises.filter((_, i) => i !== index));
    }

    return(
        <>
            <ExerciseHeader>Exercise</ExerciseHeader>
            <HorizontalLine/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <MaxTableHeader>Exercise Name</MaxTableHeader>
                            <MaxTableHeader>Duration</MaxTableHeader>
                            <TableHeader>Unit</TableHeader>
                            <TableHeader></TableHeader>
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
                                    <TableData textAlign="right">
                                        <DeleteIcon onClick={handleExerciseDelete(index)} icon={faMinusSquare}/>
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
