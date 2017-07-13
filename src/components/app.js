import React from 'react';
import getHomes from './get-homes';
import ListingsHub from './listings-hub';

class App extends React.Component {
  render() {
    return (
      <ListingsHub mergedData={getHomes()} />
    );
  }
}

export default App;