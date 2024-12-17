import React from 'react';
import './ProfileBoxStyles.css';

const ProfileBox = ({ profileImage, senderName, message }) => {
  return (
    <div className="profile-box">
      <img src={profileImage} alt={`${senderName}'s profile`} className="profile-image" />
      <div className="profile-content">
        <h3 className="sender-name">{senderName}</h3>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default ProfileBox;
