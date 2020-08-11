import React, { Component } from 'react';
import Floor from './Floor';
import LeftDoor from './LeftDoor';
import RightDoor from './RightDoor';
import { Slide } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Sidenav from './Sidenav';
import  {Fragment} from 'react';
// interface IElevatorProps {
//   floor: number;
//   errorMessage: string;
//   elevatorAction: (floor: number) => void;
// }

const useStyles = makeStyles({
  curtain: {
      width: "%",
      height: "100vh",
      overflow: "hidden"
  },
  leftPanel: {
      // color: 'grey',
      float: 'right',
      background: 'grey',
      width: '100%',
      left: '55%',
      height: '100vh',
      position: 'fixed',
      zIndex: 2,
  },
  rightPanel: {
      // color: 'grey',
      float: 'left',
      background: 'grey',
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
  checkbox: {
      position: 'absolute',
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      zIndex: 100,
      opacity: 0
  },
  floor:{
      background: 'yellow',
      position: 'absolute',
      zIndex: 1,
      width: '49%',
      height: '98%'
  }
});

export default function Elevator()  { 
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
        <Fragment>
            <Sidenav />
        
        <div className={classes.curtain}>
            <div className={classes.floor}>
                <Floor />
            </div>

            <Slide timeout={2000} direction="left"   in={checked} mountOnEnter unmountOnExit>
              <div className={classes.leftPanel}>
                  <LeftDoor />
              </div>
            </Slide>
            
            
            <FormControlLabel 
      className={classes.checkbox}
      control={<Switch checked={checked} onClick={handleChange} />}
      label="Show"
          />
       
            <Slide timeout={2000} direction="right" in={checked} mountOnEnter unmountOnExit>
                <div className={classes.rightPanel}>
                    <RightDoor />
                </div>
            </Slide>
            
        
        </div>
</Fragment>
              )
          };




