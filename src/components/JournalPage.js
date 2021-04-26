import React from 'react';
import { css } from '@emotion/core';
import { useSelector } from 'react-redux'
import PulseLoader from 'react-spinners/PulseLoader';

import Exercise from './Exercise';
import Water from './Water';
import Nutrition from './Nutrition';
import { DatePicker } from './toolkit/DatePicker'
import styled from 'styled-components'
import { SubHeader } from './toolkit';
import * as dateSelector from '../selectors/dateSelector';
import * as userSelector from '../selectors/userSelectors';
import * as resultSelector from '../selectors/resultSelectors'

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
    const selectedDate = useSelector(dateSelector.selectedDate);
    const userId = useSelector(userSelector.userUniqueId)
    const isFetchComplete = useSelector(resultSelector.resultsFetchComplete(selectedDate, userId))

    return (
        <React.Fragment>
            {isFetchComplete ?
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
