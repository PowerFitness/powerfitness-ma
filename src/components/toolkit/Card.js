import styled from 'styled-components';

export const Card = styled.div`
    height: ${props => props.height || '350px'};
    width: ${props => props.width || '530px'};
    opacity: 0.2;
    border-radius: 8px;
    background-color: #FFF;
    box-shadow: 0 2px 10px 0 #373535;
`;
