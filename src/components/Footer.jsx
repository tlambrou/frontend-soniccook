import React, { Component } from 'react'

export class Footer extends Component {

  currentYear() {
    var now = new Date()
    return now.getFullYear()
  }

  render() {
    return (
      <footer className="footer footer-black footer-big">

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="logo text-center">
                            <h3>Sonic Cook</h3>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-2 col-sm-8">
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                       Team
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                       Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                       Join us!
                                    </a>
                                </li>
                            </ul>
                            <hr/>
                            <div className="copyright">
                                <div className="pull-left">
                                    © <script>document.write(new Date().getFullYear())</script>{this.currentYear()}, made with <i className="fa fa-heart heart"></i> in San Francisco
                                </div>
                                <div className="pull-right">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Terms 
                                            </a>
                                        </li>
                                         |
                                        <li>
                                            <a href="#">
                                                 Privacy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
  }
}

export default Footer
