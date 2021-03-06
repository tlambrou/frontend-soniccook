
import React, { Component } from 'react'
import axios from 'axios'
import serverPath from '../paths'

export class RecipeShow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formData: {
        artist: "",
        album: "",
        track: "",
        instructions: "",
        instrument: "",
        sampleURL: ""
      }
    }
  }

  mapToState(e) {
    var text
    e.target.value === null || e.target.value === undefined ? text = "" : text = e.target.value
    if (e.target.name === "artist") this.setState({formData: {...this.state.formData, artist: text }})
    else if (e.target.name === "album") this.setState({formData: {...this.state.formData, album: text }})
    else if (e.target.name === "track") this.setState({formData: {...this.state.formData, track: text }})
    else if (e.target.name === "instrument") this.setState({formData: {...this.state.formData, instrument: text }})
    else if (e.target.name === "sampleURL") this.setState({formData: {...this.state.formData, sampleURL: text }})
    else if (e.target.name === "instructions") this.setState({formData: {...this.state.formData, instructions: text }})
  }

  submitNewRecipe() {
    axios.post(`${serverPath}/recipes/create`, this.state.formData)
    .then((response) => {
      console.log("Here is an response: ", response)
      if (response.status === 200) {
        this.props.history.goBack()
      }
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  render() {
    return (
      <div className="section section-gray">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-7">
              <h3>Create a New Sonic Recipe...</h3>
              <br/>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="artist">Artist</label>
                <input type="text" onChange={(e) => {this.mapToState(e)}} name="artist" id="artist" value={this.state.formData.artist} className="form-control" placeholder="Artist" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="album">Album</label>
                <input type="text" onChange={(e) => {this.mapToState(e)}} name="album" id="album"value={this.state.formData.album} className="form-control" placeholder="Album" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="track">Track</label>
                <input type="text" onChange={(e) => {this.mapToState(e)}} name="track" id="track" value={this.state.formData.track} className="form-control" placeholder="Track" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="instructions">Instructions</label>
                <input type="text" onChange={(e) => {this.mapToState(e)}} name="instructions" id="instructions" value={this.state.formData.instructions} className="form-control" placeholder="Instructions" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="instrument">Instrument</label>
                <input type="text" onChange={(e) => {this.mapToState(e)}} name="instrument" id="instrument" value={this.state.formData.instrument} className="form-control" placeholder="Instrument" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="sampleURL">YouTube URL</label>
                <input type="text" onChange={(e) => {this.mapToState(e)}} name="sampleURL" id="sampleURL" value={this.state.formData.sampleURL} className="form-control" placeholder="YouTube URL" />
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="col-md-4 col-sm-6 col-xs-8 d-flex justify-content-between">
                <div className="col-6 d-flex justify-content-end">
                  <button className="btn btn-neutral" onClick={() => this.props.history.goBack()}>Cancel</button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button className="btn btn-primary" onClick={this.submitNewRecipe.bind(this)}>Save</button>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>

    )
  }
}

export default RecipeShow
