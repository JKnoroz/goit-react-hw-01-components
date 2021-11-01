import PropsType from 'props-type';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
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
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

// FriendList.propsType = {
//   friends: PropsType.arrayOf(
//     PropsType.shape({
//       id: PropsType.string,
//     }),
//   ),
// };

FriendListItem.propsType = {
  avatar: PropsType.string,
  name: PropsType.string,
  isOnline: PropsType.boolean,
};

export default FriendList;