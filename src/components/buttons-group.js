import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class ButtonsGroup extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Price</Button>
        <Button>Beds</Button>
        <Button>Sq. ft.</Button>
      </ButtonGroup>
    );
  }
}

export default ButtonsGroup;