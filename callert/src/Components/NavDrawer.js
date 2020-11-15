import React from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {auth, firestore} from '../FirebaseConfig';
import firebase from 'firebase';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '50px'
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#F50357",
    height: '50px',

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavDrawer = props =>{
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState();



  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        var uid = user.uid;
        console.log("uid" + uid)
        firebase.firestore().collection('userProfiles').doc(uid).get().then((result)=>{
          setFirstName(result.data().firstName);
        })      } else {
          setFirstName("Enter your name");

      }
    });
  });



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Grid item className={classes.iconButtonAvatar} >
              <IconButton color="inherit" >
                <Avatar style={{ backgroundColor: '#F50357', position: "relative", top: "-5px" }} alt="My Avatar" />

              </IconButton>
            </Grid>
            <Typography variant="h6" noWrap>
            {firstName}
          </Typography>

        </Toolbar>
      </AppBar>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
   
      </main>
    </div>
  );
}

export default withRouter(NavDrawer);

