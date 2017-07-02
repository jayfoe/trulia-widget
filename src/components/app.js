import React from 'react';
import axios from 'axios';
import ButtonsGroup from './buttons-group';
import ListingsHub from './listings-hub';

class App extends React.Component {
  render() {
    axios.get('/data/batmanRealty.json')
      .then((response) => {
        console.log(response.data);
      })

    axios.get('/data/supermanRealty.json')
      .then((response) => {
        console.log(response.data);
      })
    return (
      <div>
        <h4>Awesome Listings Widget</h4>
        <ButtonsGroup />
        <ListingsHub />
      </div>
    );
  }
}

export default App;