import '../App.css';
import React, { Component } from 'react';

import NavBar from './NavBar'
import NavDrawer from './NavDrawer'
import Loading from 'react-loading-spinkit';


const API = 'https://us-central1-callert-b38f5.cloudfunctions.net/webApi/api/v1/article/';



class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }



  componentDidMount() {    
      fetch(API + this.props.location.articleId.slice(-1))
        .then( res => 
          res.json()
        ).then(result => {
          this.setState({
            article: result.data
          })
        })
  }

  render() {


    return (
      <div>
        <NavDrawer/>
        <h2>{this.state.article.title}</h2>
        <p>{this.state.article.text}</p>
        <NavBar/>
      </div>
    );
  }
}

export default Article;