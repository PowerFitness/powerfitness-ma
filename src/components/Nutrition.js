import React from 'react'
import styled from 'styled-components'

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
`

const CaloriesInput = styled.input`
    box-sizing: border-box;
    height: 34px;
    width: 121px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    margin-right: 75px;
`
const BreakfastCaloriesSpan = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 367px;
`

const LunchCaloriesSpan = styled.span`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    margin-left: 397px;
`

const DinnerCaloriesSpan = styled.span`
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


export const Nutrition = () => {
    return (
        <React.Fragment>
            <NutritionHeader>Nutrition</NutritionHeader>
            <HorizontalLine/>
            <Span>Breakfast</Span>
            <BreakfastCaloriesSpan>Calroies</BreakfastCaloriesSpan>
            <hr/>
            <NutritionInput/>
            <CaloriesInput/>
            <hr/>
            <AddButton>+ Add another breakfast item</AddButton>
            <br/>
            <Span>Lunch</Span>
            <LunchCaloriesSpan>Calories</LunchCaloriesSpan>
            <hr/>
            <NutritionInput/>
            <CaloriesInput/>
            <hr/>
            <AddButton>+ Add another lunch item</AddButton>
            <br/>
            <Span>Dinner</Span>
            <DinnerCaloriesSpan>Calories</DinnerCaloriesSpan>
            <hr/>
            <NutritionInput/>
            <CaloriesInput/>
            <hr/>
            <AddButton>+ Add another dinner item</AddButton>
            <br/>
        </React.Fragment>
    )
}

export default Nutrition;
