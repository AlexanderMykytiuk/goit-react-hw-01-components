import React from "react";
import propTypes from 'prop-types';
import defaultImage from './defaultImg.jpg'
import styles from "./Profile.module.css";


const Profile = ({ avatar, name, tag, location, stats: {followers, views, likes} }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt={name}
        width="120"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats_item}>
        <span className={styles.label}>Followers </span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Views </span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Likes </span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object.isRequired
}

export default Profile;