import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import styles from './styles.js';

const ImageExampleCircular = (props) => (
  <Grid.Column> 
    <Image alt='image' style={styles} src={props.src} size='medium' as='a'
    href='http://google.com'
    target='_blank'
    rounded /> 
  </Grid.Column>
)

export default ImageExampleCircular;
