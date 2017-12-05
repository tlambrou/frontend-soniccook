
import React, { Component } from 'react'

export class RecipeRow extends Component {
  render() {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>{this.props.track}</td>
        <td>{this.props.artist}</td>
        <td>{this.props.album}</td>
        <td className="text-right">{this.props.instrument}</td>
        <td className="td-actions text-right">
          <button type="button" data-toggle="tooltip" data-placement="top" title="Edit" data-original-title="Edit" className="btn btn-success btn-link btn-sm">
            <i className="fa fa-edit"></i>
          </button>
          <button type="button" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete" className="btn btn-danger btn-link btn-sm">
            <i className="fa fa-times"></i>
          </button>
        </td>
      </tr>
    )
  }
}

export default RecipeRow
