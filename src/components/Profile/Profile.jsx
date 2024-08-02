// import clsx from 'clsx';
import s from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.card}>
      <div className={s.main}>
        <img src={image} alt={name + ' avatar'} className={s.img} />
        <h3 className={s.name}>{name}</h3>
        <a className={s.userData} href="">
          @{tag}
        </a>
        <p className={s.userData}>{location}</p>
      </div>
      <ul className={s.dataList}>
        <li className={s.dataListItem}>
          <span>Followers</span>
          <span className={s.count}>{stats.followers}</span>
        </li>
        <li className={s.dataListItem}>
          <span>Views</span>
          <span className={s.count}>{stats.views}</span>
        </li>
        <li className={s.dataListItem}>
          <span>Likes</span>
          <span className={s.count}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
