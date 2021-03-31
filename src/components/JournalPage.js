import React from 'react';
import Exercise from './Exercise';
import Water from './Water';
import Nutrition from './Nutrition';
import { DatePicker } from './toolkit/DatePicker'
import styled from 'styled-components'
import { SubHeader } from './toolkit';

const Activities = styled.div`
    margin: 0 55px 0 72px;
`

const Save = styled.button`
    position: relative;
    background-color: #0081AF;
    border-radius: 8px;
    font-family: Helvetica;
    color: #FFF;
    font-size: 22px;
    text-align: center;
    height: 37px;
    width: 200px;
`

const handleOnSave = () => {
    console.log('save button clicked')
}

export const JournalPage = () => {
    return(
        <React.Fragment>
            <SubHeader>
                <Save onClick={handleOnSave}>Save</Save>
            </SubHeader>
            <DatePicker/>
            <Activities>
                <Exercise/>
                <Water/>
                <Nutrition/>
            </Activities>
        </React.Fragment>
    )
}

export default JournalPage;
