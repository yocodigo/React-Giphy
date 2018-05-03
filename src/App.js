import React from 'react';
import './App.css';
import { Grid, Container, Segment } from 'semantic-ui-react';
// import axios from 'axios';
import ButtonExampleEmphasis from './components/button';
import ImageExampleCircular from './components/images'

// import button from './button.js';

// let apiKey = 'dc6zaTOxFJmzC';
// let searchValue = 'cats';
// let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

const styles = {
  width: 'auto',
  height: '75'
}
class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {

  //   }

  // }

  async _handleClick() {
    console.log('it worked!');
    // axios.get(giphyUrl)
    // .then(response => this.setState)
  }

  render() {
    return (
      <Container style={ styles  } textAlign='center'>
      <Segment inverted>
        <header className="App-header">
          <h1 className="App-title">Get Giphy with React!</h1>
        </header>
      </Segment>
      
        <Grid columns={8} stackable>
          <Grid.Column> 
              <ButtonExampleEmphasis onPress={ () => this._handleClick() }/>
          </Grid.Column>
          <Grid.Column> 
            <ImageExampleCircular /> 
          </Grid.Column>  
        </Grid>
      </Container>
    );
  }
}

export default App;
