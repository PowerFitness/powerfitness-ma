import React from 'react';
import Exercise from './Exercise';
import Water from './Water';
import Nutrition from './Nutrition';
import { DatePicker } from './toolkit/DatePicker'
import styled from 'styled-components'
import { PrimaryButton, SubHeader } from './toolkit';

const Activities = styled.div`
    margin: 0 55px 0 55px;
    @media (max-width: 768px) {
        margin: 0 30px 0 30px;
    }
`

const handleOnSave = () => {
    console.log('save button clicked')
}

export const JournalPage = () => {
    return(
        <React.Fragment>
            <SubHeader>
                <PrimaryButton onClick={handleOnSave}>Complete</PrimaryButton>
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
