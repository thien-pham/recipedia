/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe, fetchRecipes} from '../actions';

class Recipe extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes(this.props.restaurantId))
  }
  render() {
    if(!this.props.haveRecipe) {
      return <p>{this.props.errorMessage}</p>
    }
    const recipesList = this.props.recipes.map((recipe, index) => {
      const {name, ingredients, cookingTime, instructions, photo} = recipe;
      return <li key={index}>
        <div className="image-container">
          <img src={photo} alt=""/>
        </div>
        <p className="name">{name}</p>
        <p className="ingredients">What you'll need: {ingredients}</p>
        <p className="instructions">Cooking Instruction: {instructions}</p>
        <p className="cookingTime">{cookingTime} minutes</p>
      </li>
    })
    return (
      <ul className="ind-recipes-container">{recipesList}</ul>
    )
  }
}
export const mapStateToProps = (state, props) => ({
  recipes: state.currentRecipes.recipes,
  haveRecipe: state.haveRecipe,
  errorMessage: state.error
})

export default connect(mapStateToProps)(Recipe);
