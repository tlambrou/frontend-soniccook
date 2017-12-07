import React, { Component } from 'react'
import Navbar from "./Navbar"
import Recipes from "./Recipes"
import RecipeShow from './RecipeShow'
import RecipesNew from './RecipesNew'
import RecipesEdit from './RecipesEdit'
import Search from "./Search"
import { Switch, Route } from 'react-router-dom'

class Main extends Component {

  render() {
    return (
      <div>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={Recipes}/>
            <Route path='/search' component={Search}/>
            <Route exact path='/recipes/:id' component={RecipeShow}/>
            <Route exact path='/new' component={RecipesNew}/>
            <Route exact path='/recipes/:id/edit' component={RecipesEdit}/>
          </Switch>

      </div>
    )
  }

}

export default Main
