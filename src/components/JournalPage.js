import React from 'react';
import Exercise from './Exercise';
import Water from './Water';
import Nutrition from './Nutrition';
import JournalSubHeader from './JournalSubHeader'
import { DatePicker } from './toolkit/DatePicker'
import styled from 'styled-components'

const Activities = styled.div`
    margin: 0 55px 0 72px;
`

export const JournalPage = () => {
    return(
        <React.Fragment>
            <JournalSubHeader/>
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
