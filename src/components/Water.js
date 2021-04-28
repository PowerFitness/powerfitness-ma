/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';
import {
    ScrollableContainer,
    Table,
    TableHeaderRow,
    TableHeader,
    TableInput,
    TableUnit,
    TableData
} from './toolkit/TableComponents';

const WaterHeader = styled.div`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`
const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #00ABE7;
`

const AddWater = styled.button `
    color: #0081AF;
    font-weight: 300;
    line-height: 18px;
    background-color: white;
    border: none;
    margin: 4px 0 50px 14px;
`

export const Water = () => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const waterQuantities = useSelector(resultSelectors.getWaterQuantities(selectDate));
    const [ listOfWaterQuantities, setListOfWaterQuantities ] = useState(waterQuantities);

    const handleWaterQuantityChange = (index) => event => {
        let newWaterQuantitiArray = [ ...listOfWaterQuantities ];
        newWaterQuantitiArray[index].value = event.target.value;

        setListOfWaterQuantities(newWaterQuantitiArray)
    }

    return (
        <>
            <WaterHeader>Water</WaterHeader>
            <HorizontalLine/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <TableHeader>Water</TableHeader>
                            <TableHeader>Unit</TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        {waterQuantities?.length > 0 ?
                            waterQuantities?.map((waterQuantity, index)=> {
                                return (
                                    <tr key={index}>
                                        <TableData><TableInput
                                            value={waterQuantity.value}
                                            onChange={handleWaterQuantityChange(index)}/>
                                        </TableData>
                                        <TableData><TableUnit>ounces</TableUnit></TableData>
                                    </tr>)
                            }) :
                            <tr>
                                <TableData><TableInput /></TableData>
                                <TableData><TableUnit>ounces</TableUnit></TableData>
                            </tr>}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddWater>+ Add another water entry</AddWater>
        </>
    )
}

export default Water;
