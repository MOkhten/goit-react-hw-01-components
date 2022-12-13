import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className='friend-list'>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            status={friend.isOnline}
            avatar={friend.avatar}
          />
       );
      })}
    </ul>
       );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};