import styled from 'styled-components';

export const PrimaryButton = styled.button`
    height: ${props => props.height || '37px'};
    width: ${props => props.width || '220px'};
    border-radius: ${props => props.borderRadius || '8px'};
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    color: #FFF;
    font-family: Helvetica;
    font-size: ${props => props.fontSize || '22px'};
    font-weight: 300;
    line-height: 22px;
    text-align: center;
    background-color: ${props => props.disabled? 'lightgrey' : '#0081AF'};
    pointer-events: ${props => props.disabled? 'none' : 'auto'};
    
    @media (max-width: 768px) {
        width: 130px;
    }
`;

