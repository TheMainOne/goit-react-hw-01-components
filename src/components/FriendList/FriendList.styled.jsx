import styled from '@emotion/styled';

export const ListOfFriends = styled.ul`
width: 500px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: gainsboro;
  cursor: pointer;
  transition: transform 200ms linear;

  &:not(:last-of-type) {
margin-bottom: 5px;
  } 

  & > img {
    margin-right: 10px;
  }

  &:hover {
    transform: translateX(-10px);
  }
`;

export const ListOnlineTracker = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  background-color: white;
  border: 1px solid green;
  border-radius: 50%;
`;

export const ListOfflineTracker = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  background-color: white;
  border: 1px solid red;
  border-radius: 50%;
`;
