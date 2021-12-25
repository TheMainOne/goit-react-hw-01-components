import styled from '@emotion/styled';

export const Card = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 3px solid #fe4f60;
  border-radius: 20px;
  padding: 20px;
  & img {
    width: 320px;
  }
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
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
margin-right: 10px;
`;

export const ListItemStats = styled.span`
font-weight: bold;
`;

