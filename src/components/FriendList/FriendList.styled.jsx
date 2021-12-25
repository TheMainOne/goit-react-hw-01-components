import styled from '@emotion/styled';

export const ListOfFriends = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  border: 3px solid #fe4f60;
  padding: 10px;
  border-radius: 20px;
`;

export const ListOnlineTracker = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: white;
  border: 1px solid green;
  border-radius: 50%;
`;

export const ListOfflineTracker = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: white;
  border: 1px solid red;
  border-radius: 50%;
`;
