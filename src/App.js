import React from 'react';
import './App.css';
import ButtonExampleEmphasis from './button.js';

// import button from './button.js';

// let apiKey = 'dc6zaTOxFJmzC';
// let searchValue = 'cats';
// let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

class App extends React.Component {

  handleClick() {
    console.log("it worked!")
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Giphy with React!</h1>
        </header> 
          <ButtonExampleEmphasis onClick={this.handleClick()}/>
      </div>
    );
  }
}

export default App;
