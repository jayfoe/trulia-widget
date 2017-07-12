import React, { Component } from 'react';
import ListingsHub from './listings-hub';

class GetHomes extends Component {
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
      let batmanStreet = batmanArray[i].address.substring(0, batmanArray[i].address.indexOf(','));
      let batmanCity = batmanArray[i].address.substring(batmanArray[i].address.indexOf(',')+2);

      batmanObject.push({
        address: batmanArray[i].address,
        street: batmanStreet,
        city: batmanCity,
        price: batmanArray[i].cost,
        beds: batmanArray[i].beds,
        baths: batmanArray[i].baths,
        sqft: batmanArray[i].sq_ft,
        img: batmanArray[i].img,
        url: batmanArray[i].url
      });
    }

    let batmanLookup = {};
    for (let i = 0; i < batmanObject.length; i++) {
      batmanLookup[batmanObject[i].address] = batmanObject[i];
    }

    let supermanData = window.__SUPERMAN_DATA__.items;
    let supermanObject = [];
    for (let i = 0; i < supermanData.length; i++) {
      let supermanStreet = supermanData[i].address.substring(0, supermanData[i].address.indexOf(','));
      let supermanCity = supermanData[i].address.substring(supermanData[i].address.indexOf(',')+2);

      supermanObject.push({
        address: supermanData[i].address,
        street: supermanStreet,
        city: supermanCity,
        price: supermanData[i].price.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        beds: supermanData[i].beds,
        baths: supermanData[i].baths,
        sqft: supermanData[i].sqft,
        built: supermanData[i].built,
        img: supermanData[i].thumb,
        url: supermanData[i].url
      });
    }

    let mergedData = [];
    for (let i = 0; i < supermanObject.length; i++) {
      if (supermanObject[i].address in batmanLookup) {
        let key = supermanObject[i].address;
        mergedData.push({
          address: batmanLookup[key].address || supermanObject[i].address,
          street: batmanLookup[key].street || supermanObject[i].street,
          city: batmanLookup[key].city || supermanObject[i].city,
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
    return (
      <ListingsHub mergedData={this.state.mergedData} />
    );
  }
}

export default GetHomes;