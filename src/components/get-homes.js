import React, { Component } from 'react';
import ListingsHub from './listings-hub';

class GetHomes extends Component {
  componentWillMount() {
    let batmanData = window.__BATMAN_DATA__;
    let batmanArray = [];

    for (let key in batmanData) {
      batmanArray.push({
        address: key,
        street: key.substring(0, key.indexOf(',')),
        city: key.substring(key.indexOf(',')+2),
        price: batmanData[key].cost,
        beds: batmanData[key].beds,
        baths: batmanData[key].baths,
        sqft: batmanData[key].sq_ft,
        img: batmanData[key].img,
        url: batmanData[key].url
      });
    }

    let batmanLookup = {};
    for (let i = 0; i < batmanArray.length; i++) {
      batmanLookup[batmanArray[i].address] = batmanArray[i];
    }

    let supermanData = window.__SUPERMAN_DATA__.items;
    let supermanArray = [];
    for (let i = 0; i < supermanData.length; i++) {
      let supermanStreet = supermanData[i].address.substring(0, supermanData[i].address.indexOf(','));
      let supermanCity = supermanData[i].address.substring(supermanData[i].address.indexOf(',')+2);

      supermanArray.push({
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
    for (let i = 0; i < supermanArray.length; i++) {
      if (supermanArray[i].address in batmanLookup) {
        let key = supermanArray[i].address;
        mergedData.push({
          address: batmanLookup[key].address || supermanArray[i].address,
          street: batmanLookup[key].street || supermanArray[i].street,
          city: batmanLookup[key].city || supermanArray[i].city,
          price: batmanLookup[key].price || supermanArray[i].price,
          beds: batmanLookup[key].beds || supermanArray[i].beds,
          baths: batmanLookup[key].baths || supermanArray[i].baths,
          sqft: batmanLookup[key].sqft || supermanArray[i].sqft,
          built: batmanLookup[key].built || supermanArray[i].built,
          img: batmanLookup[key].img || supermanArray[i].img,
          url: batmanLookup[key].url || supermanArray[i].url
        });
        delete batmanLookup[key];
      } else {
        mergedData.push(supermanArray[i]);
      }
    }

    for (let key in batmanLookup) {
      mergedData.push(batmanLookup[key])
    }

    return mergedData;
  }

  render() {
    return (
      <ListingsHub mergedData={this.componentWillMount()} />
    );
  }
}

export default GetHomes;