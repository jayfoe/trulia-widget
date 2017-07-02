import React from 'react';
import axios from 'axios';
import ButtonsGroup from './buttons-group';
import ListingsHub from './listings-hub';

class App extends React.Component {
  render() {
    axios.get('/data/batmanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let batmanData = JSON.parse(cleaned);
      })

    axios.get('/data/supermanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let supermanData = JSON.parse(cleaned);
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