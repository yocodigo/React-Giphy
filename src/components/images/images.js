import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './styles.js';

const ImageExampleCircular = () => (

  <Image alt='image' style={styles} src={require('./bali.png')} size='medium' as='a'
  href='http://google.com'
  target='_blank'/> 
  

)

export default ImageExampleCircular;
