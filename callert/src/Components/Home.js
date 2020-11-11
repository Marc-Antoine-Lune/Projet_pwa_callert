import React from 'react';
import NavBar from './NavBar'
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Icon, RootRef } from '@material-ui/core';
import './home.css';
import { useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SecurityIcon from '@material-ui/icons/Security';
import AmbulanceIcon from '@material-ui/icons/AirportShuttle';
import Location from './Location'

const useStyles = makeStyles({
  redCall : {
    width: 150,
    height : 150,
    borderRadius: 100,
    backgroundColor: 'red',
    color: 'white',
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root : {
    width: 150,
    height : 150,
    borderRadius: 100,
    backgroundColor: 'red',
    color: 'white',
    "&:hover": {
        backgroundColor: "red"
    }
  
  },
  cards:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  card : {
    width: 100, 
    height: 100
  }
});




export default function Home() {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);

  useEffect(()=>{
    var timer=0;
    var timerInterval;
    var timerIntervalPompier;
    var button = document.getElementById('item');
    var pompier = document.querySelector('#pompier');

    button.addEventListener("mousedown", () => {
        console.log("pressed click")
        timerInterval = setInterval(() => {
          timer = timer + 60;
          document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
          if(timer>170) window.alert("calling")
        }, 1000);
    }, false);

    button.addEventListener("mouseup", () => {
      console.log("unpressed click")
      timer = 0;
      clearInterval(timerInterval);
      document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"

    }, false);

    button.addEventListener("touchstart", () => {
      console.log("pressed button")
      timerInterval = setInterval(() => {
        timer = timer + 60;
        document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
      }, 1000);
  }, false);

  button.addEventListener("touchend", () => {
    console.log("unpressed button")
    timer = 0;
    clearInterval(timerInterval);

    document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"
  }, false);

  button.addEventListener("touchcancel", () => {
    console.log("unpressed cancel")
    clearInterval(timerInterval);
    timer = 0;
    document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"
  }, false);

  button.addEventListener("touchleave", () => {
    console.log("unpressed leave")
    clearInterval(timerInterval);
    timer = 0;
    document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"
  }, false);



  pompier.addEventListener("mousedown", () => {
    console.log("pressed pompier")
    timerInterval = setInterval(() => {
      timer = timer + 60;
      document.querySelector('#pompier').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
      if(timer>170) window.alert("calling")
    }, 1000);
}, false);

pompier.addEventListener("mouseup", () => {
  console.log("unpressed pompier")
  clearInterval(timerInterval);
  timer = 0;
  document.querySelector('#pompier').style.boxShadow = "none";
  document.querySelector('#pompier').style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

}, false);
      

      pompier.addEventListener("touchstart", () => {
        console.log("pressed")
        timerInterval = setInterval(() => {
          timer = timer + 60;
          document.querySelector('#pompier').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
          if(timer>170) window.alert("calling")
        }, 1000);
    }, false);
    
    pompier.addEventListener("touchend", () => {
      console.log("unpressed")
      clearInterval(timerInterval);
      timer = 0;
      document.querySelector('#pompier').style.boxShadow = "none";
      document.querySelector('#pompier').style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";
    
    }, false);
          

          pompier.addEventListener("touchleave", () => {
            console.log("pressed")
            timerInterval = setInterval(() => {
              timer = timer + 60;
              clearInterval(timerInterval);
              document.querySelector('#pompier').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
              if(timer>170) window.alert("calling")
            }, 1000);
        }, false);
        

              })
          
  return (
    <div>
      <h2>In case of emergency</h2>
      <p>Choose a service to call</p>
      <NavBar></NavBar>
      <div class="cards" className={classes.cards}>
          <Card className={classes.card} >
            <Button id="pompier" style={{height: '100%'}}>
              <WhatshotIcon/>
              <p>Pompier</p>
            </Button>
          </Card>
          <Card className={classes.card} >
          <Button id="ambulance" style={{height: '100%'}}>
              <AmbulanceIcon/>
              <p> Samu</p>
            </Button>
          </Card>
          <Card className={classes.card} >
          <Button id="police" style={{height: '100%'}}>
              <SecurityIcon/>
              <p> Police</p>
            </Button>
          </Card>
          
      </div>
      <Box>
      <h2>Not sure what to do</h2>
      <p>Hold this button</p>
      <Button id="item" classes={{root: 'redButton'}} className={classes.redCall, classes.root}><CallIcon/></Button>
      </Box>  
      <br></br>
      <div>
        <Location/>
      </div>
    </div>
    
  );
  }