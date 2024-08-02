import s from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <img className={s.img} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx([s.text, isOnline ? s.online : s.offline])}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
