import React                   , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users.js';
import Tasks from './Tasks.js';
import GeoFence from './GeoFence.js';
import Groups from './Groups.js';
import Paper from '@material-ui/core/Paper';
import { pink400, blue500, fullWhite } from 'material-ui/styles/colors';
import Grid from '@material-ui/core/Grid';


const styles = {
  usercomponent:{
           height:'100px',
           display:'flex',
           padding: 20,
           flexDirection:'column',
           width:'200px',
           color: fullWhite,
           backgroundColor:'#E040FB',
                 },

  groupscomponent:{
            height:'100px',
            display:'flex',
            padding: 20,
            flexDirection:'column',
            width:'200px',
            color: fullWhite,
            backgroundColor:blue500,
                  },

  Taskcomponent:{
              height:'100px',
              display:'flex',
              padding: 20,
              flexDirection:'column',
              width:'200px',
              color: fullWhite,
              backgroundColor:'#66BB6A',
                 },

  Geocomponent:{
                  height:'100px',
                  display:'flex',
                  padding: 20,
                  flexDirection:'column',
                  width:'200px',
                  color: fullWhite,
                  backgroundColor:pink400,
                   },
  };


class App extends Component {
  render() {
    return (
     <div className="wrapper">
      <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="icon">
      <div className="icon">
                   <Paper zDepth={5} style={styles.usercomponent}>
              <Users />
          </Paper>
          </div>
          <div className="info">        
                  <Paper zDepth={5} style={styles.groupscomponent}>
              <Groups />
          </Paper>
          </div>
          </div>
          <div  className="info">
          <div className="icon">
                              <Paper zDepth={5} style={styles.Taskcomponent}>
              <Tasks />
          </Paper>
               </div> 
               <div className="icon">     
                      <Paper zDepth={5} style={styles.Geocomponent}>
      <GeoFence />
      </Paper>
      </div>
      </div>
      </div>
      </div>
            </div>
    );
  }
}

export default App;

