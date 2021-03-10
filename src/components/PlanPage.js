import React,{useState} from 'react';
import styled from 'styled-components';
//import Header from './Header';
import PropTypes from 'prop-types';

const FlexContainer = styled.div`
display: flex,
flex-direction: row,
height: 53px, 
width: 1310px, 
background-color: #F2F2F2, 
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.18)
`
const Motivation = styled.div`
height:158px,
width:1150px,
display:flex,
flex-direction:content,
justify-content: center;
align-items: left;
`
const Motiv = styled.div`
height: 18px,
width: 184.44px, 
color: #000, 
font-family: Helvetica, 
font-size: 18px, 
font-weight: 700, 
line-height: 18px, 
text-align: center
`
const MotiveDesc = styled(Motiv)`
font-weight: 300 
`
const TextArea = styled.textarea`
box-sizing: border-box, 
height: 100px, 
width: 1150px, 
border-radius: 8px, 
border: 1px solid #BDBDBD
`

const HeaderButton = styled.button`
height: 37px, 
width: 200px,
border-radius: 8px, 
background-color: #BDBDBD,
margin-left: auto,
margin-right: 0, 
outline:none
`

export const PlanPage = ({
     mStatement
}) =>{
    const [motivStat, setMotivStatement]=useState(mStatement);


    const handleMotivStatement = (e) =>{
        setMotivStatement(e.target.value);
    };

    return(
        <>
        <FlexContainer>
            <HeaderButton save >Save</HeaderButton>
        </FlexContainer>

        <Motivation>
        <Motiv>Motivation Statement</Motiv>
        <MotiveDesc>Describe your motivation for achieving your fitness goals</MotiveDesc>
        <TextArea height="100px" width="1150px" type="Text" value={motivStat} onChange={handleMotivStatement}/>
        </Motivation>
        </>
    );
};

PlanPage.propTypes = {
    planId: PropTypes.string,
    mStatement: PropTypes.string,
    //savePlan: PropTypes.func
};


export default PlanPage;