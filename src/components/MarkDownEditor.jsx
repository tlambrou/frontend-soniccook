import React, { Component } from 'react'
import Editor from 'react-md-editor'

export class MarkDownEditor extends Component {

  constructor(props){
    super(props)
    this.state = {
      code: this.props.code
    }
  }

  render() {
    return <Editor value={this.props.code} />
  }
}

export default MarkDownEditor
