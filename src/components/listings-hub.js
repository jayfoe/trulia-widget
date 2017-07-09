import React, { Component } from 'react';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import ListHome from './list-home';
import _ from 'lodash';
import $ from 'jquery';

class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mergedData: []
    }
  }

  componentWillMount() {
    let batmanData = window.__BATMAN_DATA__;
    let batmanArray = [];
    let batmanObject = [];

    for (let key in batmanData) {
      batmanData[key].address = key;
      batmanArray.push(batmanData[key]);
    }

    for (let i = 0; i < batmanArray.length; i++) {
      batmanObject.push({
        address: batmanArray[i].address,
        price: '$' + batmanArray[i].cost,
        beds: batmanArray[i].beds + ' beds',
        baths: batmanArray[i].baths + ' baths',
        sqft: batmanArray[i].sq_ft + ' sq ft',
        img: batmanArray[i].img,
        url: batmanArray[i].url
      });
    }

    var batmanLookup = {};
    for (var i = 0; i < batmanObject.length; i++) {
      batmanLookup[batmanObject[i].address] = batmanObject[i];
    }

    let supermanData = window.__SUPERMAN_DATA__.items;
    let supermanObject = [];

    for (let j = 0; j < supermanData.length; j++) {
      supermanObject.push({
        address: supermanData[j].address,
        price: '$' + supermanData[j].price.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        beds: supermanData[j].beds + ' beds',
        baths: supermanData[j].baths + ' baths',
        sqft: supermanData[j].sqft + ' sq ft',
        built: 'Built in ' + supermanData[j].built,
        img: supermanData[j].thumb,
        url: supermanData[j].url
      });
    }

    let mergedData = [];
    for (var i = 0; i < supermanObject.length; i++) {
      if (supermanObject[i].address in batmanLookup) {
        let key = supermanObject[i].address;
        mergedData.push({
          address: batmanLookup[key].address || supermanObject[i].address,
          price: batmanLookup[key].price || supermanObject[i].price,
          beds: batmanLookup[key].beds || supermanObject[i].beds,
          baths: batmanLookup[key].baths || supermanObject[i].baths,
          sqft: batmanLookup[key].sqft || supermanObject[i].sqft,
          built: batmanLookup[key].built || supermanObject[i].built,
          img: batmanLookup[key].img || supermanObject[i].img,
          url: batmanLookup[key].url || supermanObject[i].url
        });
        delete batmanLookup[key];
      } else {
        mergedData.push(supermanObject[i]);
      }
    }

    for (let key in batmanLookup) {
      mergedData.push(batmanLookup[key])
    }
    
    this.setState({ mergedData });
  }

  render() {
    let listings = this.state.mergedData.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    return (
      <ListGroup>
          {listings || 'Please wait, loading listings...'}
      </ListGroup>
    );
  }
}

export default ListingsHub;