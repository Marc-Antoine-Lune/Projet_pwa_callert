import { Divider } from '@material-ui/core';
import React from 'react';
import MapL from './MapL'
import NavBar from './NavBar'
import NavDrawer from './NavDrawer'

export default function MapPage() {


  return (
      <div>
          <NavDrawer/>
          <h2>Don't know where to go</h2>
          <p>Look this map</p>
          <MapL/>
          <NavBar/>
      </div>

  );
}