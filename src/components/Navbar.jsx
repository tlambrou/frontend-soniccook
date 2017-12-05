import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md bg-primary">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Sonic Cook</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="form-inline ml-auto">
              <input className="form-control mr-sm-2 no-border" type="text" placeholder="Search"/>
              <button type="submit" className="btn btn-primary btn-just-icon btn-round"><i className="nc-icon nc-zoom-split" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar
