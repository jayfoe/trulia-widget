import React, { Component } from 'react';
import axios from 'axios';

class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batmanData: {},
      supermanData: {}
    }
  }

  componentDidMount() {
    axios.get('/data/batmanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let batmanData = JSON.parse(cleaned);
        this.setState({ batmanData });
      })

    axios.get('/data/supermanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let supermanData = JSON.parse(cleaned);
        this.setState({ supermanData });
      })
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default ListingsHub;