import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Link } from 'react-router-dom';
import MapIcon from '@material-ui/icons/Map';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginLeft: -8,
    
  },
  indicator : {
    color : 'white'
  },
  text:{
      color: 'rgba(255, 255, 255, 0.5)'
  },
  tabBackground: {  
      backgroundColor: '#F50357',
      position: 'fixed',
      bottom: 0,
      width: '105%'

  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        className={classes.tabBackground}
      >
        <Tab className={classes.indicator} component={Link} to="/home"  label="Home" icon={<HomeIcon/>} />
        <Tab className={classes.indicator} component={Link} to="/profile"  label="Profile" icon={<PersonIcon/>}  />
        <Tab className={classes.indicator} component={Link} to="/blog" label="Help" icon={<LocalHospitalIcon/>}  />
        <Tab className={classes.indicator}  component={Link} to="/map" label="Map" icon={<MapIcon/>}  />

      </Tabs>
    </Paper>
  );
}