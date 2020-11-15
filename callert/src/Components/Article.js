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
    if (Object.keys(this.state.article).length == 0) {
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
        <h2>{this.state.article.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: this.state.article.text }} style={{width: '80%', marginRight: 'auto', marginLeft: 'auto'}} />  
        <NavBar/>
      </div>
    );
  }
}

export default Article;