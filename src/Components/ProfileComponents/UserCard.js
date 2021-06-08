import React from "react";
import "./UserCard.css";

function UserCard() {
  return (
    <div className="UserCard">
      <img
        className="UserCard__UserAvatar"
        src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser.svg"
        alt="avatar"
      />
      <span>Rohan Gupta</span>
      <span>rohang9896@gmail.com</span>
    </div>
  );
}

export default UserCard;
