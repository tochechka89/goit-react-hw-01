import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
<div className={css.container}>
  <div>
    <img className={css.userImg}
      src={image}
      alt="User avatar"
    />
    <p className={css.userName}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.statsText}>Followers</span>
      <span className={css.statsCount}>{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsText}>Views</span>
      <span className={css.statsCount}>{stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsText}>Likes</span>
      <span className={css.statsCount}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}

