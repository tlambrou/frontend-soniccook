import React, { Component } from 'react'
import Navbar from "./Navbar"
import Recipes from "./Recipes"
import RecipeShow from './RecipeShow'
import RecipesNew from './RecipesNew'
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
            <Route path='/recipes/:id' component={RecipeShow}/>
            <Route exact path='/new' component={RecipesNew}/>
          </Switch>

      </div>
    )
  }

}

export default Main
