import PropsType from 'props-type';
import s from './profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propsType = {
  avatar: PropsType.string,
  name: PropsType.string,
  tag: PropsType.string,
  location: PropsType.string,
  stats: PropsType.string,
};

export default Profile;
