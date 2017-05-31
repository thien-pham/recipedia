/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
// import {submitRecipe} from '../actions';
import Searchbar from './Searchbar';
import {Link} from 'react-router-dom';

export class RestaurantListing extends React.Component {

  render() {
    const restaurantList = this.props.restaurants.map((restaurant, index) => {
      return (
        <Link key={index} to={`/${restaurant.id}`}>
        <div className="restaurant-container">
          <li>{restaurant.name}</li>
        </div>
        </Link>
      )
      })


    return (
      <div className="restaurant-container">
        <img src="" alt="" className="restaurant-img"/>
        <ul>{restaurantList}</ul>

      </div>
    )
  }
}

export const mapStateToProps = state => ({restaurants: state.restaurants})

module.exports = connect(mapStateToProps)(RestaurantListing);
