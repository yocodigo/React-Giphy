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