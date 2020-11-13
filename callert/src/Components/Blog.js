import '../App.css';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar'
import NavDrawer from './NavDrawer'

const API = 'https://us-central1-callert-b38f5.cloudfunctions.net/webApi/api/v1/articles/';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then( res => 
        res.json()
      ).then(result => {
        this.setState({
          articles: result
        })
      })
  }

  render() {
    const { articles } = this.state;

    const divContainerStyle = {
      marginTop: 10,
      marginBottom: 32
    };

    return (
      <div style={divContainerStyle}>
        <NavDrawer/>
        <ul>
          {articles.map(article =>
            <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                {article.data.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {article.data.text}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {article.data.view} views
              </Typography>
            </CardContent>
          </Card> )}
        </ul>
        <NavBar/>
      </div>
    );
  }
}

export default Blog;