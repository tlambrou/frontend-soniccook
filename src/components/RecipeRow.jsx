
import React, { Component } from 'react'
import axios from 'axios'
import serverPath from '../paths'
import { Link } from 'react-router-dom'



export class RecipeRow extends Component {

  constructor(props){
    super(props)
    this.state = {
      editToggle: "",
      deleteToggle: ""
    }
  }
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

  handleEditTooltip(event) {
    var toggle = event.target.getAttribute('data-toggle')
    event.target.getAttribute('data-toggle="tooltip"').toggle({ trigger: 'hover' })
    console.log(toggle)
  }


  render() {

    return (
      <tr>
        <td><Link to={`/recipes/${this.props.id}`}>{this.props.track}</Link></td>
        <td>{this.props.artist}</td>
        <td>{this.props.album}</td>
        <td className="text-right">{this.props.instrument}</td>
        <td className="td-actions text-right">
          <button ref="editTooltip" type="button" onClick={(e) => this.props.edit({...this.props})} data-toggle="tooltip" data-placement="top" title="Edit" data-original-title="Edit" className="btn btn-success btn-link btn-sm">
            <i className="fa fa-edit"></i>
          </button>
          <button onClick={ (e) => this.delete() } data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete" className="btn btn-danger btn-link btn-sm">
            <i className="fa fa-times"></i>
          </button>
        </td>
      </tr>
    )
  }
}

export default RecipeRow
