import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    height: ${props => props.height || '400px'};
    max-height: 100%;
    width: ${props => props.width || '400px'};
    max-width: 100%;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledOverlay = styled.div`
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(128,128,128,0.5); 
`;

export const Modal = ({ isOpen, children, ... rest }) => isOpen ?
    <StyledOverlay>
        <StyledModal {...rest}>
            {children}
        </StyledModal>
    </StyledOverlay> : null
