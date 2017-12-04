import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import ProgressLoader from './ProgressLoader'
import amazon from 'amazon-product-api'


export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      awsClient: (amazon.createClient({
        awsId: process.env.AWSAccessKeyId,
        awsSecret: process.env.AWSSecretKey
      })),
      waiting: false,
      dataSource: []
    };
  }

  render() {
    return (
      <div className="search-component">
        <TextField value={this.state.search}
          hintText="Type something"
          dataSource={this.state.dataSource}
          floatingLabelText="Search"
          onUpdateInput={this.changeSearch}
          />
        <ProgressLoader />
        <p><span><strong>Here is your search:</strong>... {this.state.search}</span></p>
      </div>
    );
  }

  changeSearch(value) {
    this.setState({waiting: true})

    this.state.awsClient.itemSearch({
      keywords: value,
      browseNodeId: '11091801',
      responseGroup: "ItemAttributes,BrowseNodes,Images"
    }).then(function(results){
      console.log("We got results!: ", results[0].MediumImage[0]);
    }).catch(function(err){
      console.log("There was an error: ", err.Error[0].Message);
    });

    this.setState({
      search: text
    });
  }

  getAmazonData(value) {

  }
}
