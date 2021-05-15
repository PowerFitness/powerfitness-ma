/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    ScrollableContainer,
    Table,
    TableHeaderRow,
    TableHeader,
    TableInput,
    TableUnit,
    TableData
} from './toolkit/TableComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';

const WaterHeader = styled.div`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`
const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #00ABE7;
    border: none;
`

const AddWater = styled.button `
    color: #0081AF;
    font-weight: 300;
    line-height: 18px;
    background-color: white;
    border: none;
    margin: 4px 0 50px 14px;
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
    color: #BDBDBD;
    cursor: pointer;
    margin: 0 20px;
`;

export const Water = ({ listOfWaterQuantities, setListOfWaterQuantities }) => {
    const handleWaterQuantityChange = (index) => event => {
        const { value } = event.target;

        if (!isNaN(Number(value))) {
            let newWaterQuantitiArray = [ ...listOfWaterQuantities ];
            newWaterQuantitiArray[index].value = value;

            setListOfWaterQuantities(newWaterQuantitiArray)
        }
    }

    const handleAddWater = () => {
        const waterObject =  { type: 'water', subtype: 'water', unit: 'ounces', name: 'water', value: '' };
        setListOfWaterQuantities([ ...listOfWaterQuantities, waterObject ])
    }

    const handleWaterDelete = (index) => () => {
        setListOfWaterQuantities(listOfWaterQuantities.filter((_, i) => i !== index));
    }

    return (
        <>
            <WaterHeader>Water</WaterHeader>
            <HorizontalLine/>
            <ScrollableContainer>
                <Table>
                    <thead>
                        <TableHeaderRow>
                            <MaxTableHeader>Water Quantity</MaxTableHeader>
                            <TableHeader>Unit</TableHeader>
                            <TableHeader></TableHeader>
                        </TableHeaderRow>
                    </thead>
                    <tbody>
                        { listOfWaterQuantities?.map((waterQuantity, index)=> {
                            return (
                                <tr key={index}>
                                    <MaxTableData><TableInput
                                        data-testid='water-input'
                                        value={waterQuantity.value}
                                        onChange={handleWaterQuantityChange(index)}/>
                                    </MaxTableData>
                                    <TableData><TableUnit>ounces</TableUnit></TableData>
                                    <TableData textAlign="right">
                                        <DeleteIcon onClick={handleWaterDelete(index)} icon={faMinusSquare}/>
                                    </TableData>
                                </tr>)
                        })}
                    </tbody>
                </Table>
            </ScrollableContainer>
            <AddWater onClick={handleAddWater}>+ Add another water entry</AddWater>
        </>
    )
}

Water.propTypes = {
    listOfWaterQuantities: PropTypes.array,
    setListOfWaterQuantities: PropTypes.func
};

export default Water;
