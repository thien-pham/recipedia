/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {FETCH_RESTAURANT_REQUEST, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILURE, fetchRestaurants} from '../actions'
import Link from 'react-router-dom';
import TopNav from './TopNav';
import InfoModal from './InfoModal';

export class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(event){
    event.preventDefault();
    const query = {
      search: this.searchInput.value,
      location: this.locationInput.value
    }
    this.form.reset();
    return this.props.dispatch(fetchRestaurants(query))
  }
  render() {

    return(
      <div className="overlay">
        <TopNav />
        <h1 className="title centered"><span className="red">Recipe</span>dia</h1>

      <form ref={form => this.form = form} className="search-bar" onSubmit={e=>{this.onSearch(e)}}>
        <video id="background-video" loop autoPlay>
          <source src="https://s3-us-west-1.amazonaws.com/dakota-bryant-videos/Restaurant+-+1190.mp4" type="video/mp4"/>
          <source src="https://s3-us-west-1.amazonaws.com/dakota-bryant-videos/Restaurant+-+1190.mp4" type="video/ogg"/>
          Your browser does not support the video tag.
        </video>
        <div className="label-container">
          <label htmlFor="search-input">Find</label>
        </div>
        <input type="text" className="search-input" placeholder="tacos, cheap dinner, The Brook" required
                ref={input => this.searchInput = input} />
        <div className="label-container">
          <label htmlFor="location-input">Near</label>
        </div>
        <input type="text" className="location-input" placeholder="Tulsa, OK" required
                ref={input => this.locationInput = input} />
        <button type="submit">Search</button>
      </form>
    </div>
    )
  }
}

 export const mapStateToProps = state => ({
   restaurants: state.restaurants,
   isSearching: state.isSearching
 })

export default connect(mapStateToProps)(Searchbar);
