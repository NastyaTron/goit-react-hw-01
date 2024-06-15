import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  const status = clsx(
    css.text,
    isOnline && css.isActive,
    !isOnline && css.isRetired
  );
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
