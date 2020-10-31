import '../App.css';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loading from 'react-loading-spinkit';

const API = 'https://us-central1-callert-b38f5.cloudfunctions.net/webApi/api/v1/users/';
// TODO : id dynamique
const ID = '2';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch(API + ID)
      .then(response => response.json())
      .then(result => this.setState({ user: result.data }));
  }

  render() {
    const tfStyle = {
      width: "90%",
      marginTop: "20px",
    };

    const profileContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

    const loadingStyle = {
      color: 'red',
    }

    const user = this.state.user;

    if (user === null) {
      return (
        <div style={{ height: '100vh', width: '100vw' }}>
          <Loading show={true} name='circle' color='#F50357' />
        </div>
      );
    }

    return (
      <div style={profileContainerStyle}>
        <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='Last Name' defaultValue={user.name} />
        <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='First Name' defaultValue={user.firstName} />
        <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='E-email' defaultValue={user.email} />
        <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='Adress' />
        <TextField style={tfStyle} variant="outlined" id="standard-full-width" color="secondary" label='Zip Code' defaultValue={user.contactNumber} />
        <Button style={{ marginTop: "20px" }} variant="contained" color="secondary">Save</Button>
      </div>
    );
  }
}

export default Profile;