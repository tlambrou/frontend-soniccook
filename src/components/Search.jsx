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
    console.log("Here is the path", serverPath)
    axios.get(`${serverPath}/ingredients/${this.state.search}`)
    .then((response) => {
      console.log(response.data)
      this.setState({ dataSource: response.data, waiting: false })
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
    })
  }

  render() {

    const waiting = this.state.waiting

    return (
      <div className="search-component">
        {console.log("Here is the search: ", this.state.search)}
        {console.log("Here is the waiting state: ", this.state.waiting)}
        {console.log("Here is the dataSource: ", this.state.dataSource)}

        <AutoComplete value={this.state.search}
          hintText="Type something"
          dataSource={this.state.dataSource}
          floatingLabelText="Search"
          onUpdateInput={this.changeSearch.bind(this)}
          fullWidth={true}
          />
        { (waiting) ? (<ProgressLoader />) : (<span></span>) }
        <p><span><strong>Here is your search:</strong>... {this.state.search}</span></p>
      </div>
    );
  }



  getAmazonData(value) {

  }
}
