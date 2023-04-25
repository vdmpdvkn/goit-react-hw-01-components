import propTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span className={isOnline ? css.online : css.offline}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
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
