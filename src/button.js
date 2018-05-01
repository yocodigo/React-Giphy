import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

let styles = {
    marginTop: 30
}

const ButtonExampleEmphasis = () => (
    <Button className={'primary'} style={styles}>Giphy Me!</Button>
)

export default ButtonExampleEmphasis;

// let apiKey = 'dc6zaTOxFJmzC';
// let searchValue = 'cats';
// let width = 200;
// let height = 200;
// let giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag='+searchValue;

// export default class button extends Component {

//     render() {
//         return (
//            <button>Press Here</button>
//         )
//     }
// }