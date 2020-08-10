import React, {Component} from 'react';
import Floor from './Floor';
import LeftDoor from './LeftDoor';
import RightDoor from './RightDoor';
import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
  curtain: {
      width: "%",
      height: "100vh",
      overflow: "hidden"
  },
  leftPanel: {
      color: 'grey',
      float: 'left',
      background: 'red',
      width: '100%',
      left: '25%',
      height: '100vh',
      position: 'fixed',
      zIndex: 2,
  },
  rightPanel: {
      color: 'grey',
      float: 'left',
      background: 'orange',
      width: '100%',
      right: '40%',
      height: '100vh',
      position: 'fixed',
      zIndex: 2,
  },
  // curtainWrapper: {
  //     width: "100%",
  //     height: "100%",
  //     overflow: 'hidden'
  // },
  // curtainPanel: {
  //     background: 'orange',
  //     width: '500%',
  //     height: '100vh',
  //     position: 'relative',
  //     zIndex: 2,
  // },
  // checkbox: {
  //     position: 'absolute',
  //     cursor: 'pointer',
  //     width: '100%',
  //     height: '100%',
  //     zIndex: 100,
  //     opacity: 0
  // },
  floor:{
      background: '#333',
      position: 'absolute',
      zIndex: 1,
      width: '49%',
      height: '98%'
  }
});



function Elevator()  { 

const classes = useStyles();

    return (
      <div className={classes.curtain}>
        <div className={classes.floor}>
          <Floor />
        </div>
        <div className={classes.leftPanel}>
          <LeftDoor />
        </div>
        <div className={classes.rightPanel}>
          <RightDoor />
        </div>  
     </div>
      )
  };


export default Elevator;