import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      listUser : data,
  

    };
  }
  //_findIndex hàm tìm vị trí user
  _findIndex = (infoUser,user) => {
    return infoUser.findIndex((item) => {
      return item.id === user.id;
    })
  };

  // handleDeleteUser
  handleDeleteUser = (user)=> {
    let listUser = [...this.state.listUser];
    let viTri = this._findIndex(listUser,user);
    listUser.splice(viTri,1);
    this.setState({
      listUser: listUser,
    });
    
  };


  render() {
    return (
      <div className="container d-block">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users 
        listUser = {this.state.listUser}
        deleteUser = {this.handleDeleteUser}
        />
        <Modal />
      </div>
    );
  }
}
