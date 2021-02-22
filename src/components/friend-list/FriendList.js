import React from "react";
import propTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import defaultImage from '../profile/defaultImg.jpg'
import styles from "./Friends.module.css"

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        key={id}
      />
    ))}
  </ul>
);
     
FriendList.defaultProps = {
  avatar: defaultImage,
}  

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
