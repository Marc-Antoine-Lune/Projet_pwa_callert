import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'
import Home from './Components/Home'
import Blog from './Components/Blog'
import SignUp from './Components/SignUp'
import NavDrawer from './Components/NavDrawer'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex",
  marginRight: "40px",
  marginTop: "100px"
  }

});

function App(props) {

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <NavDrawer/>}/>
      
      <Switch>
        <Route exact path="/" exact component={SignIn} />
        <Route exact from="/home" render={props => <Home {...props} />} />
        <Route path="/Profile" render={props => <Profile {...props} />}  />
        <Route path="/blog" component={Blog} />
        <Route path="/signUp" component={SignUp} />
      </Switch>

    </div>
  );
}

export default App;
