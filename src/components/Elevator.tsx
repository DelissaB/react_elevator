import React, { useState} from 'react';
import Floor from './Floor';
import LeftDoor from './LeftDoor';
import RightDoor from './RightDoor';
import { Slide } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
interface IElevatorProps {
  floor: number;
  errorMessage: string;
  elevatorAction: (floor: number) => void;
}

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
      right: '45%',
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



export default function Elevator()  { 
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
      <div className={classes.curtain}>

      <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Show"
    />
        
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


