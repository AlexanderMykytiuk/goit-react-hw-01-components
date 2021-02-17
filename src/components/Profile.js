import React from "react";
import propTypes from 'prop-types';
import defaultImage from './defaultImg.jpg'


const Profile = ({ avatar, name, tag, location, stats: {followers, views, likes} }) => (
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt={name}
        width="120"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers </span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views </span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes </span>
        <span className="quantity">{likes}</span>
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