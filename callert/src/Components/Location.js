import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Button from '@material-ui/core/Button'



function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();

  const handleOpen = () => {
    setOpen(true);
    getLocation()
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getLocation(){
    console.log("location")
    if(!navigator.geolocation) {
      console.log='Geolocation is not supported by your browser';
    } else {
      const position = navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  
  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);

  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Your Position</h2>
      <p id="simple-modal-description">
       latitude : {latitude} <br/>
       longitude : {longitude}
       
      </p>
    </div>
  );

  return (
    <div style={{cursor: 'pointer'}}>
        <Button onClick={handleOpen} style={{border: "none", backgroundColor:"transparent"}}>
            <h3>Get your position</h3>
            <MyLocationIcon style={{fontSize: 55, color: '#3f51b5'}}/>
        </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}