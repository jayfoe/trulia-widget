import React, { Component } from 'react';
import '../style/list-home.css';

const ListHome = ({home}) => {
  return (
    <li className='thumbnail col-xs-12 col-md-6 home-container'>
      <a className='thumbnail-link' href={home.url}>
        <img className="preview" src={home.img} href={home.url} />
        {home.street && <h4>{home.street}</h4>}
        {home.city && <h4> {home.city}</h4>}
      </a>
      <div className='home-data'>
        {home.price && <h3>${home.price}</h3>}
        <div className='home-details'>
          {home.beds && <p>{home.beds} beds</p>}
          {home.baths && <p> &middot; </p>}
          {home.baths && <p>{home.baths} baths</p>}
          {home.sqft && <p> &middot; </p>}
          {home.sqft && <p>{home.sqft} sq ft</p>}
        </div>
      </div>
      <div className='home-built'>
        {home.built && <p>Built in {home.built}</p>}
      </div>
    </li>
  )
}

export default ListHome;