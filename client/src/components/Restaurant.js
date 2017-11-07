import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

export class Restaurant extends Component {
  render() {
    const {restaurant: {name, rating, image_url, price, location: {display_address}, display_phone, id}} = this.props;
    console.log(this.props.isSearching);
    return (
      <div>
      {/* {this.props.isSearching ?
        <RestaurantListing />
        : */}
        <div className="restaurant-page">
          <div className="info-container">
            <h1>{name}</h1>
            <p className="rating">Rating: <span className="red">{rating}</span></p>
            <p className="price">{price}</p>
            <div className="image-container">
              <img src={image_url} alt=""/>
            </div>
            <div className="address-container">
              <p>{display_address[0]}</p>
              <p>{display_address[1]}</p>
              <p>{display_phone}</p>
            </div>
          </div>
          <div className="recipes-container">
              <Recipe className="recipe" restaurantId={id} />
              <RecipeForm className="recipe-form" restaurantId={id} />
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => {
  return {
    restaurant: state.selectRestaurant,
    isSearching: state.isSearching
  }
}

export default connect(mapStateToProps)(Restaurant);
