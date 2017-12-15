import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md bg-danger">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Sonic Cook</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar
