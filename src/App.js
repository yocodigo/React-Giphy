import React from 'react';
import './App.css';
import { Grid, Container, Segment, Header, Button } from 'semantic-ui-react';
import ImageExampleCircular from './components/images'
import 'semantic-ui-css/semantic.min.css';
import Styles from './components/button/styles.js';
import axios from 'axios';

let apiKey = 'dc6zaTOxFJmzC';
let searchValue = 'cats';
let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

const containerStyles = {
  width: 'auto',
  height: '75'
}

const columnStyles = {
  padding: '0',
  float: 'right'
  
}

class App extends React.Component {
  
  state = {
    word: '',
    giphy: []
  }

  handleClick = () => {
    axios.get(giphyUrl)
    .then(response =>  this.setState({ giphy: [...this.state.giphy, response.data.data.image_original_url ]})
    )
    console.log("This is the result from the state change: " + this.state.giphy);
  }

  render() {
    return (
      <Container style={ containerStyles } textAlign='center'>
        <Segment className="ui tertiary" raised>
          <Header as='h1'>Get Giphy with React!</Header>    
        </Segment>
        <Grid columns={8} >
          <Grid.Column style= { columnStyles }> 
            <Button  onClick={ this.handleClick } className="ui inverted green button" style={Styles}>Giphy Me!</Button>
          </Grid.Column>
          {this.state.giphy.map((giph) => (
          <Grid.Column> 
            <ImageExampleCircular src={ giph }/> 
          </Grid.Column>
          ))}    
        </Grid>
      </Container>
    );
  }
}

export default App;
