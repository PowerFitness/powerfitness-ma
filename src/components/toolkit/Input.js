import styled from 'styled-components';

export const StyledInput = styled.input`
    height: ${props => props.height};
    width: ${props => props.width};
    margin: ${props => props.margin};
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
`;
