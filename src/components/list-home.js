import React, { Component } from 'react';
import { Col, Thumbnail, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const ListHome = ({home}) => {
  return (
    <ListGroupItem>
      <a href={home.url}>
        <Image src={home.img} href={home.url} alt="242x200" responsive />
        <h4>{home.address}</h4>
      </a>
      <div>
        <h3>${home.cost}</h3>
        <p>{home.beds} beds</p>
        <p>{home.baths} baths</p>
        <p>{home.sq_ft} sq ft</p>
      </div>
    </ListGroupItem>
  )
}

export default ListHome;



    // <Col xs={6}>
    //   <Image src={home.img} href={home.url} alt="242x200" thumbnail responsive />
    //   <h4>{home.address}</h4>
    //   <h3>${home.cost}</h3>
    //   <p>{home.beds} beds</p>
    //   <p>{home.baths} baths</p>
    //   <p>{home.sq_ft} sq ft</p>
    // </Col>