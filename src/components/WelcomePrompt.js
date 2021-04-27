import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from './toolkit';
import * as userSelectors from '../selectors/userSelectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Welcome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 2px 10px 0 #CACACA;
margin: 80px 50px;

@media (max-width: 768px) {
    height: calc(100vh - 54px);
    margin: 0;
    box-shadow: none;
}
`
const TDiv = styled.div`
color: #0081AF;
font-family: Helvetica;
font-size: 22px;
font-weight: 300;
text-align: center;
padding: 30px 0 0 0;
`
const TextDiv = styled(TDiv)`
color: #000;
padding: 20px 0 100px 0;
`
const PButton = styled(PrimaryButton)`
margin: 0 0 150px 0;
`
export const WelcomePrompt = () => {
    const userName = useSelector(userSelectors.userName);
    return (
        <>
            <Welcome>
                <TDiv>Welcome, {userName}!</TDiv>
                <TextDiv>
                    It looks like you haven&#39;t set your fitness goals yet. Click
                    the button below to get started.
                </TextDiv>
                <Link to="/plan">
                    <PButton
                        height="80px"
                        width="300px"
                        borderRadius="50px"
                        fontSize="26px"
                        background-color="#0081AF"
                    >
                        Start Fitness Planning
                    </PButton>
                </Link>
            </Welcome>
        </>
    );
}

export default WelcomePrompt;
