import propTypes from 'prop-types';
import { ListOfFriends, ListItem, ListOnlineTracker, ListOfflineTracker } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          {friend.isOnline ? <ListOnlineTracker></ListOnlineTracker> : <ListOfflineTracker></ListOfflineTracker>}
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </ListItem>
      ))}
    </ListOfFriends>
  );
}

FriendList.propTypes = {
  friends: propTypes.array,
};
