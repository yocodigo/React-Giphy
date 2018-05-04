import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Styles from './styles.js';
import axios from 'axios';

let apiKey = 'dc6zaTOxFJmzC';
let searchValue = 'cats';
let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

export default class GiphyButton extends React.Component {

    handleClick = () => {
        axios.get(giphyUrl)
        // .then(response => this.setState)
        .then(response => console.log("You are connected to Giphy via Axios! This is your response: ") + console.log(response.data.data.image_original_url
        ))
      }

    render() {    
        return (
            <Button  onClick={ this.handleClick } className={'primary'} style={Styles}>Giphy Me!</Button>
        )
    }
}