/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import * as resultSelectors from '../selectors/resultSelectors';
import * as dateSelector from '../selectors/dateSelector';

const NutritionHeader = styled.div`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: 700;
    padding-left: 2px;
`

const HorizontalLine = styled.hr`
    height: 5px;
    background-color: #EF798A;
`

const Span = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 2px;
`

const NutritionInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 376px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    margin-right: 75px;
    font-size: 18px;
`

const CaloriesInput = styled.input`
    box-sizing: border-box;
    height: 34px;
    width: 121px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    margin-right: 75px;
    font-size: 18px;
`
const BreakfastCaloriesAmount = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 367px;
`

const LunchCaloriesAmount = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 397px;
`

const DinnerCaloriesAmount = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 392px;
`

const AddButton = styled.button `
    color: #0081AF;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    background-color: white;
    border: none;
    margin: 4px 0 33px 14px;
`

const UnitSpan = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 200px;
`

const Unit = styled.span`
    font-family: Helvetica;
    font-weight: 300;
    line-height: 18px;
    margin-left: 73px;
    font-size: 18px;
`

export const Nutrition = () => {
    const selectDate = useSelector(dateSelector.selectedDate);
    const breakfastItems = useSelector(resultSelectors.getBreakfastItems(selectDate));
    const lunchItems = useSelector(resultSelectors.getLunchItems(selectDate));
    const dinnerItems = useSelector(resultSelectors.getDinnerItems(selectDate));

    return (
        <React.Fragment>
            <NutritionHeader>Nutrition</NutritionHeader>
            <HorizontalLine/>
            <Span>Breakfast</Span>
            <BreakfastCaloriesAmount>Amount</BreakfastCaloriesAmount>
            <UnitSpan>Unit</UnitSpan>
            <hr/>
            {breakfastItems?.length > 0 ?
                breakfastItems?.map((breakfastItem, index)=> {
                    return (
                        <React.Fragment key={index}>
                            <NutritionInput value={breakfastItem.name}/>
                            <CaloriesInput value={breakfastItem.value}/>
                            <Unit>calories</Unit>
                            <hr/>
                        </React.Fragment>)
                }) :
                <React.Fragment>
                    <NutritionInput />
                    <CaloriesInput/>
                    <Unit>calories</Unit>
                    <hr/>
                </React.Fragment>}
            <AddButton>+ Add another breakfast item</AddButton>
            <br/>
            <Span>Lunch</Span>
            <LunchCaloriesAmount>Amount</LunchCaloriesAmount>
            <UnitSpan>Unit</UnitSpan>
            <hr/>
            {lunchItems?.length > 0 ?
                lunchItems?.map((lunchItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            <NutritionInput value={lunchItem.name}/>
                            <CaloriesInput value={lunchItem.value}/>
                            <Unit>calories</Unit>
                            <hr/>
                        </React.Fragment>
                    )
                }) : <React.Fragment>
                    <NutritionInput/>
                    <CaloriesInput/>
                    <Unit>calories</Unit>
                    <hr/>
                </React.Fragment>
            }
            <AddButton>+ Add another lunch item</AddButton>
            <br/>
            <Span>Dinner</Span>
            <DinnerCaloriesAmount>Amount</DinnerCaloriesAmount>
            <UnitSpan>Unit</UnitSpan>
            <hr/>
            {dinnerItems?.length > 0 ?
                dinnerItems?.map((dinnerItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            <NutritionInput value={dinnerItem.name}/>
                            <CaloriesInput value={dinnerItem.value}/>
                            <Unit>calories</Unit>
                            <hr/>
                        </React.Fragment>
                    )
                }) :
                <React.Fragment>
                    <NutritionInput/>
                    <CaloriesInput/>
                    <Unit>calories</Unit>
                    <hr/>
                </React.Fragment>}

            <AddButton>+ Add another dinner item</AddButton>
            <br/>
        </React.Fragment>
    )
}

export default Nutrition;
