import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import ProgressLoader from './ProgressLoader'
import axios from 'axios'
import serverPath from '../paths'

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
            { (this.state.waiting) ? (<ProgressLoader />) : (<span></span>) }
            <p><span><strong>Here is your search:</strong>... {this.state.search}</span></p>
          </div>
            </div>
      </div>
    )
  }
}
