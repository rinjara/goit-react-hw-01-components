import styled from 'styled-components';

export const Table = styled.table`
width: 500px;
height: auto;
margin: 50px;
padding: 0;
border-radius: 5px;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;

`;

export const TableHead = styled.thead`
background-color: lightseagreen;
color: white;
text-transform: uppercase;
height: 45px;
`;

export const TableBody = styled.tbody`
text-align: center;
`;

export const TableRow = styled.tr`
height: 45px;
color: grey;

&:nth-child(even) {
    background-color: lightcyan;
}
`;

export const TypeTableColumn = styled.td`
text-transform: capitalize;
`;

