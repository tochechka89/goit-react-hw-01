
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
    return (
<ul className={css.container}>
{friends.map((friend) => (
	<li key={friend.id} className={css.friends}> 
		<FriendListItem friend={friend}/>
	</li>
))}
</ul>
);
}