import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderText, SubHeader, PrimaryButton } from './toolkit';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressCircleWrapper } from '../Donut';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat)
library.add(fas)

const DashButton = styled(PrimaryButton)`
box-sizing: border-box;
height: 5vh;
width: 17vw;
background-color: #FFF;
border: 1px solid #0081AF;
color: #0081AF;
`
const DatePicker = styled.div`
height: 33px;
padding: 41px 0 0 0;
display:flex;
justify-content: center;
`
const LeftArrow = styled(FontAwesomeIcon)`
  color: #0081AF;
  font-size: 25px;
  width: 33px;
`
const RightArrow = styled(FontAwesomeIcon)`
  color: #0081AF;
  font-size: 25px;
  width: 33px;
`
const Date = styled.div`
  text-align: center;
  color: #000;
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
  margin: 3px 10px 0 10px;
`
const Shadow = styled.div`
padding: 40px 75px 0 74px;
display: flex;
justify-content: center;
`
const ShadowLCard = styled.div`
border-radius: 8px;
background: rgba(255,255,255,0.2);
box-shadow: 0 2px 10px 0 #CACACA;
height: 50vh;
width: 60vw;
margin: 0px 100px 0px 0px;
`
const ShadowRCard = styled.div`
background: rgba(255,255,255,0.2);
border-radius: 8px;
box-shadow: 0 2px 10px 0 #CACACA;
height: 50vh;
width: 60vw;
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
    const today = dayjs().format('dddd, MMMM D, YYYY');
    const [cDate, setcDate] = useState(today);

    const prevDate = () => {
        const pDate = dayjs(cDate).subtract('1', 'day').format('dddd, MMMM D, YYYY');
        setcDate(pDate);
    };
    const nextDate = () => {
        const nDate = dayjs(cDate).add('1', 'day').format('dddd, MMMM D, YYYY');
        setcDate(nDate);
    };
    return (
        <>
            <SubHeader>
                <DashButton>Add Journal Entry</DashButton>
            </SubHeader>
            <DatePicker>
                <LeftArrow icon="chevron-left" onClick={prevDate} />
                <Date>{cDate}</Date>
                <RightArrow icon="chevron-right" onClick={nextDate}/>
            </DatePicker>
            <Shadow>
                <ShadowLCard>
                    <Motivation>
                        <HeaderText>My Motivation</HeaderText>
                        <StyledText>Hi There</StyledText>
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
