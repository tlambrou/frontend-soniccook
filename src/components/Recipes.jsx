
import React, { Component } from 'react'
import RecipeRow from './RecipeRow'
import axios from 'axios'
import serverPath from '../paths'
import { Link } from 'react-router-dom'
import MessageLoader from './MessageLoader'
import Header from './Header'
import SubscribeTransparent from './SubscribeTransparent'


export class Recipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      waiting: false,
      recipes: []
    }
  }

  componentWillMount() {
    this.getRecipesData()
  }

  getRecipesData() {
    this.setState({ waiting: true })
    axios.get(`${serverPath}/recipes/`)
    .then((response) => {
      this.setState({ recipes: response.data, waiting: false })
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  renderRecipes() {
    return (
      this.state.recipes.map((recipe, index) => {
        recipe.delete = (recipe) => {
          this.setState({recipes: this.state.recipes.filter((currentRecipe, index) => {
            if (currentRecipe.id === recipe.id){
              return false
            } else {
              return true
            }
          })})
        }
        recipe.edit = (recipe) => {
          this.props.history.push(`/recipes/${recipe.id}/edit`)
        }
        return(
          <RecipeRow
            key={index}
            delete={recipe.delete.bind(this)}
            edit={recipe.edit.bind(this)}
            {...recipe}
            />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div className="section section-gray">
          <SubscribeTransparent/>

          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-7">
                <h4>Latest Recipes...</h4>
                <br/>
              </div>
              <div className="col-5 d-flex justify-content-end">

                <Link className="btn btn-primary btn-magnify my-2 my-sm-0" to='/new'><i className="nc-icon nc-spaceship"></i>  New Sonic Recipe</Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Track</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th className="text-right">Instrument</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(this.waiting) ? <MessageLoader message="Reticulating splines..." /> : this.renderRecipes()}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>


          </div>

        </div>
      </div>

    )
  }
}

export default Recipes
