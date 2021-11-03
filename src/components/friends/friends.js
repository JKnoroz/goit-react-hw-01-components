import PropsType from 'props-type';
import s from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? '#32CD32' : '#FF0000' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendList.propsType = {
  friends: PropsType.array,
};

FriendListItem.propsType = {
  avatar: PropsType.string,
  name: PropsType.string,
  isOnline: PropsType.boolean,
};

export default FriendList;
