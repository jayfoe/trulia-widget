import React, { Component } from 'react';
import { Col, Thumbnail, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const ListHome = ({home}) => {
  

  return (
    <ListGroupItem>
      <a href={home.url}>
        <Image src={home.img} href={home.url} alt="242x200" responsive />
        {home.address && <h4>{home.address}</h4>}
      </a>
      <div>
        {home.price && <h3>${home.price}</h3>}
        {home.beds && <p>{home.beds} beds</p>}
        {home.baths && <p>{home.baths} baths</p>}
        {home.sqft && <p>{home.sqft} sq ft</p>}
        {home.built && <p>Built in {home.built}</p>}
      </div>
    </ListGroupItem>
  )
}

export default ListHome;