import React from 'react';
import './App.css';
// import axios from 'axios';
import ButtonExampleEmphasis from './components/button/button.js';
import ImageExampleCircular from './components/images/images.js'

// import button from './button.js';

// let apiKey = 'dc6zaTOxFJmzC';
// let searchValue = 'cats';
// let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {

  //   }

  // }

  handleClick() {
    console.log("it worked!")
    // axios.get(giphyUrl)
    // .then(response => this.setState)
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Giphy with React!</h1>
        </header> 
          <ButtonExampleEmphasis onClick={this.handleClick()}/>
          <ImageExampleCircular />
      </div>
    );
  }
}

export default App;
