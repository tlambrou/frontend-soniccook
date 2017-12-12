import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import AutoCompleteSuggest from './AutoCompleteSuggest'
import PreviewSearch from './PreviewSearch'
import ProgressLoader from './ProgressLoader'
import axios from 'axios'
import serverPath from '../paths'
{/*import { PulseLoader,
  RotateLoader,
  BeatLoader,
  RiseLoader,
  SyncLoader,
  GridLoader,
  ClipLoader,
  FadeLoader,
  ScaleLoader,
  SquareLoader,
  PacmanLoader,
  SkewLoader,
  RingLoader,
  MoonLoader,
  DotLoader,
  BounceLoader } from 'halogen'*/}

  export default class Search extends Component {

    constructor(props) {
      super(props)
      this.state = {
        search: "",
        waiting: false,
        dataSource: []
      };
      this.requestData = this.requestData.bind(this);
    }

    changeSearch(value) {
      if (this.state.waiting === false) {
        setTimeout(this.requestData, 2000);
      }

      this.setState({
        search: value,
        waiting: true
      })
    }

    requestData() {
      axios.get(`${serverPath}/ingredients/${this.state.search}`)
      .then((response) => {
        console.log(response)
        this.setState({ dataSource: response.data, waiting: false })
      })
      .catch((error) => {
        console.log("Oops! There was an error: ", error)
      })
    }

    render() {
      return (
        <div>
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="search-component">
                <AutoComplete value={this.state.search}
                  hintText="Type something"
                  dataSource={this.state.dataSource}
                  floatingLabelText="Search"
                  onUpdateInput={this.changeSearch.bind(this)}
                  fullWidth={true}
                  />
                { (this.state.waiting) ? <ProgressLoader /> : <span></span> }
                <p><span><strong>Here is your search:</strong>... {this.state.search}</span></p>
              </div>
            </div>
          </div>
          <br/>
          <hr/>
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="search-component">
                <AutoCompleteSuggest/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="search-component">
                <PreviewSearch />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

            {/*<PulseLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <RotateLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <BeatLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <RiseLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <SyncLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <GridLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <ClipLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <FadeLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <ScaleLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <SquareLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <PacmanLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <SkewLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <RingLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <MoonLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <DotLoader loading={true} color="#26A65B" size="16px" margin="4px"/>
            <BounceLoader loading={true} color="#26A65B" size="16px" margin="4px"/>*/}
          </div>
        </div>


      )
    }
  }
