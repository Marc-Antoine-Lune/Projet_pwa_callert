import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';



ReactDOM.render( 
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);

	
if(navigator.serviceWorker) {
    console.log('sw')
    navigator.serviceWorker
        .register('serviceWorker.js')
        .catch(err => console.error('service worker NON enregistré', err));
}

