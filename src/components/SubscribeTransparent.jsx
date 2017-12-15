import React, { Component } from 'react'

export class SubscribeTransparent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  updateText(e) {
    e.preventDefault()
    this.setState({text:e.target.value})
  }

  render() {

    return (
      <div>
        <div className="subscribe-line subscribe-line-transparent" style={{backgroundImage: `url('img/anton-ponomarev-206484.jpg')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-8">
                        <form className="">
                            <div className="form-group">
                                <input onChange={(e) => this.updateText(e) } value={this.state.text} type="text" className="form-control" placeholder="Enter in the name of your sound..."/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <button type="button" className="btn btn-primary btn-block btn-round">Get Started!</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="separator"></div>
      </div>
    )
  }

}

export default SubscribeTransparent
