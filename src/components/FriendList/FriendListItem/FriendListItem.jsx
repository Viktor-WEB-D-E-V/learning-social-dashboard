import clsx from "clsx";
import css from "./FriendListItem.module.css";

function FriendListItem({ friend }) {
  return (
    <>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.text}>{friend.name}</p>
      <p
        className={clsx(css.text, {
          [css.online]: friend.isOnline,
          [css.ofline]: !friend.isOnline,
        })}
      >
        {friend.isOnline ? "Online" : "Ofline"}
      </p>
    </>
  );
}
export default FriendListItem;
