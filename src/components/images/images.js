import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'
import Styles from './images/styles.js';

const ImageExampleCircular = () => (

  <div>
    before
    <Image width='200' height='200' src='./images/bali.png' size='medium' circular />
    after
  </div>
)

export default ImageExampleCircular
