import React from 'react'
import styled from 'styled-components'

const Save = styled.button`
    position: relative;
    background-color: #0081AF;
    height: 37px;
    width: 200px;
    border-radius: 8px;
    font-family: Helvetica;
    color: #FFF;
    font-size: 22px;
    text-align: center;
    margin-left: 1170px;
`

const Header = styled.div`
    background-color: #F2F2F2;
    margin: 0;
    padding: 8px 0 8px 0;
`

const handleOnSave = () => {
    console.log('save button clicked')
}

export const JournalSubHeader = () => {
    return(
        <React.Fragment>
            <Header>
                <Save onClick={handleOnSave}>Save</Save>
            </Header>
        </React.Fragment>
    )
}

export default JournalSubHeader;
