import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import axios from 'axios';
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
    axios.get('/data/batmanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let batmanData = JSON.parse(cleaned);
        let batmanArray = [];

        for (var key in batmanData) {
          if (batmanData.hasOwnProperty(key)) {
            batmanData[key].address = key;
            batmanArray.push(batmanData[key]);
          }
        }

        this.setState({ batmanArray });

      })

    axios.get('/data/supermanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let supermanData = JSON.parse(cleaned);
        this.setState({ supermanData: supermanData.items });
        console.log(this.state);
      })
  }

  render() {
    return (
      <p>?</p>
    );
  }
}

export default ListingsHub;