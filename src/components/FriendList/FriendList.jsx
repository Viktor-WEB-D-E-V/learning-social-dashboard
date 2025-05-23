import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
export default FriendList;
