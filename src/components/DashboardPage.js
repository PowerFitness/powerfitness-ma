import React from 'react';
import styled from 'styled-components';
import { HeaderText, SubHeader, PrimaryButton, DatePicker } from './toolkit';
import { ProgressCircleWrapper } from '../Donut';
import * as planSelectors from '../selectors/planSelectors';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const DashButton = styled(PrimaryButton)`
box-sizing: border-box;
height: 37px;
width: 220px;
background-color: #FFF;
border: 1px solid #0081AF;
color: #0081AF;

`
const Shadow = styled.div`
padding: 40px 74px 0 74px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
@media (max-width: 768px) {
    padding: 40px 30px;
}
`
const ShadowLCard = styled.div`
border-radius: 8px;
background: rgba(255,255,255,0.2);
box-shadow: 0 2px 10px 0 #CACACA;
min-height: 360px;
width: 500px;
margin-bottom: 20px;
`
const ShadowRCard = styled.div`
background: rgba(255,255,255,0.2);
border-radius: 8px;
box-shadow: 0 2px 10px 0 #CACACA;
min-height: 360px;
width: 500px;
margin-bottom: 20px;

`
const Motivation = styled.div`
height: 35vh;
margin: 45px;
`
const StyledText = styled.div`
height: 25vh;
margin-top: 25px;
color: #000;
font-family: Helvetica;
font-size: 18px;
line-height: 18px;
text-align: left;
`

export const DashboardPage = () => {
    const motiv = useSelector(planSelectors.getMotivation);
    const history = useHistory();
    const navigateTo = () =>{
        history.push('/journal');
    }
    return (
        <>
            <SubHeader>
                <DashButton onClick={navigateTo}>Add Journal Entry</DashButton>
            </SubHeader>
            <DatePicker/>
            <Shadow>
                <ShadowLCard>
                    <Motivation>
                        <HeaderText>My Motivation</HeaderText>
                        <StyledText>{motiv}</StyledText>
                    </Motivation>
                </ShadowLCard>
                <ShadowRCard>
                    <ProgressCircleWrapper />
                </ShadowRCard>
            </Shadow>
        </>
    );
};


export default DashboardPage;
