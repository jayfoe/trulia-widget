import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const ListHome = ({address}) => {
  console.log(address);
  if (typeof(address) === "string");
    return (
      <div>{address}</div>
    );
}

export default ListHome;