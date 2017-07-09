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
        <h3>${home.price}</h3>
        <p>{home.beds} beds</p>
        <p>{home.baths} baths</p>
        <p>{home.sqft} sq ft</p>
        <p>Built in {home.built}</p>
      </div>
    </ListGroupItem>
  )
}

export default ListHome;