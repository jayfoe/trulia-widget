import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ListHome from './list-home';

class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batmanArray: [],
      supermanArray: []
    }
  }

  componentDidMount() {
    let batmanData = window.__BATMAN_DATA__;
    let batmanArray = [];

    for (let key in batmanData) {
      if (batmanData.hasOwnProperty(key)) {
        batmanData[key].address = key;
        batmanArray.push(batmanData[key]);
      }
    }

    let supermanData = window.__SUPERMAN_DATA__.items;

    this.setState({ batmanArray, supermanArray: supermanData });
  }

  render() {
    let batmanGroup = this.state.batmanArray.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    return (
      <Grid>
        <Row>
          {batmanGroup}
        </Row>
      </Grid>
    );
  }
}

export default ListingsHub;