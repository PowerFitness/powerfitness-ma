import styled from 'styled-components';

export const ScrollableContainer = styled.div`
    overflow-x: scroll;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 500px;
`;

export const TableHeaderRow = styled.tr`
    border-bottom: 1px solid lightgrey;
`;

export const TableHeader = styled.th`
    text-align: left;
    font-weight: 700;
`;

export const TableInput = styled.input`
    height: 30px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    width: 370px;

    @media (max-width: 768px) {
        width: 200px;
    }
`;

export const TableUnit = styled.span`
    height: 36px;   
`;
