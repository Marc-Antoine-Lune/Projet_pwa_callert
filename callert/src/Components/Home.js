import React from 'react';
import Drawer from './NavDrawer';


import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CallIcon from '@material-ui/icons/Call';
import Article from './Article'
import MapL from './MapL'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  marg:{
     marginTop:"20px",
  
  },
  fab: {
    margin: theme.spacing.unit,
    height: 140,
    width: 140
  },
  smll:{
    [theme.breakpoints.down("xs")]: {
        justifyContent: "center"
      },
      [theme.breakpoints.down("md")]: {
        justifyContent: "center"
      }
  },
  paper: {
    position: 'relative',
       textAlign: 'center',
       padding:"50px",
    
    height: 140,

    color: theme.palette.text.secondary,
  },
  buttonStyle:{

      color:"secondary",
      
      borderRadius: "100%",
        size:"large"
        
  }
}));


const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};
const name1 = [{text:'J ai eu un accident'},{text:'Je suis temoin d un accident '},{text:'Je ne me sens pas bien'}];


export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

<Grid container spacing={3}>

<Grid container  xs={12} md={3} lg={2} className={classes.smll} >  
 
<Grid item >
<Fab color="secondary" aria-label="Edit" className={classes.fab} > 
<CallIcon style={{ fontSize: 60 }}></CallIcon>
</Fab>
</Grid>

</Grid>


<Grid container xs={12} md={9} lg={10} spacing={3} className={classes.marg}>


{name1.map(todo => <Grid item xs={12} md={4} lg={4}>
 <Article name={todo}/> </Grid>)}


</Grid>

</Grid>

<Grid container spacing={3} className={classes.marg} >
<MapL></MapL>
</Grid>

    </div>
  );
  }