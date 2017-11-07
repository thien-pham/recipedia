/* eslint-disable */
import {
  FETCH_RESTAURANT_REQUEST,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAILURE,
  FETCH_RECIPE_FAILURE,
  FETCH_RECIPE_SUCCESS,
  SELECT_RESTAURANT,
  SUBMIT_RECIPE_SUCCESS,
  SUBMIT_RECIPE_FAILURE,
  TOGGLE_INFO_MODAL
} from '../actions';

const initialState = {
  loading: false,
  showInfoModal: false,
  isSearching: false,
  restaurants: [],
  error: null,
  selectRestaurant: null,
  haveRecipe: false,
  listingsShowing: false,
  currentRecipes: {
    recipes: [],
    _id: null,
    yelpId: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        currentRecipes: {...state.currentRecipes},
        listingsShowing: true,
        isSearching: true
      }
    case FETCH_RESTAURANT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        listingsShowing: false
      }
    case FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        restaurants: action.restaurants,
        listingsShowing: true
      }
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.errorMessage.message
      }
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        haveRecipe: action.recipes != null,
        currentRecipes: {
          recipes: action.recipes.recipes,
          _id: action.recipes._id,
          yelpId: action.recipes.yelpId
        }
      }
    case SUBMIT_RECIPE_SUCCESS:
      return {
        ...state,
        currentRecipes: {...state.currentRecipes, ...action.recipes},
        loading: false,
        haveRecipe: true,
        error: null
      }
    case SELECT_RESTAURANT:
      return {
        ...state,
        selectRestaurant: state.restaurants.find(r => action.restaurant.id === r.id),
        currentRecipes: {...initialState.currentRecipes},
        isSearching: false
      }
    case TOGGLE_INFO_MODAL:
      return {
        ...state,
        showInfoModal: !state.showInfoModal
      }
    default:
      return state;
  }
}

export default reducer;
