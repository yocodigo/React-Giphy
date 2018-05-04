import React from 'react';
import './App.css';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';
import GiphyButton from './components/button';
import ImageExampleCircular from './components/images'

const containerStyles = {
  width: 'auto',
  height: '75'
}

const columnStyles = {
  padding: '0',
  float: 'right'
  
}

class App extends React.Component {

  render() {
    return (
      <Container style={ containerStyles } textAlign='center'>
        <Segment inverted color='blue' secondary raised>
          <Header as='h1'>Get Giphy with React!</Header>    
        </Segment>
        <Grid columns={8} >
          <Grid.Column style= { columnStyles }> 
              <GiphyButton />
          </Grid.Column>
          <Grid.Column> 
            <ImageExampleCircular style= { columnStyles.paddingLeft }/> 
          </Grid.Column>
          <Grid.Column> 
            <ImageExampleCircular style= { columnStyles.paddingLeft }/> 
          </Grid.Column>    
        </Grid>
      </Container>
    );
  }
}

export default App;
