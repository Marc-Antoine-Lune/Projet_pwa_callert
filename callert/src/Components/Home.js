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
import NavDrawer from './NavDrawer'

const useStyles = makeStyles({
  redCall : {
    width: 120,
    height : 120,
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
    width: 120,
    height : 120,
    borderRadius: 100,
    backgroundColor: '#F50357',
    color: 'white',
    "&:hover": {
        backgroundColor: "#F50357"
    }
  
  },
  cards:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  card : {
    width: 100, 
    height: 80
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
    var ambulance = document.querySelector('#ambulance');
    var police = document.querySelector('#police');

    button.addEventListener("mousedown", (e) => {
        console.log("pressed click")
        e.preventDefault();
        timerInterval = setInterval(() => {
          timer = timer + 60;
          document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
          if(timer>170){
            clearInterval(timerInterval);
            timer = 0;
            window.alert("you're calling 112")
            document.querySelector('#item').style.boxShadow = "-5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"
            document.querySelector('#item').style.backgroundColor = "#f50357";
          } 
        }, 1000);
    }, false);

    button.addEventListener("mouseup", (e) => {
      e.preventDefault();
      console.log("unpressed click")
      timer = 0;
      clearInterval(timerInterval);
      document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"

    }, false);

    
    button.addEventListener("touchstart", (e) => {
      console.log("pressed click")
      e.preventDefault();
      timerInterval = setInterval(() => {
        timer = timer + 60;
        document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px #f38383"
        if(timer>170){
          clearInterval(timerInterval);
          timer = 0;
          window.alert("you're calling 112")
          document.querySelector('#item').style.boxShadow = "-5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"
          document.querySelector('#item').style.backgroundColor = "#f50357";
        } 
      }, 1000);
  }, false);

  button.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("unpressed click")
    timer = 0;
    clearInterval(timerInterval);
    document.querySelector('#item').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset 5px 5px 5px #f38383"

  }, false);


   



  pompier.addEventListener("mousedown", (e) => {
    e.preventDefault();
    console.log("pressed pompier")
    timerInterval = setInterval(() => {
      timer = timer + 60;
      document.querySelector('#pompier').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px red"
      if(timer>170){
        clearInterval(timerInterval);
        window.alert("youre're calling 18")
        timer = 0;    
        document.querySelector('#pompier').style.backgroundColor = "#3f51b5"
        document.querySelector('#pompier').style.boxShadow = "none"

      } 
      }, 1000);

  }, false);

  pompier.addEventListener("mouseup", (e) => {
    e.preventDefault();
    console.log("unpressed pompier")
    clearInterval(timerInterval);
    timer = 0;
    document.querySelector('#pompier').style.boxShadow = "none";
    document.querySelector('#pompier').style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

  }, false);

  pompier.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("pressed pompier")
    timerInterval = setInterval(() => {
      timer = timer + 60;
      document.querySelector('#pompier').style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px red"
      if(timer>170){
        clearInterval(timerInterval);
        window.alert("youre're calling 18")
        timer = 0;    
        document.querySelector('#pompier').style.backgroundColor = "#3f51b5"
        document.querySelector('#pompier').style.boxShadow = "none"

      } 
      }, 1000);

  }, false);

  pompier.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("unpressed pompier")
    clearInterval(timerInterval);
    timer = 0;
    document.querySelector('#pompier').style.boxShadow = "none";
    document.querySelector('#pompier').style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

  }, false);

  ambulance.addEventListener("mousedown", (e) => {
    e.preventDefault();
    timerInterval = setInterval(() => {
      timer = timer + 60;
      ambulance.style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px red"
      if(timer>170){
        clearInterval(timerInterval);
        window.alert("youre're calling 15")
        timer = 0;    
        ambulance.style.backgroundColor = "#3f51b5"
        ambulance.style.boxShadow = "none"

      } 
      }, 1000);

  }, false);

  ambulance.addEventListener("mouseup", (e) => {
    e.preventDefault();
    clearInterval(timerInterval);
    timer = 0;
    ambulance.style.boxShadow = "none";
    ambulance.style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

  }, false);

  ambulance.addEventListener("touchstart", (e) => {
    e.preventDefault();
    timerInterval = setInterval(() => {
      timer = timer + 60;
      ambulance.style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px red"
      if(timer>170){
        clearInterval(timerInterval);
        window.alert("youre're calling 15")
        timer = 0;    
        ambulance.style.backgroundColor = "#3f51b5"
        ambulance.style.boxShadow = "none"

      } 
      }, 1000);

  }, false);

  ambulance.addEventListener("touchend", (e) => {
    e.preventDefault();
    clearInterval(timerInterval);
    timer = 0;
    ambulance.style.boxShadow = "none";
    ambulance.style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

  }, false);
      
  police.addEventListener("mousedown", (e) => {
    e.preventDefault();
    timerInterval = setInterval(() => {
      timer = timer + 60;
      police.style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px red"
      if(timer>170){
        clearInterval(timerInterval);
        window.alert("youre're calling 17")
        timer = 0;    
        police.style.backgroundColor = "#3f51b5"
        police.style.boxShadow = "none"

      } 
      }, 1000);

  }, false);

  police.addEventListener("mouseup", (e) => {
    e.preventDefault();
    clearInterval(timerInterval);
    timer = 0;
    police.style.boxShadow = "none";
    police.style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

  }, false);

  police.addEventListener("touchstart", (e) => {
    e.preventDefault();
    timerInterval = setInterval(() => {
      timer = timer + 60;
      police.style.boxShadow = " -5px -5px 20px #fff, 5px 5px 20px #9b6772, inset -5px -5px 5px #fe9090, inset " + timer + "px 5px 5px red"
      if(timer>170){
        clearInterval(timerInterval);
        window.alert("youre're calling 17")
        timer = 0;    
        police.style.backgroundColor = "#3f51b5"
        police.style.boxShadow = "none"

      } 
      }, 1000);

  }, false);

  police.addEventListener("touchend", (e) => {
    e.preventDefault();
    clearInterval(timerInterval);
    timer = 0;
    police.style.boxShadow = "none";
    police.style.boxShadow = "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

  }, false);
  
   
        

              })
          
  return (
    <div>
      <div>
        <NavDrawer/>
      </div>
      <div style={{lineHeight: 'initial'}}>
        <h2>In case of emergency</h2>
        <p>Choose a service to call and hold the button</p>
      </div>
      <div class="cards" className={classes.cards}>
          <Card className={classes.card} style={{backgroundColor: '#3f51b5'}} >
            <Button id="pompier" style={{height: '100%'}}>
              <WhatshotIcon style={{color: 'white', position: 'relative', top: "-23px"}}/>
              <p style={{color: 'white', position: "relative", right:"25px"}} >Fireman</p>
            </Button>
          </Card>
          <Card className={classes.card} style={{backgroundColor: '#3f51b5'}} >
          <Button id="ambulance" style={{height: '100%'}}>
              <AmbulanceIcon style={{color: 'white', position: 'relative', top: "-23px"}}/>
              <p style={{color: 'white', position: "relative", right:"25px"}}>Ambulance</p>
            </Button>
          </Card>
          <Card className={classes.card} style={{backgroundColor: '#3f51b5'}} >
          <Button id="police" style={{height: '100%', width: '100%'}}>
              <SecurityIcon style={{color: 'white', position: 'relative', top: "-23px"}}/>
              <br/>
              <p style={{color: 'white', position: "relative", right:"25px"}}> Police</p>
            </Button>
          </Card>
          
      </div>
      <div style={{lineHeight: 'initial'}}>
        <h2>Not sure what to do</h2>
        <p>Hold this button</p>
        <Button id="item" classes={{root: 'redButton'}} className={classes.redCall, classes.root}><CallIcon style={{fontSize: 50}}/></Button>
      </div>  
      <div>
        <Location/>
      </div>
      <NavBar></NavBar>
    </div>
    
    
  );
  }