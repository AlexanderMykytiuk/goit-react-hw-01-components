import React from 'react';
import propTypes from "prop-types";
import defaultImage from './defaultImg.jpg'

const FriendListItem = ({  avatar, name, isOnline, id  }) => (
    <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
);  
      
FriendListItem.defaultProps = {
    avatar: defaultImage,
}  

FriendListItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
  }

export default FriendListItem;
