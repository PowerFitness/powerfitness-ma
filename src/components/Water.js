/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';

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

const WaterSpan = styled.span`
    padding-right: 126px;
    padding-left: 2px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
`

const WaterUnitSpan = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
`

const WaterInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 181px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    margin-right: 75px;
    margin-left: 2px;
    font-size: 18px;
`

const WaterUnit = styled.span`
    box-sizing: border-box;
    border-radius: 8px;
    height: 18px;
    width: 60px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
`

const AddWater = styled.button `
    color: #0081AF;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    background-color: white;
    border: none;
    margin: 4px 0 50px 14px;
`

export const Water = () => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const waterQuantities = useSelector(resultSelectors.getWaterQuantities(selectDate));

    return (
        <React.Fragment>
            <WaterHeader>Water</WaterHeader>
            <HorizontalLine/>
            <WaterSpan>Water Quantity</WaterSpan>
            <WaterUnitSpan>Unit</WaterUnitSpan>
            <hr/>
            {waterQuantities?.length > 0 ?
                waterQuantities?.map((waterQuantity, index) => {
                    return (
                        <React.Fragment key={index}>
                            <WaterInput value={waterQuantity.value}/>
                            <WaterUnit>ounces</WaterUnit>
                            <hr/>
                        </React.Fragment>
                    )
                }):
                <React.Fragment>
                    <WaterInput/>
                    <WaterUnit>ounces</WaterUnit>
                    <hr/>
                </React.Fragment>}

            <AddWater>+ Add another water item</AddWater>
        </React.Fragment>
    )
}

export default Water;
