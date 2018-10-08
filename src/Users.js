import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import users from './User.png';
  
class User extends Component {
    render() {
        return (
            <div>
            <div className="icon">
          <div className="dashboardcircle">
          <img className="img" src={users} alt="userimage"></img>
          </div><br></br>
          <b>Users</b>
          </div>
          <div className="info">
          <div className="align">
          <div className="dashboardstatslargetext"> 3<br></br>
             <b className="dashboardcardlargetext">Active</b>
            <br></br>
        <b className="dashboardcardsmalltext">37</b>&nbsp;
        <b className="dashboardcardsmalltext">inactive</b>
        </div>
         </div>
         </div>
         </div>
          
        );
      }
    }

export default User;