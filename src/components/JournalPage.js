import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import Exercise from './Exercise';
import Water from './Water';
import Nutrition from './Nutrition';
import { DatePicker } from './toolkit/DatePicker'
import { PrimaryButton, SubHeader } from './toolkit';
import * as dateSelector from '../selectors/dateSelector';
import * as userSelector from '../selectors/userSelectors';
import * as resultSelector from '../selectors/resultSelectors'
import * as saveResultsAction from '../actions/saveResultsAction';

const Activities = styled.div`
    margin: 0 55px 0 55px;
    @media (max-width: 768px) {
        margin: 0 30px 0 30px;
    }
`

export const JournalPage = ({ saveResults }) => {
    const history = useHistory();
    const selectedDate = useSelector(dateSelector.selectedDate);
    const userId = useSelector(userSelector.userUniqueId)
    const isFetchComplete = useSelector(resultSelector.resultsFetchComplete(selectedDate, userId))

    // exercise component
    const exercises = useSelector(resultSelector.getExercises(selectedDate));
    const [ listOfExercises, setListOfExercises ] = useState(exercises)

    // water component
    const waterQuantities = useSelector(resultSelector.getWaterQuantities(selectedDate));
    const [ listOfWaterQuantities, setListOfWaterQuantities ] = useState(waterQuantities);

    // nutrition component
    const breakfastItems = useSelector(resultSelector.getBreakfastItems(selectedDate)) || [];
    const lunchItems = useSelector(resultSelector.getLunchItems(selectedDate));
    const dinnerItems = useSelector(resultSelector.getDinnerItems(selectedDate));
    const [ listOfBreakfastItems, setListOfBreakfastItems ] = useState(breakfastItems)
    const [ listOfLunchItems, setListOfLunchItems ] = useState(lunchItems)
    const [ listOfDinnerItems, setListOfDinnerItems ] = useState(dinnerItems)

    useEffect(() => {
        setListOfExercises(exercises)
        setListOfWaterQuantities(waterQuantities)
        setListOfBreakfastItems(breakfastItems)
        setListOfLunchItems(lunchItems)
        setListOfDinnerItems(dinnerItems)
    }, [ isFetchComplete, selectedDate ])

    const handleOnSave = async () => {
        await saveResults(
            selectedDate,
            listOfExercises,
            listOfWaterQuantities,
            listOfBreakfastItems,
            listOfLunchItems,
            listOfDinnerItems
        );
    }

    const handleOnComplete = async () => {
        await handleOnSave();
        history.push('/dashboard');
    }

    return (
        <React.Fragment>
            {isFetchComplete ?
                <React.Fragment>
                    <SubHeader>
                        <PrimaryButton onClick={handleOnComplete}>Complete</PrimaryButton>
                    </SubHeader>
                    <DatePicker onNext={handleOnSave} onPrev={handleOnSave}/>
                    <Activities>
                        <Exercise listOfExercises={listOfExercises} setListOfExercises={setListOfExercises}/>
                        <Water listOfWaterQuantities={listOfWaterQuantities} setListOfWaterQuantities={setListOfWaterQuantities}/>
                        <Nutrition
                            listOfBreakfastItems={listOfBreakfastItems}
                            setListOfBreakfastItems={setListOfBreakfastItems}
                            listOfLunchItems={listOfLunchItems}
                            setListOfLunchItems={setListOfLunchItems}
                            listOfDinnerItems={listOfDinnerItems}
                            setListOfDinnerItems={setListOfDinnerItems}
                        />
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

JournalPage.propTypes = {
    saveResults: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    saveResults: ( selectedDate, exerciseResults, waterResults, breakfastResults, lunchResults, dinnerResults) =>
        dispatch(saveResultsAction.saveResults(
            selectedDate,
            exerciseResults,
            waterResults,
            breakfastResults,
            lunchResults,
            dinnerResults
        )
        )
});

export default connect(null, mapDispatchToProps)(JournalPage);
