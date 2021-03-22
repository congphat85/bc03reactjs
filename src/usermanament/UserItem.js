import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const {user,deleteUser} = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
