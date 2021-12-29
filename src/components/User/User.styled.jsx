import styled from '@emotion/styled';

export const Card = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px 0 0;
  background-color: gainsboro;
  border-radius: 8px;

  & img {
    width: 310px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  color: hsl(206deg 100% 73%);
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin: 0px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  min-width: 135px;
  background-color: hsl(206deg 100% 73%);
  padding: 15px;
  border: 1px solid hsl(0deg 0% 50%);
  cursor: pointer;
  color: #ffffff;
  transition: transform 200ms linear;

  &:first-of-type {
    border-bottom-left-radius: 8px;
  }

  &:last-of-type {
    border-bottom-right-radius: 8px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const ListItemStats = styled.span`
  font-weight: bold;
`;
