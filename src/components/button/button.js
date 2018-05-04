import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

let styles = {
    marginTop: 30
}

export default class GiphyButton extends React.Component {

    handleClick = () => {
        console.log('it worked!');
        // axios.get(giphyUrl)
        // .then(response => this.setState)
      }

    render() {    
        return (
            <Button  onClick={ this.handleClick } className={'primary'} style={styles}>Giphy Me!</Button>
        )
    }
}