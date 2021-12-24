import styled from '@emotion/styled';

export const Card = styled.div`
    border: 3px solid black;
    border-radius: 15px;

& img { width: 320px}
`;

export const Description = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
margin: 0px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`; 