
import React, { Component } from 'react'
import axios from 'axios'
import serverPath from '../paths'
import AudioPlayer from './AudioPlayer'


export class RecipeShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        artist: this.props.artist ? this.props.artist : "",
        album: this.props.album ? this.props.album : "",
        track: this.props.track ? this.props.track : "",
        instructions: this.props.instructions ? this.props.instructions : "",
        instrument: this.props.instrument ? this.props.instrument : "",
        sampleURL: this.props.sampleURL ? this.props.album : ""
      }
    }
  }

  componentWillMount() {
    this.getRecipeData()
  }

  getRecipeData() {
    this.setState({ waiting: true })
    axios.get(`${serverPath}/recipes/${this.props.match.params.id}`)
    .then((response) => {
      this.setState({ formData: response.data })
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  render() {
    return (
      <div className="section section-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
            </div>
          </div>
          <div className="row d-flex justify-content-start align-items-start">
            <div className="col-1">
              <button className="btn btn-sm btn-outline-default" onClick={(e) => this.props.history.goBack()} >&lt; Back</button>
            </div>
            <div className="col-md-8 ml-auto mr-auto">
              <h2><strong>{this.state.formData.track}</strong> by <i>{this.state.formData.artist}</i></h2>
              <h4>from the album <strong>{this.state.formData.album}</strong></h4>
              <div className="article-content">
                <h3>
                  Sample Preview
                </h3>
                <br/>
                {console.log("SampleURL:", this.state.formData.sampleURL)}
                <AudioPlayer sampleURL={this.state.formData.sampleURL} />
                <h3>
                  Ingredients
                </h3>
                <h4>
                  <small>
                    <strong>Instrument:  </strong>
                    {this.state.formData.instrument}
                  </small>
                </h4>
                <h6>
                </h6>
                <h3>
                  Instructions
                </h3>
                <br/>
                <h6>
                  {this.state.formData.instructions}
                </h6>


              </div>
            </div>

          </div>
        </div>
      </div>



    )
  }
}

export default RecipeShow
