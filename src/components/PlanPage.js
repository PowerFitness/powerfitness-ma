import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, HeaderText, SubHeader, PrimaryButton } from './toolkit';
import PropTypes from 'prop-types';


const Motivation = styled.div`
padding: 30px 64px;
`

const TextArea = styled.textarea`
box-sizing: border-box; 
height: 100px; 
width: 1150px; 
border-radius: 8px; 
border: 1px solid #BDBDBD;
`


export const PlanPage = ({
    mStatement
}) =>{
    const [ motivStat, setMotivStatement ]= useState(mStatement);


    const handleMotivStatement = (e) =>{
        setMotivStatement(e.target.value);
    };

    return(
        <>
            <SubHeader>
                <PrimaryButton save >Save</PrimaryButton>
            </SubHeader>

            <Motivation>
                <HeaderText>Motivation Statement</HeaderText>
                <Text margin="11px 0 11px 0">Describe your motivation for achieving your fitness goals</Text>
                <TextArea height="100px" width="100%" type="Text" value={motivStat} onChange={handleMotivStatement}/>
            </Motivation>

            {/* <Exercise>
                <HeaderText>Exercise</HeaderText>
                <Text margin="11px 0 11px 0">What is your weekly exercise goal?</Text>
                <Input height="100px" width="100%" type="Text" value={motivStat} onChange={handleMotivStatement}/>
                <Text margin="11px 0 11px 0">days per week</Text>
                <Text margin="11px 0 11px 0">How many minutes of exercise per day?</Text>
                <Input height="100px" width="100%" type="Text" value={motivStat} onChange={handleMotivStatement}/>
                <Text margin="11px 0 11px 0">minutes</Text>
            </Exercise> */}
        </>
    );
};

PlanPage.propTypes = {
    planId: PropTypes.string,
    mStatement: PropTypes.string,
    //savePlan: PropTypes.func
};


export default PlanPage;
