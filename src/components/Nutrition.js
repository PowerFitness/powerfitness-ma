/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';
import { ScrollableContainer, Table, TableHeaderRow, TableHeader, TableInput, TableUnit } from './toolkit/TableComponents';

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

export const Nutrition = () => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const breakfastItems = useSelector(resultSelectors.getBreakfastItems(selectDate)) || [];
    const lunchItems = useSelector(resultSelectors.getLunchItems(selectDate));
    const dinnerItems = useSelector(resultSelectors.getDinnerItems(selectDate));

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
                                        <td><TableInput value={breakfastItem.name}/></td>
                                        <td><TableInput value={breakfastItem.value}/></td>
                                        <td><TableUnit>calories</TableUnit></td>
                                        <hr/>
                                    </tr>)
                            }) :
                            <tr>
                                <td><TableInput /></td>
                                <td><TableInput/></td>
                                <td><TableUnit>calories</TableUnit></td>
                                <hr/>
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
                                        <td><TableInput value={lunchItem.name}/></td>
                                        <td><TableInput value={lunchItem.value}/></td>
                                        <td><TableUnit>calories</TableUnit></td>
                                        <hr/>
                                    </tr>)
                            }) :
                            <tr>
                                <td><TableInput /></td>
                                <td><TableInput/></td>
                                <td><TableUnit>calories</TableUnit></td>
                                <hr/>
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
                                        <td><TableInput value={dinnerItem.name}/></td>
                                        <td><TableInput value={dinnerItem.value}/></td>
                                        <td><TableUnit>calories</TableUnit></td>
                                        <hr/>
                                    </tr>)
                            }) :
                            <tr>
                                <td><TableInput /></td>
                                <td><TableInput/></td>
                                <td><TableUnit>calories</TableUnit></td>
                                <hr/>
                            </tr>}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddButton>+ Add another dinner item</AddButton>
        </>
    )
}

export default Nutrition;
