import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import CameraIcon from '@material-ui/icons/Camera';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';


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
    backgroundColor: "red",
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



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
                <Avatar src="https://lh3.googleusercontent.com/-pJ4qGnMc7M8/Ux-xiYNmixE/AAAAAAAADOo/nau_N_va7_83c7fdthqrjj2bO_6P-uh2ACEwYChgbKtQDAL1OcqyP-IsF5LPc199boe9pRJPPt6l92z8iqnuCtO5OP0T_Dp6-gvFHi750UrpCrhcL17AC0Y1bNDXp3AqT8PonALz16OcWx294gGIBvByEAMaFfcc92Z6bQ8hagikjj6jGJTVLLG8wwc_7BM33MJlIqNtAe3zFS4YJ26_Aoeh1YPhZT6JCmyYfJdI9W1ZWAQUGLbCSJrBUoIGkLCHBWip7hT95zb4kJma-MwQdbq1Uz_oEu2t0y0AbB2qnvRn8R7v-SJ_VTsO4hbt5tftCy84eXxLcQK661dMsYKGaG0WKQmhY2AwpXoFni_fMlqG1DWdPhMThP2v9zfOzQXvE_pX-Pa77VJOV0SUcvYyZ61hjX826ScvKgdAN9gRDNtlUVqhxSEX85fwqFIpxiY7RkHdW_WVljt-a1Hw0Ud6qD50vNZa0P8F0PZvR-bSe6t4tuy5tq5CDpwXWIIlfPnD7wnwnvfgwHbklNgtpswyyj_h9He1DKM2I0-uLLvjuplPiSvYZ7WB--gXrsUlpVQuzm03VFIaWF_h-me2yma7geEA6ViGOIcv8szKZYQVb19rDrgHPm0THPqWtVbEa6p8I1A7SJdsvHzK4y7vHZ2qsO42MJZZRMJSm_fwF/w326-h220-p/ProfilePhotos" alt="My Avatar" />
              </IconButton>
            </Grid>
            <Typography variant="h6" noWrap>
            Javalo
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

