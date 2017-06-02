/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
// import {submitRecipe} from '../actions';
import Searchbar from './Searchbar';
import {Link} from 'react-router-dom';
import './restaurantListing.css';
import {selectRestaurant} from '../actions';

export class RestaurantListing extends React.Component {
  _selectRestaurant = restaurant => {
    this.props.dispatch(selectRestaurant(restaurant))
  }
  render() {
    const restaurantList = this.props.restaurants.map((restaurant, index) => {
      return (
        <Link key={index} to={`/${restaurant.id}`} onClick={e => this._selectRestaurant(restaurant)}>
          <li className="restaurant-container">
            <div className="image-container">
              <img src={restaurant.image_url} />
            </div>
            <div className="info-container">

            <p className="name">{restaurant.name}</p>
            <p className="price">Price: {restaurant.price}</p>
            <p className="rating">Rating: {restaurant.rating}</p>
          </div>
            <div className="address">
                <p>{restaurant.location.display_address[0]}</p>
                <p>{restaurant.location.display_address[1]}</p>
                <p>{restaurant.display_phone}</p>
            </div>
          </li>
        </Link>
      )
    })
    if(this.props.loading) {
      return <h1>Loading</h1>
    }
    return (
        <ul className="listings-container">{restaurantList}</ul>
    )
  }
}

export const mapStateToProps = state => ({
  restaurants: state.restaurants,
  loading: state.loading,
  listingsShowing: state.listingsShowing
})

export default connect(mapStateToProps)(RestaurantListing);
