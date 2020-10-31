import '../App.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Profile() {
  const props = {
    lastName: 'Battesti',
    firstName: 'Saveriu',
    mail: 'saveriubattesti@gmail.com',
    adress: 'Résidence Les Collines du Ricanto',
    zipCode: '20090',
  };

  const tfStyle = {
    width: "90%",
    marginTop: "20px",
  };

  const profileContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={profileContainerStyle}>
      <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='Last Name' defaultValue={props.lastName} />
      <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='First Name' defaultValue={props.firstName} />
      <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='E-mail' defaultValue={props.mail} />
      <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='Adress' defaultValue={props.adress} />
      <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='Zip Code' defaultValue={props.zipCode} />
      <Button style={{ marginTop: "20px" }} variant="contained" color="secondary">Save</Button>
    </div>
  );
}