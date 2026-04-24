import React from "react";
import './HeadBox.css'

export default function HeadBox({image,followers,followings,location}) {
  return (
    <div className="head-Bar">
      <div className="profile-container">
        <div className="profile-img">
          <img
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-valBox">
          <span>Followers</span>
          <span>|</span>
          <span>{followers}</span>
        </div>
        <div className="profile-valBox">
          <span>Following</span>
          <span>|</span>
          <span>{followings}</span>
        </div>
        <div className="profile-valBox">
          <span>Location</span>
          <span>|</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
