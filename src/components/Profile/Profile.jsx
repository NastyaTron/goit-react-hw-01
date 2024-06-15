import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>
      <ul className={css.item}>
        <li className={css.list}>
          <span className={css.data}>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.data}>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.data}>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
