import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

const ListHome = ({home}) => {
  return (
    <Col xs={4}>
      <Thumbnail src={home.img} alt="242x200">
        <h3>{home.address}</h3>
        <p>{home.beds} beds</p>
        <p>{home.baths} baths</p>
        <p>{home.sq_ft} sq ft</p>
      </Thumbnail>
    </Col>
  )
}

export default ListHome;