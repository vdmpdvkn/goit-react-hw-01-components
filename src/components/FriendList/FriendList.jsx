import propTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      isOnline: propTypes.bool,
      avatar: propTypes.string,
      name: propTypes.string,
    })
  ).isRequired,
};
