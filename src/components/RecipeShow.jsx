
import React, { Component } from 'react'
import RecipeRow from './RecipeRow'
import axios from 'axios'
import serverPath from '../paths'
import { Link } from 'react-router-dom'


export class RecipeShow extends Component {


  componentWillMount() {
    this.getRecipeData()
  }

  getRecipeData() {
    this.setState({ waiting: true })
    axios.get(`${serverPath}/recipes/`)
    .then((response) => {
      this.setState({ recipes: response.data, waiting: false })
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  render() {
    return (
      <div className="section section-gray">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-7">
              <h2>Sonic Recipes...</h2>
              <br/>
            </div>
            <div className="col-5 d-flex justify-content-end">

              <Link className="btn btn-sm btn-primary my-2 my-sm-0" to='/'>New Sonic Recipe</Link>
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

export default RecipeShow
