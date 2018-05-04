import React from 'react';
import './App.css';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';
// import axios from 'axios';
import GiphyButton from './components/button';
import ImageExampleCircular from './components/images'

// import button from './button.js';

// let apiKey = 'dc6zaTOxFJmzC';
// let searchValue = 'cats';
// let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

const containerStyles = {
  width: 'auto',
  height: '75'
}

const columnStyles = {
  padding: '0',
  float: 'right'
  
}

class App extends React.Component {

  render() {
    return (
      <Container style={ containerStyles } textAlign='center'>
        <Segment inverted>
          <Header as='h1'>Get Giphy with React!</Header>    
        </Segment>
        <Grid columns={8} divided>
          <Grid.Column style= { columnStyles }> 
              <GiphyButton/>
          </Grid.Column>
          <Grid.Column> 
            <ImageExampleCircular style= { columnStyles.paddingLeft }/> 
          </Grid.Column>
          <Grid.Column> 
            <ImageExampleCircular style= { columnStyles.paddingLeft }/> 
          </Grid.Column>    
        </Grid>
      </Container>
    );
  }
}

export default App;
