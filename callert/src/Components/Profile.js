import '../App.css';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loading from 'react-loading-spinkit';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const API = 'https://us-central1-callert-b38f5.cloudfunctions.net/webApi/api/v1/users/';
// TODO : id dynamique
const ID = '2';

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
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactNumberChange = this.handleContactNumberChange.bind(this);
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
    //console.log(e);
    fetch(API + ID, {
      method: 'PUT',
      body: JSON.stringify(
        this.state
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      return response.json()
    }).then(result => {
      this.setState({
        name: result.name,
        firstName: result.firstName,
        email: result.email,
        contactNumber: result.contactNumber,
        adress: result.adress,
        zipCode: result.zipCode,
      });
    });
    e.preventDefault();
  }

  componentDidMount() {
    fetch(API + ID)
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(result =>
        //console.log(result.data.contactNumber)
        this.setState({
          name: result.data.name,
          firstName: result.data.firstName,
          email: result.data.email,
          contactNumber: result.data.contactNumber,
          adress: result.data.adress,
          zipCode: result.data.zipCode,
        })
      );
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

    if (this.state.name === null || this.state.firstName === null || this.state.email === null ||
       this.state.contactNumber === null || this.state.adress === null || this.state.zipCode === null) {
      console.log('loading...')
      return (
        <div style={{ height: '100vh', width: '100vw' }}>
          <Loading
            show={true}
            name='circle'
            color='#F50357'
          />
        </div>
      );
    }

    return (
      <form style={profileContainerStyle} onSubmit={this.handleSubmit}>
        <Avatar
          style={{ backgroundColor: '#F50357' }}
        >
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          My profile
          </Typography>
        <TextField
          style={tfStyle}
          variant="outlined"
          id="name" color="secondary"
          label='Last Name'
          defaultValue={this.state.name}
          onChange={this.handleNameChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="firstName"
          color="secondary"
          label='First Name'
          defaultValue={this.state.firstName}
          onChange={this.handleFirstNameChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="email"
          color="secondary"
          label='Email Adress'
          defaultValue={this.state.email}
          onChange={this.handleEmailChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="adress"
          color="secondary"
          label='Postal Adress'
          defaultValue={this.state.adress}
          onChange={this.handleAdressChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="zipCode"
          color="secondary"
          label='Zip Code'
          defaultValue={this.state.zipCode}
          onChange={this.handleZipCodeChange}
        />
        <TextField
          style={tfStyle}
          variant="outlined"
          id="contactNumber"
          color="secondary"
          label='Contact Phone Number'
          defaultValue={this.state.contactNumber}
          onChange={this.handleContactNumberChange}
        />
        <Button
          type="submit"
          style={{ marginTop: "20px" }}
          variant="contained"
          color="secondary"
        >
          Save
          </Button>
      </form>
    );
  }
}

export default Profile;