import React, { Component } from 'react';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import ListHome from './list-home';
import _ from 'lodash';
import $ from 'jquery';

class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batmanArray: [],
      supermanArray: [],
      finalData: []
    }
  }

  componentWillMount() {
    let batmanData = window.__BATMAN_DATA__;
    let batmanArray = [];
    let batmanObject = [];

    for (let key in batmanData) {
      if (batmanData.hasOwnProperty(key)) {
        batmanData[key].address = key;
        batmanArray.push(batmanData[key]);
      }
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

    let merged = batmanObject.concat(supermanObject);
    let mergedSorted = _.sortBy(merged, ['address']);

    let finalData = [];
    for (let k = 1; k < mergedSorted.length; k++) {
      if (mergedSorted[k].address !== mergedSorted[k-1].address) {
        finalData.push(mergedSorted[k-1]);
      }
    }
    finalData.push(mergedSorted[mergedSorted.length-1]);
    console.log(finalData);

    // let combinedData = {
    //   address: batmanObject.address || supermanObject.address,
    //   price: batmanObject.price || supermanObject.price,
    //   beds: batmanObject.beds || supermanObject.beds,
    //   baths: batmanObject.baths || supermanObject.baths,
    //   sqft: batmanObject.sqft || supermanObject.sqft,
    //   built: batmanObject.built || supermanObject.built,
    //   img: batmanObject.img || supermanObject.img,
    //   url: batmanObject.url || supermanObject.url
    // }

    this.setState({ batmanArray, supermanArray: supermanData, finalData });
  }

  render() {
    let listings = this.state.finalData.map((item) => {
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