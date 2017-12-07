// ----------- reducer 1 ----------
// Handled by recipesReducer

{
  recipes: {
    currentRecipe: null,
    recipeList: [{}, {}, {}, {}, {}]
  }
}


// ----------- reducer 2  ----------
// recipeList is handled by recipeListReducer
// currentRecipe is handled by currentRecipeReducer

{
  recipeList: [{}, {...current...}, {}, {}, {}],
  currentRecipe: 1
}


// 1) list tapping row
//    1) call set currentRecipe
//    2) call router -> go to details

<Link onClick={() => {
  this.props.setCurrentRecipe(i)
}} to='/details' />

// 2) In details container
//    1) mapStateToProps

<Details />

mapStateToProps = (state) => {
  return {
    recipe: state.recipeList[state.currentRecipe]
  }
}
