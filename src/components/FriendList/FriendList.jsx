import propTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span className="status"></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ListOfFriends>
  );
}

FriendList.propTypes = {
  friends: propTypes.array,
};
