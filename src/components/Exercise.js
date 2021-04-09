import React from 'react'
import styled from 'styled-components'

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

const ExerciseSpan = styled.span`
    padding-right: 374px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin: 19px 0 0 2px;
`

const ExerciseTimeSpan = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
`

const ExerciseInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 376px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    margin: 0 75px 0 2px;
`

const ExerciseTimeInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 376px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
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

export const Exercise = () => {
    return(
        <React.Fragment>
            <ExerciseContainer>
                <ExerciseHeader>Exercise</ExerciseHeader>
                <HorizontalLine/>
                <ExerciseSpan>Exercise</ExerciseSpan>
                <ExerciseTimeSpan>Exercise Time</ExerciseTimeSpan>
                <hr/>
                <ExerciseInput/>
                <ExerciseTimeInput/>
                <hr/>
                <AddExerciseButton>+ Add another exercise</AddExerciseButton>
            </ExerciseContainer>
        </React.Fragment>
    )
}

export default Exercise;
