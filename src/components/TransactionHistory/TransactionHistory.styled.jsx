import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 20px auto;
  width: 500px;
  background-color: gainsboro;
  ${'' /* border-radius: 10px; */}
  border-bottom-left-radius: 8px;
 border-bottom-right-radius: 8px;
`;

export const TableTitle = styled.thead`
    text-align: center;
    text-transform: uppercase;
    background-color: hsl(206deg 100% 73%);
`;

export const TableHeader = styled.th`
padding: 10px;
`;

export const TableColumn = styled.tbody`
    text-align: center;
     transition: transform 200ms linear, background-color 300ms linear;
     cursor: pointer;

    :hover {
       transform: rotate(-1deg);
       background-color: #ffffff;
    }
`;