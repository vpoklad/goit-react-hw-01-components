import s from './FriendListItem.module.css';
import imageDefault from '../images/default.jpg';

function FriendListItem({
  avatar = imageDefault,
  name = 'user name',
  isOnline = false,
}) {
  const statusClass = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={statusClass}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendListItem;
