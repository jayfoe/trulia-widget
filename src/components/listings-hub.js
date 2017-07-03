import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';

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
        console.log(cleaned);
      })

    axios.get('/data/supermanRealty.json')
      .then((response) => {
        let str = response.data;
        let cleaned = str.substring(str.lastIndexOf("=")+1,str.lastIndexOf(";"));
        let supermanData = JSON.parse(cleaned);
        this.setState({ supermanData });
        console.log(cleaned);
      })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
            </Thumbnail>
          </Col>
          <Col xs={4}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
            </Thumbnail>
          </Col>
          <Col xs={4}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ListingsHub;