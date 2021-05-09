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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';

const NutritionHeader = styled.th`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`

const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #EF798A;
    border: none;
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

const MaxTableData = styled(TableData)`
    width: 450px;
    max-width: 450px;
`;

const MaxTableHeader = styled(TableHeader)`
    width: 450px;
    max-width: 450px;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: #BDBDBD;
    margin: 0 20px;
`;

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
        const { value } = event.target;

        if (!isNaN(Number(value))) {
            let newBreakfastArray = [ ...listOfBreakfastItems ];
            newBreakfastArray[index].value = value;

            setListOfBreakfastItems(newBreakfastArray);
        }
    }

    const handleLunchChange = (index) => event => {
        let newLunchArray = [ ...listOfLunchItems ];
        newLunchArray[index].name = event.target.value;

        setListOfLunchItems(newLunchArray);
    }

    const handleLunchCalorieChange = (index) => event => {
        const { value } = event.target;

        if (!isNaN(Number(value))) {
            let newLunchArray = [ ...listOfLunchItems ];
            newLunchArray[index].value = value;

            setListOfLunchItems(newLunchArray);
        }
    }

    const handleDinnerChange = (index) => event => {
        let newDinenrArray = [ ...listOfDinnerItems ];
        newDinenrArray[index].name = event.target.value;

        setListOfDinnerItems(newDinenrArray);
    }

    const handleDinnerCalorieChange = (index) => event => {
        const { value } = event.target;

        if (!isNaN(Number(value))) {
            let newDinenrArray = [ ...listOfDinnerItems ];
            newDinenrArray[index].value = value;

            setListOfDinnerItems(newDinenrArray);
        }
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

    const handleBreakfastDelete = (index) => () => {
        setListOfBreakfastItems(listOfBreakfastItems.filter((_, i) => i !== index));
    }

    const handleLunchDelete = (index) => () => {
        setListOfLunchItems(listOfLunchItems.filter((_, i) => i !== index));
    }

    const handleDinnerDelete = (index) => () => {
        setListOfDinnerItems(listOfDinnerItems.filter((_, i) => i !== index));
    }

    return (
        <>
            <NutritionHeader>Nutrition</NutritionHeader>
            <HorizontalLine/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <MaxTableHeader>Breakfast</MaxTableHeader>
                            <MaxTableHeader>Amount</MaxTableHeader>
                            <TableHeader>Unit</TableHeader>
                            <TableHeader></TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {listOfBreakfastItems?.map((breakfastItem, index)=> {
                            return (
                                <tr key={index}>
                                    <MaxTableData>
                                        <TableInput value={breakfastItem.name} onChange={handleBreakfastChange(index)}/>
                                    </MaxTableData>
                                    <MaxTableData>
                                        <TableInput
                                            value={breakfastItem.value}
                                            onChange={handleBreakfastCalorieChange(index)}
                                        />
                                    </MaxTableData>
                                    <TableData><TableUnit>calories</TableUnit></TableData>
                                    <TableData textAlign="right">
                                        <DeleteIcon onClick={handleBreakfastDelete(index)} icon={faMinusSquare}/>
                                    </TableData>
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
                            <MaxTableHeader>Lunch</MaxTableHeader>
                            <MaxTableHeader>Amount</MaxTableHeader>
                            <TableHeader>Unit</TableHeader>
                            <TableHeader></TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        { listOfLunchItems?.map((lunchItem, index)=> {
                            return (
                                <tr key={index}>
                                    <MaxTableData>
                                        <TableInput value={lunchItem.name} onChange={handleLunchChange(index)}/>
                                    </MaxTableData>
                                    <MaxTableData>
                                        <TableInput value={lunchItem.value} onChange={handleLunchCalorieChange(index)}/>
                                    </MaxTableData>
                                    <TableData>
                                        <TableUnit>calories</TableUnit>
                                    </TableData>
                                    <TableData textAlign="right">
                                        <DeleteIcon onClick={handleLunchDelete(index)} icon={faMinusSquare}/>
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
                            <MaxTableHeader>Dinner</MaxTableHeader>
                            <MaxTableHeader>Amount</MaxTableHeader>
                            <TableHeader>Unit</TableHeader>
                            <TableHeader></TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        { listOfDinnerItems?.map((dinnerItem, index)=> {
                            return (
                                <tr key={index}>
                                    <MaxTableData>
                                        <TableInput value={dinnerItem.name} onChange={handleDinnerChange(index)}/>
                                    </MaxTableData>
                                    <MaxTableData>
                                        <TableInput value={dinnerItem.value} onChange={handleDinnerCalorieChange(index)}/>
                                    </MaxTableData>
                                    <TableData>
                                        <TableUnit>calories</TableUnit>
                                    </TableData>
                                    <TableData textAlign="right">
                                        <DeleteIcon onClick={handleDinnerDelete(index)} icon={faMinusSquare}/>
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
