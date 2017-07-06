import React, { Component } from 'react';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import ListHome from './list-home';
import $ from 'jquery';

class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batmanArray: [],
      supermanArray: []
    }
  }

  componentWillMount() {
    let batmanData = window.__BATMAN_DATA__;
    let batmanArray = [];

    for (let key in batmanData) {
      if (batmanData.hasOwnProperty(key)) {
        batmanData[key].address = key;
        batmanArray.push(batmanData[key]);
      }
    }

    let supermanData = window.__SUPERMAN_DATA__.items;

    //let combinedData = batmanArray.concat(supermanData);

    // for (let i = 0; i < combinedData.length; i++) {
    //   for (let j = 1; j < combinedData.length; j++) {
    //     if (combinedData[i].address === combinedData[j].address) {
    //       combinedData[i] = $.extend(true, [], combinedData[i], combinedData[j]);
    //       combinedData.splice(j, 1);
    //     }
    //   }
    // }

    // for (let i = 0; i < batmanArray.length; i++) {
    //   for (let j = 0; j < supermanData.length; j++) {
    //     if (batmanArray[i] !== supermanData[j]) {

    //     }
    //   }
    // }

    this.setState({ batmanArray, supermanArray: supermanData });
  }

  render() {
    let batmanGroup = this.state.batmanArray.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    let doubleData = this.state.batmanArray.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    return (
      <ListGroup>
          {batmanGroup || 'Please wait, loading listings...'}
          {doubleData}
      </ListGroup>
    );
  }
}

export default ListingsHub;