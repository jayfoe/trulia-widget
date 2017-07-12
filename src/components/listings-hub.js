import React, { Component } from 'react';
import '../style/listings-hub.css';
import ListHome from './list-home';
import { Button } from 'react-bootstrap';


class ListingsHub extends Component {
  constructor(props) {
    super(props);

  }

  sortListings(sortOrder) {
    let sortedData = this.state.mergedData;
    if (sortOrder === 'price') {
      sortedData = sortedData.sort((a, b) => {
        return (a.price.replace(/,/g,'') - b.price.replace(/,/g,''));
      });
    } else if (sortOrder === 'beds') {
      sortedData = sortedData.sort((a, b) => {
        return (a.beds - b.beds);
      });
    } else if (sortOrder === 'sqft') {
      sortedData = sortedData.sort((a, b) => {
        return (a.sqft - b.sqft);
      });
    }
    this.setState({ mergedData: sortedData });
  }

  render() {
    let listings = this.props.mergedData.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    return (
      <div className='listings-hub'>
        <h4>Awesome Listings Widget</h4>
        <div className='buttons-container'>
          <Button onClick={() => this.sortListings('price')}>
            Price
          </Button>
          <Button onClick={() => this.sortListings('beds')}>
            Beds
          </Button>
          <Button onClick={() => this.sortListings('sqft')}>
            Sq. ft.
          </Button>
        </div>
        <ul className='listings-container'>
          {listings || 'Please wait, loading listings...'}
        </ul>
      </div>
    );
  }
}

export default ListingsHub;