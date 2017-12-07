
import React, { Component } from 'react'
import axios from 'axios'
import serverPath from '../paths'

export class RecipeRow extends Component {

  delete() {
    axios.delete(`${serverPath}/recipes/${this.props.id}`)
    .then((response) => {
      if (response.status === 200) {
        this.props.delete(this.props)
      }
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.track}</td>
        <td>{this.props.artist}</td>
        <td>{this.props.album}</td>
        <td className="text-right">{this.props.instrument}</td>
        <td className="td-actions text-right">
          <button type="button" onClick={() => this.props.edit({...this.props})} data-toggle="tooltip" data-placement="top" title="Edit" data-original-title="Edit" className="btn btn-success btn-link btn-sm">
            <i className="fa fa-edit"></i>
          </button>
          <button type="button" onClick={this.delete.bind(this)} data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete" className="btn btn-danger btn-link btn-sm">
            <i className="fa fa-times"></i>
          </button>
        </td>
      </tr>
    )
  }
}

export default RecipeRow
