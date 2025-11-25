import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { fullname, role, image } = this.props;

    return (
      <div className="user-card">
        <img src={image} alt="User" className="avatar" />
        <h3>{fullname}</h3>
        <p>{role}</p>
      </div>
    );
  }
}

export default UserCard;
