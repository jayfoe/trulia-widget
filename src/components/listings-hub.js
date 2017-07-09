import React, { Component } from 'react';
import { Grid, Row, ListGroup, ButtonGroup, Button } from 'react-bootstrap';
import ListHome from './list-home';
import _ from 'lodash';

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
        price: batmanArray[i].cost,
        beds: batmanArray[i].beds,
        baths: batmanArray[i].baths,
        sqft: batmanArray[i].sq_ft,
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
        price: supermanData[j].price.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        beds: supermanData[j].beds,
        baths: supermanData[j].baths,
        sqft: supermanData[j].sqft,
        built: supermanData[j].built,
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

  sortListings(sort) {
    let sortedData = this.state.mergedData;
    if (sort === 'price') {
      sortedData = _.sortBy(sortedData, ['price', 'address']);
    } else if (sort === 'beds') {
      sortedData = _.sortBy(sortedData, ['beds', 'address']);
    } else if (sort === 'sqft') {
      sortedData = _.sortBy(sortedData, ['sqft', 'address']);
    }
    this.setState({ mergedData: sortedData });
  }

  render() {
    let listings = this.state.mergedData.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    return (
      <div>
        <ButtonGroup>
          <Button onClick={() => this.sortListings('price')}>
            Price
          </Button>
          <Button onClick={() => this.sortListings('beds')}>
            Beds
          </Button>
          <Button onClick={() => this.sortListings('sqft')}>
            Sq. ft.
          </Button>
        </ButtonGroup>
        <ListGroup>
            {listings || 'Please wait, loading listings...'}
        </ListGroup>
      </div>
    );
  }
}

export default ListingsHub;