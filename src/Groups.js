import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import groupsimage from './Groups.png';
class Groups extends Component {

      render()   
  {
    return (
        <div>
             <div className="icon">
        <div className="dashboardcircle">
        <img className="img" src={groupsimage} alt="groupsimage"></img>
        </div><br></br>
        <span><b>Groups</b></span>
        </div>
        <div className="gap"></div>
        <div className="info">
        <div className="align">
      <div className="dashboardstatslargetext">
      38<br></br>
          
          <b className="dashboardcardlargetext">Total</b>
          <br></br>
      <b className="dashboardcardsmalltext">0</b>&nbsp;
      <b className="dashboardcardsmalltext">inactive</b>
      </div>
       </div>
       </div>
        </div>
    );
}
}

export default Groups;