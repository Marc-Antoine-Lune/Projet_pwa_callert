import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'
import Home from './Components/Home'
import Blog from './Components/Blog'


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
