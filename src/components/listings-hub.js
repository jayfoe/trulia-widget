import React, { Component } from 'react';
import '../style/listings-hub.css';
import ListHome from './list-home';
import { Button } from 'react-bootstrap';


class ListingsHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mergedData: this.props.mergedData,
      sortedBy: ''
    }
  }

  sortListings(sortedBy) {
    let sortedData = this.state.mergedData;
    if (sortedBy === 'price') {
      sortedData = sortedData.sort((a, b) => {
        return (a.price.replace(/,/g,'') - b.price.replace(/,/g,''));
      });
    } else if (sortedBy === 'beds') {
      sortedData = sortedData.sort((a, b) => {
        return (a.beds - b.beds);
      });
    } else if (sortedBy === 'sqft') {
      sortedData = sortedData.sort((a, b) => {
        return (a.sqft - b.sqft);
      });
    }
    this.setState({ mergedData: sortedData, sortedBy });
  }

  render() {
    let listings = this.state.mergedData.map((item) => {
      return <ListHome home={item} key={item.address} />
    });

    return (
      <div className='listings-hub'>
        <h4>Awesome Listings Widget</h4>
        <div className='buttons-container'>
          <Button active={this.state.sortedBy === 'price'} onClick={() => this.sortListings('price')}>
            Price
          </Button>
          <Button active={this.state.sortedBy === 'beds'} onClick={() => this.sortListings('beds')}>
            Beds
          </Button>
          <Button active={this.state.sortedBy === 'sqft'} onClick={() => this.sortListings('sqft')}>
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