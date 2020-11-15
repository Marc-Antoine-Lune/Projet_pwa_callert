import '../App.css';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar'
import NavDrawer from './NavDrawer'
import Loading from 'react-loading-spinkit';
import { Redirect } from 'react-router-dom'



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




  toArticle(id){
    this.props.history.push({
      pathname: '/article',
      articleId: id,
    })
  }

  render() {

    
  if (this.state.articles.length == 0){
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

    const divContainerStyle = {
      marginTop: 10,
      marginBottom: 32
    };

    const liStyle = {
      listStyle: "none",
      width: "200px",
      marginBottom: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      color: "white",
    };

    if (this.state.articles === null) {
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
      <h2>Need Help?</h2>
      <div style={divContainerStyle}>
        
        
        <ul style={{display: "flex", flexDirection: "column", justifyContent:"space-between", marginLeft: "-20px"}}>
          {this.state.articles.map(article =>
          <li style={liStyle} >
            <Card variant="outlined" style={{borderRadius: "10px", backgroundColor: "#3f51b5"}} onClick={() => this.toArticle(article.id)}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{color: "white"}}>
                {article.data.title}
              </Typography>
             {/* <Typography color="textSecondary" gutterBottom>
                {article.data.text}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {article.data.view} views
          </Typography>*/ }
            </CardContent>
          </Card></li> )
          
        }
        </ul>
        <NavBar/>
      </div>
      </div>
    );
  }
}

export default Blog;