import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ListHome from './list-home';

class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supermanData: {},
      batmanArray: []
    }
  }

  componentDidMount() {
    let batmanData = window.__BATMAN_DATA__;
    let batmanArray = [];

    for (var key in batmanData) {
      if (batmanData.hasOwnProperty(key)) {
        batmanData[key].address = key;
        batmanArray.push(batmanData[key]);
      }
    }
    this.setState({ batmanArray });

    let supermanData = window.__SUPERMAN_DATA__;
    this.setState({ supermanData: supermanData.items });
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