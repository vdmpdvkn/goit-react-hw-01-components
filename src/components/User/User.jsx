import propTypes from 'prop-types';
import css from './user.module.css';
export const User = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.item}>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li className={css.item}>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li className={css.item}>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
  </div>
);
User.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.objectOf(propTypes.number).isRequired,
};
