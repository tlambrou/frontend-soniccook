import React, { Component } from 'react'
import Navbar from './Navbar'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="header-2">
          <Navbar/>
          <div className="page-header" style={{backgroundImage: `url(/img/michael-henry-252694.jpg)`}}>
            <div className="filter"></div>
            <div className="content-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 offset-md-2 text-center">
                    <h1 className="title"> The Musician's Cookbook</h1>
                    <h5 className="description">Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio.</h5>
                    <br />
                  </div>
                  <div className="col-md-10 offset-md-1">
                    <div className="card card-raised card-form-horizontal no-transition">
                      <div className="card-block">
                        <form method="" action="">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <input type="text" value="" placeholder="City" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <input type="text" value="" placeholder="Country" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <input type="text" value="" placeholder="Date" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <button type="button" className="btn btn-danger btn-block"><i className="nc-icon nc-zoom-split"></i> &nbsp; Search</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }

}

export default Header
