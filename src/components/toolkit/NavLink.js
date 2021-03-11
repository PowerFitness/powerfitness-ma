import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
    height: 22px;
    color: #0081AF;
    font-size: 22px;
    font-weight: 300;
    line-height: 22px;
    margin-right: 44px;
    text-decoration: ${props => props.selected ? 'underline' : 'none'};
    &[data-active] {
        color: red;
    }
`;

