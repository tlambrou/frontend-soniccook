import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import ProgressLoader from './ProgressLoader'
import axios from 'axios'

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
    if (this.state.waiting == false) {
      setTimeout(this.requestData, 2000);
    }
    this.setState({
      search: value,
      waiting: true
    })
  }

  requestData() {
    axios.get(`http://localhost:8000/ingredients/${this.state.search}`)
    .then((response) => {
      console.log(response.data)
      this.setState({ dataSource: response.data, waiting: true })
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  render() {

    // Get data if there is a search term
    if (this.state.search !== "") {

    }

    return (
      <div className="search-component">
        {console.log("Here is the search: ", this.state.search)}
        <AutoComplete value={this.state.search}
          hintText="Type something"
          dataSource={this.state.dataSource}
          floatingLabelText="Search"
          onUpdateInput={this.changeSearch.bind(this)}
          />
        <ProgressLoader />
        <p><span><strong>Here is your search:</strong>... {this.state.search}</span></p>
      </div>
    );
  }



  getAmazonData(value) {

  }
}
