import '../App.css';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loading from 'react-loading-spinkit';
import NavBar from './NavBar'
import NavDrawer from './NavDrawer'
import firebase from 'firebase';


const API = 'https://us-central1-callert-b38f5.cloudfunctions.net/webApi/api/v1/users/';
// TODO : id dynamique

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      firstName: null,
      email: null,
      contactNumber: null,
      adress: null,
      zipCode: null,
      id: null,
      saveStatus: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactNumberChange = this.handleContactNumberChange.bind(this);
    this.handleAdressChange = this.handleAdressChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handleContactNumberChange(e) {
    this.setState({ contactNumber: e.target.value })
  }

  handleAdressChange(e) {
    this.setState({ adress: e.target.value })
  }

  handleZipCodeChange(e) {
    this.setState({ zipCode: e.target.value })
  }

  handleSubmit = (e) => {
    fetch(API + this.state.id, {
      method: 'PUT',
      body: JSON.stringify(
        this.state
      ),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if(response.status == 204) this.setState({
        saveStatus: true
      })
    })
    e.preventDefault();
  }

  componentDidMount() {
    this.state.id = firebase.auth().currentUser.uid;
    fetch(API + this.state.id)
      .then( res => 
        res.json()
      ).then( (result) => {
        this.setState({
          name: result.data.name,
          firstName: result.data.firstName,
          email: result.data.email,
          contactNumber: result.data.contactNumber,
          adress: result.data.adress,
          zipCode: result.data.zipCode,
        })
      })
  }

  render() {
    const tfStyle = {
      width: "90%",
      marginTop: "10px",
    };

    const profileContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 5,
    };

    if (this.state.name === null || this.state.firstName === null || this.state.email === null ||
       this.state.contactNumber === null || this.state.adress === null || this.state.zipCode === null) {
      console.log('loading...')
      return (
        <div style={{ height: '100vh', width: '100vw' }}>
          <NavDrawer/>
          <Loading
            show={true}
            name='circle'
            color='#F50357'
          />
          <NavBar/>
        </div>
      );
    }

    return (
      <div>
      <NavDrawer/>
      <form style={profileContainerStyle} onSubmit={this.handleSubmit}>

        <TextField
          style={tfStyle}
          variant="outlined"
          id="name" color="primary"
          label='Last Name'
          defaultValue={this.state.name}
          onChange={this.handleNameChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="firstName"
          color="primary"
          label='First Name'
          defaultValue={this.state.firstName}
          onChange={this.handleFirstNameChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="email"
          color="primary"
          label='Email Adress'
          defaultValue={this.state.email}
          onChange={this.handleEmailChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="adress"
          color="primary"
          label='Postal Adress'
          defaultValue={this.state.adress}
          onChange={this.handleAdressChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="zipCode"
          color="primary"
          label='Zip Code'
          defaultValue={this.state.zipCode}
          onChange={this.handleZipCodeChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="contactNumber"
          color="primary"
          label='Contact Phone Number'
          defaultValue={this.state.contactNumber}
          onChange={this.handleContactNumberChange}
        />
        <Button
          type="submit"
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
        >
          Save
          </Button>
          <h5 style={{color:"rgb(63, 81, 181)"}} >{this.state.saveStatus ? 'Profile saved' : ''}</h5>
      </form>
      <NavBar/>
      </div>
    );
  }
}

export default Profile;