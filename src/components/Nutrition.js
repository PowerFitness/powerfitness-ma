/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';
import {
    ScrollableContainer,
    TableData,
    Table,
    TableHeaderRow,
    TableHeader,
    TableInput,
    TableUnit
} from './toolkit/TableComponents';

const NutritionHeader = styled.th`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`

const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #EF798A;
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

export const Nutrition = ({
    listOfBreakfastItems,
    setListOfBreakfastItems,
    listOfLunchItems,
    setListOfLunchItems,
    listOfDinnerItems,
    setListOfDinnerItems
}) => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const breakfastItems = useSelector(resultSelectors.getBreakfastItems(selectDate)) || [];
    const lunchItems = useSelector(resultSelectors.getLunchItems(selectDate));
    const dinnerItems = useSelector(resultSelectors.getDinnerItems(selectDate));

    const handleBreakfastChange = (index) => event => {
        console.log('handleBreakfastChange')
        let newBreakfastArray = [ ...listOfBreakfastItems ];
        newBreakfastArray[index].name = event.target.value;

        setListOfBreakfastItems(newBreakfastArray);
    }

    const handleBreakfastCalorieChange = (index) => event => {
        let newBreakfastArray = [ ...listOfBreakfastItems ];
        newBreakfastArray[index].value = event.target.value;

        setListOfBreakfastItems(newBreakfastArray);
    }

    const handleLunchChange = (index) => event => {
        console.log('handleLunchChange')
        let newLunchArray = [ ...listOfLunchItems ];
        newLunchArray[index].name = event.target.value;

        setListOfLunchItems(newLunchArray);
    }

    const handleLunchCalorieChange = (index) => event => {
        let newLunchArray = [ ...listOfLunchItems ];
        newLunchArray[index].value = event.target.value;

        setListOfLunchItems(newLunchArray);
    }

    const handleDinnerChange = (index) => event => {
        let newDinenrArray = [ ...listOfDinnerItems ];
        newDinenrArray[index].name = event.target.value;

        setListOfDinnerItems(newDinenrArray);
    }

    const handleDinnerCalorieChange = (index) => event => {
        let newDinenrArray = [ ...listOfDinnerItems ];
        newDinenrArray[index].value = event.target.value;

        setListOfDinnerItems(newDinenrArray);
    }


    return (
        <>
            <NutritionHeader>Nutrition</NutritionHeader>
            <HorizontalLine/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <TableHeader>Breakfast</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Unit</TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {breakfastItems?.length > 0 ?
                            breakfastItems?.map((breakfastItem, index)=> {
                                return (
                                    <tr key={index}>
                                        <TableData>
                                            <TableInput value={breakfastItem.name} onChange={handleBreakfastChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableInput
                                                value={breakfastItem.value}
                                                onChange={handleBreakfastCalorieChange(index)}
                                            />
                                        </TableData>
                                        <TableData><TableUnit>calories</TableUnit></TableData>
                                    </tr>)
                            }) :
                            <tr>
                                <TableData><TableInput /></TableData>
                                <TableData><TableInput/></TableData>
                                <TableData><TableUnit>calories</TableUnit></TableData>
                            </tr>}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton>+ Add another breakfast item</AddButton>
            <br/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <TableHeader>Lunch</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Unit</TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {lunchItems?.length > 0 ?
                            lunchItems?.map((lunchItem, index)=> {
                                return (
                                    <tr key={index}>
                                        <TableData>
                                            <TableInput value={lunchItem.name} onChange={handleLunchChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableInput value={lunchItem.value} onChange={handleLunchCalorieChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableUnit>calories</TableUnit>
                                        </TableData>
                                    </tr>)
                            }) :
                            <tr>
                                <TableData><TableInput /></TableData>
                                <TableData><TableInput/></TableData>
                                <TableData><TableUnit>calories</TableUnit></TableData>
                            </tr>}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton>+ Add another lunch item</AddButton>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <TableHeader>Dinner</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Unit</TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {dinnerItems?.length > 0 ?
                            dinnerItems?.map((dinnerItem, index)=> {
                                return (
                                    <tr key={index}>
                                        <TableData>
                                            <TableInput value={dinnerItem.name} onChange={handleDinnerChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableInput value={dinnerItem.value} onChange={handleDinnerCalorieChange(index)}/>
                                        </TableData>
                                        <TableData>
                                            <TableUnit>calories</TableUnit>
                                        </TableData>
                                    </tr>
                                )
                            }) :
                            <tr>
                                <TableData><TableInput /></TableData>
                                <TableData><TableInput/></TableData>
                                <TableData><TableUnit>calories</TableUnit></TableData>
                            </tr>}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton>+ Add another dinner item</AddButton>
        </>
    )
}

Nutrition.propTypes = {
    listOfBreakfastItems: PropTypes.array,
    setListOfBreakfastItems: PropTypes.func,
    listOfLunchItems: PropTypes.array,
    setListOfLunchItems: PropTypes.func,
    listOfDinnerItems: PropTypes.array,
    setListOfDinnerItems: PropTypes.func,
};

export default Nutrition;
