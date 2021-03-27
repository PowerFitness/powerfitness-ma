import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat)
library.add(fas)

const DatePickerContainer = styled.div`
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

export const DatePicker = () => {
    const today = dayjs().format('dddd, MMMM D, YYYY');
    const [ cDate, setcDate ] = useState(today);

    const prevDate = () => {
        const pDate = dayjs(cDate).subtract('1', 'day').format('dddd, MMMM D, YYYY');
        setcDate(pDate);
    };
    const nextDate = () => {
        const nDate = dayjs(cDate).add('1', 'day').format('dddd, MMMM D, YYYY');
        setcDate(nDate);
    };
    return (
        <DatePickerContainer>
            <LeftArrow icon="chevron-left" onClick={prevDate} />
            <Date>{cDate}</Date>
            <RightArrow icon="chevron-right" onClick={nextDate} />
        </DatePickerContainer>
    );
}
