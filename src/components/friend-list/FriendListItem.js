import React from "react";
import styles from "./Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>
    <span className={styles.status}>{isOnline}</span>
    {isOnline ? (
      <span className={styles.isOnline}>{isOnline}</span>
    ) : (
      <span className={styles.isOffline}>{isOnline}</span>
    )}

    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
