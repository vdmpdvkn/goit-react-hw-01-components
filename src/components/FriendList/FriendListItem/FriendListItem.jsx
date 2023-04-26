import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
