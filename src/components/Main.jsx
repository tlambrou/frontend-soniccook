import React, { Component } from 'react'
import Navbar from "./Navbar"
import Recipes from "./Recipes"
import RecipeShow from './RecipeShow'
import RecipesEdit from './RecipesEdit'
import Search from "./Search"
import Footer from './Footer'
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
          <Route exact path='/new' component={RecipesEdit}/>
          <Route exact path='/recipes/:id/edit' component={RecipesEdit}/>
        </Switch>
        <Footer/>
      </div>
    )
  }

}

export default Main
