import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
    friend: { avatar, name, isOnline}
}) {
    const containerClsx = clsx(
        css.container,
        isOnline ? css.isActive : css.isRetired
      );
      return (
        <div className={containerClsx}>
  <img src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
  <p className={css.status}>{isOnline ? 'Online' : 'Offline'}</p>
</div>
      );
}