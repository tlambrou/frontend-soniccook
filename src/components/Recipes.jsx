
import React, { Component } from 'react'
import RecipeRow from './RecipeRow'
import axios from 'axios'
import serverPath from '../paths'

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
      console.log(response.data)
      this.setState({ recipes: response.data, waiting: false })
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  renderRecipes() {
    return (
      this.state.recipes.map((recipe, index) => {
        return(
          <RecipeRow
            key={index}
            {...recipe}
            />
        )
      })
    )
  }

  render() {
    return (
      <div className="section section-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Track</th>
                      <th>Artist</th>
                      <th>Album</th>
                      <th className="text-right">Instrument</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log("Recipes: ", this.state.recipes)}
                    {this.renderRecipes()}
                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>

      </div>

    )
  }
}

export default Recipes
