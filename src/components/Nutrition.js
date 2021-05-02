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
    const handleBreakfastChange = (index) => event => {
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

    const handleBreakfastAdd = () => {
        const breakfastObject = { type: 'nutrition', subtype: 'breakfast', unit: 'calories', name: '', value: '' };
        setListOfBreakfastItems([ ...listOfBreakfastItems, breakfastObject ])
    }

    const handleLunchAdd = () => {
        const lunchObject =  { type: 'nutrition', subtype: 'lunch', unit: 'calories', name: '', value: '' } ;
        setListOfLunchItems([ ...listOfLunchItems, lunchObject ])
    }

    const handleDinnerAdd = () => {
        const dinnerObject = { type: 'nutrition', subtype: 'dinner', unit: 'calories', name: '', value: '' } ;
        setListOfDinnerItems([ ...listOfDinnerItems, dinnerObject ])
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
                        {listOfBreakfastItems?.map((breakfastItem, index)=> {
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
                        }) }
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton onClick={handleBreakfastAdd}>+ Add another breakfast item</AddButton>
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
                        { listOfLunchItems?.map((lunchItem, index)=> {
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
                        }) }
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton onClick={handleLunchAdd}>+ Add another lunch item</AddButton>
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
                        { listOfDinnerItems?.map((dinnerItem, index)=> {
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
                        })
                        }
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton onClick={handleDinnerAdd}>+ Add another dinner item</AddButton>
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
