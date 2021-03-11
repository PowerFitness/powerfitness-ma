import styled from 'styled-components';
export const HeaderText = styled.div`
    height: ${props => props.height || '18px'};
    width: ${props => props.width || 'auto'};
    margin: ${props => props.margin || '0 0 0 0'};
    color: #000; 
    font-family: Helvetica; 
    font-size: ${props => props.fontSize || '18px'};
    font-weight: 700; 
    line-height: 18px; 
    text-align: left;
`;