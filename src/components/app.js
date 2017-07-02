import React from 'react';
import ButtonsGroup from './buttons-group';
import ListingsHub from './listings-hub';

class App extends React.Component {
  render() {
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