import React from 'react';
import { css } from '@emotion/core';
import { useSelector } from 'react-redux'
import PulseLoader from 'react-spinners/PulseLoader';

import Exercise from './Exercise';
import Water from './Water';
import Nutrition from './Nutrition';
import { DatePicker } from './toolkit/DatePicker'
import styled from 'styled-components'
import { PrimaryButton, SubHeader } from './toolkit';
import * as dateSelector from '../selectors/dateSelector';
import * as userSelector from '../selectors/userSelectors';
import * as resultSelector from '../selectors/resultSelectors'

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
    const selectedDate = useSelector(dateSelector.selectedDate);
    const userId = useSelector(userSelector.userUniqueId)
    const isFetchComplete = useSelector(resultSelector.resultsFetchComplete(selectedDate, userId))

    return (
        <React.Fragment>
            {isFetchComplete ?
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
                : <React.Fragment>
                    <PulseLoader
                        loading={true}
                        color="#0081AF"
                        css={css`display: flex;
                            align-items: center;
                            justify-content: center;
                            height: calc(100vh - 54px)`}
                    />

                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default JournalPage;
