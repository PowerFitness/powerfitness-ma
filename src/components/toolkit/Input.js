import styled from 'styled-components';

export const Input = styled.input`
    height: ${props => props.height};
    width: ${props => props.width};
    margin: ${props => props.margin};
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    text-align: center;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    color: #000;
`;
